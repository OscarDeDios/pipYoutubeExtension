(function(){
	const insertPipButton = () => {
		const elemToAppendButton = document.querySelector('.ytp-right-controls')
		const pipButton = getPipButtonElement();

		elemToAppendButton.insertBefore(pipButton, elemToAppendButton.firstChild);

		document.getElementById("pip-ext__pip-button").addEventListener('click', pipYoutubeVideo);
	}

	const getPipButtonElement = () => {
		const button = document.createElement('BUTTON')
		button.className= 'ytp-button'
		button.id= 'pip-ext__pip-button'
		button.title = 'Picture in picture mode'
		button.setAttribute('aria-pressed', false)
		button.innerHTML = `
			<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="-10 -9 40 40">
				<use class="ytp-svg-shadow"></use>
				<path d="M 5 2 C 3.897 2 3 2.897 3 4 L 3 17.1875 L 5 15.1875 L 5 7 L 20 7 L 20 18 L 7.84375 18 L 5.84375 20 L 20 20 C 21.103 20 22 19.103 22 18 L 22 4 C 22 2.897 21.103 2 20 2 L 5 2 z M 7 11 L 8.78125 12.78125 L 2.25 19.34375 L 3.65625 20.75 L 10.21875 14.21875 L 12 16 L 12 11 L 7 11 z" fill="#fff"/>
			</svg>`

		return button
	}

	const pipYoutubeVideo = () => {
		const video = document.querySelector('video')
		const isVideoInPip = document.pictureInPictureElement === document.querySelector('video')

		isVideoInPip ? document.exitPictureInPicture() : video.requestPictureInPicture()
	}

	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		insertPipButton()
	} else {
		document.addEventListener('DOMContentLoaded', insertPipButton);
	}
}())