var topStyle = new Swiper('.topPageStyle-swiper-container', {
	slidesPerView: 4,
	speed: 3000,
	grabCursor: true,
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	},
});
var slider__items = document.querySelector('.slider__items');
var swiperSliders = document.querySelectorAll('.topPageStyle-swiper-container .swiper-slide');
const xmoveRatio = 20 / document.querySelectorAll('.swiper-pagination-bullet').length;
topStyle.on('slideChange',function(){
	var move = -400*(topStyle.realIndex);
	slider__items.style.transform = 'translate('+ move +'px,0)';


	var xmove = xmoveRatio * (topStyle.realIndex+1);
	console.log(xmove);
	parallax(xmove);
})

function parallax(xmove){
	for(var i=0;i > swiperSliders.length;i++){
		gsap.to('.topPageStyle-swiper-container .js-parallax img',{
			x:"-"+xmove+"%",
			duration:3,
		})
	}
}