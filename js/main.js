$(document).ready(function () {
	// avoid to send empty fields
	$('form').validate({
		rules: {
			frmName: "required",
			frmMessage: "required"
		}
	});

	// button onclick func
	$('#frmBtnAdd').click(function () {
		if(!$('form').valid())
			return false;

		var card = $('.card').first().clone(); // find first card block and copy to new one
		card.find('.card-nickname').text($('#frmName').val()); // change nickname
		card.find('.card-time').text((new Date).toLocaleString()); // change to current time
		card.find('.card-message').text($('#frmMessage').val()); // change to current time
		card.css('display', 'none'); // style for fade in effect
		card.fadeIn(); // animation effect
		$('#frmMessage').val(''); // clear message textarea
		$('.message-block').append(card); // add new card block to the page
		$('html, body').animate({
			scrollTop: $("form").offset().top
		}, 1000); // scroll down screen to the form
		return false;
	})
})