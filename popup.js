
function buttonTapped() {
	document.getElementById('status').textContent = "Clicked";
	alert('click event occured');
}

function screenShotHandler(streamId) {
	document.getElementById('status').textContent = "Clicked";
}

function clickHandler(e) {
	document.getElementById('status').textContent = "Clicked";
	chrome.desktopCapture.chooseDesktopMedia(["screen"],screenShotHandler);
	
//     chrome.extension.sendMessage({directive: "popup-click"}, function(response) {
//         this.close(); // close the popup when the background finishes processing request
//     });
}

document.addEventListener('DOMContentLoaded', function() {
	document.getElementById('screenShotButton').addEventListener('click', clickHandler);
});
