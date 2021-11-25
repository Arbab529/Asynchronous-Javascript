window.onload = function () {


    // Using XML
    // ----------------------
    // var http = new XMLHttpRequest();
    // http.onreadystatechange = function () {
    //     if (http.readyState == 4 && http.status == 200) {
    //         console.log(JSON.parse(http.response));
    //     }
    // }
    // http.open('GET', 'data/db.json', true);
    // http.send();


    // Using Jquery
    //------------------------
    $.get('data/db.json', function (data) {
        console.log(data);
    })

}