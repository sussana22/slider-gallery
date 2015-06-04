(function($){

	$.fn.sliderGallery = function(){

		return this.each(function(){

			var $this = $(this),
				$images = $this.find('.images img'),
				$thumbs = $this.find('.thumbs img'),
				$mask = $this.find('.images'),
				$slider,
				$nextBtn = $this.find('.next-btn'),
				$prevBtn = $this.find('.prev-btn'),
				lastIndex = $images.length-1,
				numImages = $images.length,
				currentIndex = 0,
				delay = 4000,
				timeout;


			function slideToImage(){
			clearTimeout(timeout);
			timeout = setTimeout(nextImage, delay);
			$slider.css({'margin-left':-currentIndex*100+"%"});
			$thumbs.filter('.selected').removeClass('selected');
			$thumbs.eq(currentIndex).addClass('selected');		
			}

			function nextImage(){
				clearTimeout(timeout);
				currentIndex = (currentIndex < lastIndex)? currentIndex+1: 0;
				slideToImage();
				
			}
			//initialise
			//wrap the images in a slider, adding a slider
			$images.wrapAll('<div class="slider">');
			$slider = $this.find('.slider');
			//set slider and image widths
			$slider.width(100*numImages+"%").css({transition: 'all 1s'});
			$images.width(100/numImages+"%");
			//set thumb selected state
			$thumbs.eq(currentIndex).addClass('selected');
			$mask.css({overflow: 'hidden'});
			timeout = setTimeout(nextImage, delay);
			$thumbs.click(function(){
				currentIndex = $thumbs.index(this);
				slideToImage();
				//alert(currentIndex);

			});

			$nextBtn.click(nextImage);
				
				$prevBtn.click(function(){
				currentIndex=(currentIndex > 0)? currentIndex-1: lastIndex;
				slideToImage();

				});
		})
	}

})(jQuery);