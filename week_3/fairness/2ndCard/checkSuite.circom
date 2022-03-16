pragma circom 2.0.3;

include "circomlib/poseidon.circom";

template suiteVerify () {
    // user provides the old card commitment
    // public
    signal input oldCardSuite;

    // user provies new card commitment
    // private
    signal input newCardSuite;

    // output
    signal output boolOut;

    assert(newCardSuite == oldCardSuite);

    boolOut <== 1;
}

component main { public [ oldCardSuite ] } = suiteVerify();

// have a large enough sample space for `number`
// similar for s % 4, and `suite`
/* INPUT = {
    "oldCardSuite": "5",
    "NewCardsuite": "2"
} */
