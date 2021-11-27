window.onload = function () {

    function* gen() {
        var x = yield 10;
        console.log(10);
    }
    var myGen = gen();
    console.log(myGen.next());
    console.log(myGen.next(10));
}

