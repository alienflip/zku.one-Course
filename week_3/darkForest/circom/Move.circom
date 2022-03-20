pragma circom 2.0.3;

function isTriangle(a0, a1, b0, b1, c0, c1) {
    // check all pairs of points do not lie on the same line

    if(a0 == b0){
        // defines a non-double-point
        assert(a1 != b1);

        // defines a third point
        assert(c0 != a0); // => c0 != b0
        assert(c1 != a1); 
        assert(c1 != b1);
    }

    if(a0 == c0){
        assert(a1 != c1);
        assert(b0 != a0);
        assert(b1 != c1);
        assert(b1 != a1);
    }

    if(b0 == c0){
        assert(b1 != c1);
        assert(a0 != b0);
        assert(a1 != b1);
        assert(a1 != c1);
    }

    if(a1 == b1){
        assert(a0 != b0);
        assert(c1 != a1); 
        assert(c0 != a0); 
        assert(c0 != b0);
    }

    if(a1 == c1){
        assert(a0 != c0);
        assert(b1 != a1);
        assert(b0 != c0);
        assert(b0 != a0);
    }

    if(b1 == c1){
        assert(b0 != c0);
        assert(a1 != b1);
        assert(a0 != b0);
        assert(a0 != c0);
    }   

    return 1;
}

template Move () {
    signal input a[2];
    signal input b[2];
    signal input c[2];

    // make sure the move is on a triangle
    assert(isTriangle(a[0], a[1], b[0], b[1], c[0], c[1]));
    
    // make sure the move is energy-legal
    var distABxSquare = a[0]*a[0] - b[0]*b[0];
    var distABySquare = a[1]*a[1] - b[1]*b[1];
    var distBCxSquare = b[0]*b[0] - c[0]*c[0];
    var distBCySquare = b[1]*b[1] - c[1]*c[1];
    var distCAxSquare = c[0]*c[0] - b[0]*b[0];
    var distCAySquare = c[1]*c[1] - b[1]*b[1];

    assert(distABxSquare*distABxSquare +  distABySquare*distABySquare <= 100);
    assert(distBCxSquare*distBCxSquare +  distBCySquare*distBCySquare <= 100);
    assert(distCAxSquare*distCAxSquare +  distCAySquare*distCAySquare <= 100);
}

component main = Move();
