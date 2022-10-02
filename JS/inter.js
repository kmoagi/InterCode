 // search-box open close js code
 let navbar = document.querySelector(".navbar");
 let searchBox = document.querySelector(".search-box .bx-search");
 // let searchBoxCancel = document.querySelector(".search-box .bx-x");
 
 searchBox.addEventListener("click", ()=>{
   navbar.classList.toggle("showInput");
   if(navbar.classList.contains("showInput")){
     searchBox.classList.replace("bx-search" ,"bx-x");
   }else {
     searchBox.classList.replace("bx-x" ,"bx-search");
   }
 });
 
 // sidebar open close js code
 let navLinks = document.querySelector(".nav-links");
 let menuOpenBtn = document.querySelector(".navbar .bx-menu");
 let menuCloseBtn = document.querySelector(".nav-links .bx-x");
 menuOpenBtn.onclick = function() {
 navLinks.style.left = "0";
 }
 menuCloseBtn.onclick = function() {
 navLinks.style.left = "-100%";
 }
 
 
 // sidebar submenu open close js code
 let htmlcssArrow = document.querySelector(".htmlcss-arrow");
 htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1");
 }
 let moreArrow = document.querySelector(".more-arrow");
 moreArrow.onclick = function() {
  navLinks.classList.toggle("show2");
 }
 let jsArrow = document.querySelector(".js-arrow");
 jsArrow.onclick = function() {
  navLinks.classList.toggle("show3");
 }
 var subMenus = $(".sub-menu");

$.each($(".menu-item"), function(index, element) {
	var subMenu = $(element).children('ul'),
      tl;
	
	if(subMenu.length != 0) {
		tl = new TimelineLite({paused:true});
		
		tl.from(subMenu, .2, {height:0});
		
		element.subMenuAnimation = tl;
		
		$(element).hover(menuItemOver, menuItemOut);
	} 
});

function menuItemOver(e) {
  this.subMenuAnimation.play();
}

function menuItemOut() {
	this.subMenuAnimation.reverse();
}

/*
==>FUNCTION TO FIX LI ITEMS WIDTH IN IE7
*/
function setWidth() {
	//this function executes only if the browser is IE7
	if($("html").hasClass('lte7'))
	{
		//because of a bug with IE7 we need to calculate any element's width before the li's elements width
		console.log($('div#clear-fix1').width());
		
		//we loop through the subMenu elements
		$.each(subMenus, function(index, element)
		{
			var subMenuChildren = $(element).children('li'),
          elemWidths = [],
          maxWidth;
			
			//loop through all the child elements of the current subMenu
			$.each(subMenuChildren, function()
			{
				elemWidths.push($(this).outerWidth());
			})//sub menu children loop END
			
			//we get the biggest width
			maxWidth = Math.max.apply(null, elemWidths);
			
			//apply the biggest width to all the elements
			subMenuChildren.css('width',maxWidth);
			
		});//sub menu elements loop END
		
	}//IE7 conditional END
	
}

setWidth();