pragma circom 2.0.3;

include "circomlib/circuits/poseidon.circom";

template suiteVerify () {
    // user provides the old card commitment
    // public
    signal input oldCardSuite;

    // user provies new card commitment
    // private
    signal input newCardSuite;

    // output
    signal output boolOut;

    component hash = Poseidon(2);
    hash.inputs[0] <== oldCardSuite;
    hash.inputs[1] <== newCardSuite;

    boolOut <== hash.out;
}

component main = suiteVerify();

// have a large enough sample space for `number`
// similar for s % 4, and `suite`
/* INPUT = {
    "oldCardSuite": 5,
    "NewCardsuite": 2
} */