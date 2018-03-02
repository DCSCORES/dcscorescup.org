document.addEventListener("DOMContentLoaded",
function() {
  var div, n,
    v = document.getElementsByClassName("MovieTheater-screen");
  for (n = 0; n < v.length; n++) {
    div = document.createElement("div");
    div.setAttribute("data-id", v[n].dataset.id);
    div.innerHTML = moviePoster(v[n].dataset.id);
    div.onclick = movieTheaterScreen;
    v[n].appendChild(div);
  }
});

function moviePoster(id) {
  var moviePoster = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">';
  var startTheMovie = '<div class="play"></div>';
  return moviePoster.replace("ID", id) + startTheMovie;
}

function movieTheaterScreen() {
  var movieTheaterScreen = document.createElement("iframe");
  movieTheaterScreen.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.id + "?autoplay=1");
  movieTheaterScreen.setAttribute("frameborder", "0");
  movieTheaterScreen.setAttribute("allowfullscreen", "1");
  this.parentNode.replaceChild(movieTheaterScreen, this);
}
