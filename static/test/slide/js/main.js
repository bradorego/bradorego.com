document.addEventListener("DOMContentLoaded", function () {
	var touchEvent = ('ontouchstart' in window) ? 'touchstart' : 'click',
		$body = document.body;
		$page = document.getElementsByClassName('page')[0],
		$left = document.getElementsByClassName('left')[0],
		$right = document.getElementsByClassName('right')[0],
		$leftBtn = document.getElementById('left'),
		$rightBtn = document.getElementById('right'),
		$invited = document.getElementById('invitedWrap'),
		$details = document.getElementById('detailsWrap'),
		$invitedBtn = document.getElementById('invited'),
		$detailsBtn = document.getElementById('details');

	$leftBtn.addEventListener(touchEvent, function (e) {
		if (!$left.hasClass('active')) {
			showLeftSlideout();
		} else {
			hideLeftSlideout();
		}
	});
	$rightBtn.addEventListener(touchEvent, function (e) {
		if (!$right.hasClass('active')) {
			showRightSlideout();
		} else {
			hideRightSlideout();
		}
	});

	$detailsBtn.addEventListener(touchEvent, function (e) {
		showPlanDetails();
	});
	$invitedBtn.addEventListener(touchEvent, function (e) {
		showPlanInvitedList();
	});

	function showRightSlideout() {
		hideLeftSlideout();
		$right.removeClass('hidden');
		setTimeout(function () { /// to prevent the slide from being jumpy. No idea why
			$right.addClass('active');
			$page.addClass('right');
			$body.addClass('active');
		}, 0);
	}
	function hideRightSlideout() {
		$right.removeClass('active');
		$page.removeClass('right');
		$body.removeClass('active');
		setTimeout(function () { /// ditto jumpiness saver
			$right.addClass('hidden');
		}, 300);
	}
	function showLeftSlideout() {
		hideRightSlideout();
		$left.removeClass('hidden');
		setTimeout(function () { /// jumpiness saver
			$left.addClass('active');
			$page.addClass('left');
			$body.addClass('active');
		}, 0);
	}
	function hideLeftSlideout() {
		$left.removeClass('active');
		$page.removeClass('left');
		$body.removeClass('active');
		setTimeout(function () { /// jumpiness saver
			$left.addClass('hidden');
		}, 300);
	}
	function showPlanDetails() {
		$detailsBtn.addClass('active');
		$invitedBtn.removeClass('active');
		$details.removeClass('hidden');
		$invited.addClass('hidden');
	}
	function showPlanInvitedList() {
		$invitedBtn.addClass('active');
		$detailsBtn.removeClass('active');
		$invited.removeClass('hidden');
		$details.addClass('hidden');
	}
});



Element.prototype.hasClass = function (name) {
	return this.className.indexOf(name) !== -1;
}

Element.prototype.removeClass = function (name) {
	if (this.hasClass(name)) {
		this.className = this.className.replace(name, '');
		return true;
	} else {
		return false;
	}
}
Element.prototype.addClass = function (name) {
	if (!this.hasClass(name)) {
		this.className += ' ' + name;
		return true;
	} else {
		return false;
	}
}
Element.prototype.toggleClass = function (name) {
	if (this.hasClass(name)) {
		this.removeClass(name);
	} else {
		this.addClass(name);
	}

}