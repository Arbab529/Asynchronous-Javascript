window.onload = function () {
    // function get(url) {
    //     return new Promise(function (resolve, reject) {
    //         var http = new XMLHttpRequest();
    //         http.open("GET", url, true);
    //         http.onload = function () {
    //             if (http.status == 200) {
    //                 resolve(JSON.parse(http.response));
    //             }
    //             else {
    //                 reject(http.statusText);
    //             }
    //         };
    //         http.onerror = function () {
    //             reject(http.statusText);
    //         }
    //         http.send();
    //     })
    // }
    // var promise = get('tweets.json');
    // promise.then(function (tweets) {
    //     console.log(tweets);
    //     return get('friends.json');
    // })
    //     .then(function (data) {
    //         console.log(data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })


    // Lets Reduce the above code using Jquery
    $.get('tweets.json')
        .then((resultdata) => {
            console.log(resultdata);
            return $.get('friends.json');
        })
        .then((friendsdata) => {
            console.log(friendsdata);
            return $.get('videos.json')
        })
        .then((videosdata) => {
            console.log(videosdata)
        })
        .catch((err) => {
            console.log("Error")
        });
}

