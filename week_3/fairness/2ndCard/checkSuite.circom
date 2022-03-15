pragma circom 2.0.3;

include "circomlib/poseidon.circom";

template checkSuite () {
    signal input card0[3];
    signal input card1[3];

    component hash = Poseidon(2);

    var hash0;
    var hash1;

    assert(hash0 == hash1);
}

component main = checkSuite();
