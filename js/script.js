const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", () => {
    video.play();
});

pauseButton.addEventListener("click", () => {
    video.pause();
});
