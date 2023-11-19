var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto is set to " + video.autoplay);

});


document.getElementById("play").addEventListener("click", function() {

	video.play();
	video.volume= 0.05;
	console.log("Good job changing the volume");
});


document.getElementById("pause").addEventListener("click", function() {

	video.pause();
	console.log("Good job stop the video");
});


document.getElementById("slower").addEventListener("click", function() {

	video.playbackRate *=0.9;
	console.log("New playback rate:"+ video.playbackRate);
});


document.getElementById("faster").addEventListener("click", function() {

	video.playbackRate *=1.11111;
	console.log("New playback rate:"+ video.playbackRate);
});



document.getElementById("skip").addEventListener("click", function() {

	if (video){
		video.currentTime += 10;

		if (video.currentTime >= video.duration){
			video.currentTime = 0;
			
		}
	}
	
	console.log("Current video time:", video.currentTime);
});



document.getElementById("mute").addEventListener("click", function() {

	video.muted = !video.muted;

	if (video.muted) {
        document.getElementById("mute").innerHTML = "Unmute";
    } else {
        document.getElementById("mute").innerHTML = "Mute";
    }
	
});


var volumeSlider = document.getElementById('slider');
var volumeText = document.getElementById('volume');

window.addEventListener("load", function() {

	volumeSlider.addEventListener('input', function() {
		video.volume = volumeSlider.value / 100;
		volumeText.innerHTML = volumeSlider.value + '%';
    });

});


document.getElementById('vintage').addEventListener('click', function() {
    
    video.classList.toggle('oldSchool');
});


document.getElementById('orig').addEventListener('click', function() {
    
    video.classList.remove('oldSchool')
});

