var Spotify = document.querySelector("input[name=Spotify]");
var SpotifyItem = document.querySelectorAll(".Spotify-item");

var Netflix = document.querySelector("input[name=Netflix]");
var NetflixItem = document.querySelectorAll(".Netflix-item");

var Youtube = document.querySelector("input[name=Youtube]");
var YoutubeItem = document.querySelectorAll(".Youtube-item");

Spotify.addEventListener('change', function()  {
        if (this.checked) {
            var i;
            for (i = 0; i < SpotifyItem.length; i++) {
                SpotifyItem[i].style.display = "flex";
            }
        } else {
            var j;
            for (j = 0; j < SpotifyItem.length; j++) {
                SpotifyItem[j].style.display = "none";
            }
        }    
});

Netflix.addEventListener('change', function () {
    if (this.checked) {
        var i;
        for (i = 0; i < NetflixItem.length; i++) {
            NetflixItem[i].style.display = "flex";
        }
    } else {
        var j;
        for (j = 0; j < NetflixItem.length; j++) {
            NetflixItem[j].style.display = "none";
        }
    }
});

Youtube.addEventListener('change', function () {
    if (this.checked) {
        var i;
        for (i = 0; i < YoutubeItem.length; i++) {
            YoutubeItem[i].style.display = "flex";
        }
    } else {
        var j;
        for (j = 0; j < YoutubeItem.length; j++) {
            YoutubeItem[j].style.display = "none";
        }
    }
});

