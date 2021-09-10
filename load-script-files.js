//document.write('<script src="http://13.235.8.176/custom-cdn-files/ajax.js?v=' + Date.now() + '"><\/script>');
document.write('<script src="http://192.168.43.178/custom-cdn-files/ajax.js?v=' + Date.now() + '"><\/script>');
document.write('<link rel="stylesheet" href="http://192.168.43.178/custom-cdn-files/styles.css?v=' + Date.now() + '"><\/link>');
function homePage(){
	$('#home-page').append(
		'<div class="banners-container" id="main-banners">\
			<div class="swiper-container">\
				<div class="swiper-wrapper"></div>\
				<div class="swiper-pagination"></div>\
			</div>\
		</div>\
		<div class="albums-container" id="albums">\
			<h4>Albums</h4>\
		</div>\
		<div class="latest-container" id="latest-songs">\
		</div>\
		<div class="latest-container" id="latest-songs">\
		</div>\
		<div class="latest-container" id="latest-songs">\
		</div>'
	);
	  var dataType= "json";
	  var data = {action:'banners'};
	  fetchApi(dataType,data,function callback(response){
	  		for(i=0;i<response.data.length;i++){
				$('.banners-container .swiper-wrapper').append('<div class="swiper-slide" ><a href="#"><div><img src="'+response.data[i]['image']+'" /></div></a></div>');
	  		}
		    var banners = new Swiper('.banners-container .swiper-container', {
		        paginationClickable: true,
		        centeredSlides: true,
		        autoplay: 2500,
		        autoplayDisableOnInteraction: false,
		        loop: true,
		        preloadImages: true,
		        speed: 2000,
		        pagination: '.banners-container .swiper-pagination',
		    });
	  });

	//document.write('<script src="http://13.235.8.176/custom-cdn-files/home.js?v=' + Date.now() + '"><\/script>');	
}