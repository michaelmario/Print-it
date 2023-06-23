const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
var slideContainerHtml = document.querySelector('.slideContainerHtml');
 var dotsCon = document.querySelector('#dots-con');

var index = 0;


slides.forEach((slideoBj)=>{
	 var span = document.createElement('span');
	 span.className ="dot";
	var slide = document.createElement('div');
	var paragrapth = document.createElement('p');
	paragrapth.className = "tagline";
	paragrapth.innerHTML = slideoBj.tagLine;
     slide.className ="slide";
	var img = document.createElement('img');
	img.src="/assets/images/slideshow/" +slideoBj.image;
	img.alt= slideoBj.tagLine;
	slide.append(img);
	dotsCon.appendChild(span);
	slide.appendChild(paragrapth);
	slideContainerHtml.appendChild(slide);
	
	
});
var dots = document.querySelectorAll(".dot");
function prevSlide(n){
  index+=n;
  console.log("prevSlide is called");
  changeSlide();
}

function nextSlide(n){
  index+=n;
  changeSlide();
}

changeSlide();

function changeSlide(){
  var slideArray = document.querySelectorAll('.slide');
  if(index>slideArray.length-1)
    index=0;
  
  if(index<0)
    index=slideArray.length-1;
  
  
  
    for(let i=0;i<slideArray.length;i++){
       
		slideArray[i].style.display = "none";
      
      dots[i].classList.remove("active");
      
      
    }
    
    slideArray[index].style.display = "block";
    dots[index].classList.add("active");

  

}

dots.forEach((evet)=>{
	evet.addEventListener('click',function (e) {
		let imgSlide = document.querySelectorAll('.slide');
		let item = Array.prototype.indexOf.call(
			e.target.parentNode.children,
			e.target
		  );
		  if(dots.length < item){
			nextSlide(item);
		  }else{
			prevSlide(item);
		  }
		 
		 
		});
	});



		

