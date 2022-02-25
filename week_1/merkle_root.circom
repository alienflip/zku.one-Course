pragma circom 2.0.0;

include "mimcsponge.circom";

/*
 * log function
 *  - assumes N is a power of 2
 */
function L(N) {
    var i = N;
    var count = 0;
    while (i >= 1) {
        i = i / 2;
        count++;
    }
    return count;
}

// dummy hash
function hash(a, b){
    return a + b;
}

/*
 * merkle_root calculator
 */
template merkle_root(n) {  
    signal input leaves[n];  
    signal output root;

    var treeHeight = L(n);
    var memory[n] = leaves;
    var counter = 0;
    for (var i = treeHeight - 1; i >= 0; i--){
        for(var j = 0; j < 2**i; j++){
            if(j % 2 == 1){
                memory[counter] = hash(memory[j - 1], memory[j]);
                counter++;
            }
        }
        counter = 0;
    }
    root <== memory[0];
}


component main = merkle_root(4);
