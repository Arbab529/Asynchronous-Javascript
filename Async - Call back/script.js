window.onload = function () {

    // callback after callback
    $.ajax({
        type: "GET",
        url: "tweets.json",
        success: allTweets,
        error: handleError
    })

    // Fetch all Tweets Data
    function allTweets(data) {
        console.log(data);
        $.ajax({
            type: "GET",
            url: "friends.json",
            success: allFriends,
            error: handleError
        })
    }

    // Fetch all Friends Data
    function allFriends(data) {
        console.log(data);
        $.ajax({
            type: "GET",
            url: "videos.json",
            success: allVideos,
            error: handleError
        })
    }

    // Fetch all Videos Data
    function allVideos(data) {
        console.log(data);
    }

    // Handle Error
    function handleError(jqXHR, textStatus, error) {
        console.log(error);
    }
}