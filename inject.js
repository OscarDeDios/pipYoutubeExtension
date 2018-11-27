(function(){
  $(document).ready(() => {
		const elemToAppendButton = $('.kk')
		const pipButton = getPipButtonHtml();

		elemToAppendButton.append(pipButton)
		$('body').on('click', '.pip-ext__pip-button', pipYoutubeVideo);

  });

	const getPipButtonHtml = () => {
		return `<div class="pip-ext__pip-button">pip</div>`
	}

	const pipYoutubeVideo = () => {
		console.log('pip')
	}
}());

