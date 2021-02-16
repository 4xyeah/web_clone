const topBtn = document.getElementById('topBtn');
(function () {
	topBtn.onclick = function () {
		window.scrollTo(0, 0);
	};
})();

// footer영역에서는 topBtn의 색이 흰색으로 변하게 하는 함수
let changeTopBtnColor = function (windowScrollY) {
	const slideBox = document.querySelector('.slide>ul');
	const footer = document.querySelector('.footer');

	// 슬라이드 좌우 이미지 색 어둡게 할거면 거기에서도 top버튼 색 바꿔야함
	// const slideBoxTop = slideBox.offsetTop;
	// const slideBoxHeight = slideBox.offsetHeight;
	// const slideBoxPadding = slideBox.style;
	const footerTop = footer.offsetTop;
	const footerHeight = footer.offsetHeight;

	if (
		footerTop <= topBtn.offsetTop + windowScrollY &&
		topBtn.offsetTop + windowScrollY <= footerTop + footerHeight
	) {
		topBtn.classList.add('white');
	} else {
		topBtn.classList.remove('white');
	}
	console.log(`windowScrollY: ${windowScrollY} `);
	console.log(`topBtn top 위치: ${topBtn.offsetTop + windowScrollY} `);
};

// 위치 비교 위한 스크롤 위치값
let last_known_scroll_position = 0;
let ticking = false;

document.addEventListener('scroll', function (e) {
	last_known_scroll_position = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function () {
			changeTopBtnColor(last_known_scroll_position);
			ticking = false;
		});

		ticking = true;
	}
});
