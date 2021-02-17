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

	if (footerTop <= topBtn.offsetTop + windowScrollY && topBtn.offsetTop + windowScrollY <= footerTop + footerHeight) {
		topBtn.classList.add('white');
	} else {
		topBtn.classList.remove('white');
	}
	console.log(`windowScrollY: ${windowScrollY} `);
	console.log(`topBtn top 위치: ${topBtn.offsetTop + windowScrollY} `);
};

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

// 이미지 클릭시 회전
const rotateImg = function () {
	const imgArr = document.querySelectorAll('.p-1 .img');

	const p1_img = Array.from(imgArr);
	const rotation_deg = 50;
	for (let img of p1_img) {
		img.onclick = function () {
			let current_deg = this.style.transform == '' ? 0 : Number(this.style.transform.slice(7, -4));
			let final_deg = current_deg + rotation_deg;
			this.style.transform = `rotate(${final_deg}deg)`;
		};
	}
};

rotateImg();

// setInterval, setTimeout 사용해서 이미지 각도바꾸기
// 수정
const buzzIphone = function () {
	const iPhone = document.getElementById('iPhone');
	iPhone.onclick = function () {
		iPhone.style.transform = 'rotate(20deg)';
		setTimeout(function () {
			iPhone.style.transform = 'rotate(340deg)';
			setTimeout(function () {
				iPhone.style.transform = 'rotate(20deg)';
			}, 500);
		}, 500);
	};
};

buzzIphone();
