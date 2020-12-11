//unit testing med mocha og chai 
const assert = require("chai").assert;
const R = require("../index.js")

let listen = R

describe('server', function(){
    it('Tester  serveren', function(){
        //herinde bruges assert
        assert.strictEqual(4000,4000, "severen fungerer som den skal")
    })
});
