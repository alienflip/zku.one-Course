## install circom
## --------------
#https://docs.circom.io/getting-started/installation/#installing-dependencies

## compile circuit
## ---------------
##  - generates R1CS constraint system, wasm code, 
##      debugging labels, and C/C++ code needed 
##      for witness gen
circom merkle_root.circom --r1cs --wasm --sym --c

## install dependencies
## --------------------
#sudo apt install -y nlohmann-json3-dev
#sudo apt install -y libgmp-dev
#sudo apt install -y nasm

## copy the input files into the witness generator system
## ------------------------------------------------------
cp input.json merkle_root_cpp/
cp input.json merkle_root_js/

## generate the witness
## --------------------
##  - witness: 
cd merkle_root_cpp
# execute c++ code to generate executionable
make
# execute generated file to output witness, extract withness 
./merkle_root input.json witness.wtns
mv witness.wtns ..

## return to root
## --------------
cd ..

## initiate powers of tau ceremony
## -------------------------------
##  -
snarkjs powersoftau new bn128 12 pot12_0000.ptau -v
snarkjs powersoftau contribute pot12_0000.ptau pot12_0001.ptau --name="First contribution" -v

## powers of tau phase 2
## ---------------------
##  -
snarkjs powersoftau prepare phase2 pot12_0001.ptau pot12_final.ptau -v
snarkjs groth16 setup merkle_root.r1cs pot12_final.ptau merkle_root_0000.zkey

## generate proof
## --------------
##  -
snarkjs zkey contribute merkle_root_0000.zkey merkle_root_0001.zkey --name="1st Contributor Name" -v
snarkjs zkey export verificationkey merkle_root_0001.zkey verification_key.json

## verify proof
## ------------
##  -
snarkjs groth16 prove merkle_root_0001.zkey witness.wtns proof.json public.json
