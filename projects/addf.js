document.addEventListener("DOMContentLoaded", function() {
    var istatus = document.querySelector("h5");
    var FollowFriend = document.querySelector("#follow");
    FollowFriend.addEventListener("click", function() {
        istatus.innerHTML = "Following";
    });
});