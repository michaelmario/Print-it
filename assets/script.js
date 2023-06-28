//Le tableau contient les images et le texte de description?
// tout cela est organisé en quatre objets de Json
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <br> <span class='small'>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <br><span class='small'>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <br><span class='small'>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <br><span class='small'> avec découpe laser sur mesure</span>"
	}
];

//créer des variables pour le projet

var slideContainerHtml = document.querySelector('.slideContainerHtml');
var ControlsContainer = document.querySelector('.Controlscontainer');
var dotsCon = document.querySelector('#dots-con');
let currentSlide;
var index = 1;
const slideShowInterval = 8000;

//faire un foreach dans le tableau "slides"
//créer différentes balises que nous avons besoin pour insérer dans le HTML
slides.forEach((slideoBj)=>{
	var span = document.createElement('span');
	 span.className ="dot";
	var slide = document.createElement('div');
	var paragrapth = document.createElement('p');
	paragrapth.className = "tagline";
	paragrapth.innerHTML = slideoBj.tagLine;
     slide.className ="slide";
	var img = document.createElement('img');
	img.src="https://michaelmario.github.io/Print-it/assets/images/slideshow/" +slideoBj.image;
	img.alt= slideoBj.tagLine;
	slide.append(img);
	dotsCon.appendChild(span);
	slide.appendChild(paragrapth);
	slideContainerHtml.appendChild(slide);
	
	
});
//créer des balises span gauche et droite pour contrôler le carrousel
/*puis faites-le apparaître dans la classe "controlscontainer"
 dans le document HTML*/
createController();
function createController(){
	let leftSpan = document.createElement('span');
	leftSpan.setAttribute('class','controls');
	leftSpan.setAttribute('id','left-arrow');
	leftSpan.setAttribute('onclick','prevSlide(-1)');
	leftSpan.innerHTML = '<img src="https://michaelmario.github.io/Print-it/assets/images/arrow_left.png" alt="fa-arrow-left" aria-hidden="true">';
	
	//
	let rightSpan = document.createElement('span');
	rightSpan.setAttribute('class','controls');
	rightSpan.setAttribute('id','right-arrow');
	rightSpan.setAttribute('onclick','prevSlide(1)');
	rightSpan.innerHTML = '<img src="https://michaelmario.github.io/Print-it/assets/images/arrow_right.png" alt="fa-arrow-right" aria-hidden="true">' 
	
	ControlsContainer.appendChild(leftSpan);
	ControlsContainer.appendChild(rightSpan);
} 
/*fonction pour déplacer l'image vers la droit
lorsque vous cliquez sur le bouton de contrôle */

var dots = document.querySelectorAll(".dot");
function prevSlide(n){
  index +=n;
  clearInterval(currentSlide);
   changeSlide();
}
/*fonction pour déplacer l'image vers la gauche
 lorsque vous cliquez sur le bouton de contrôle */

function nextSlide(n){
  index -=n;
  clearInterval(currentSlide);
  changeSlide();
}

changeSlide();

/*la fonction "change Slide" pour changer
 de slide manuellement en cas de besoin*/
function changeSlide(){
	var slideArray = document.querySelectorAll('.slide');
  if(index>slideArray.length-1)
    index = 0;
  
  if(index<0)
    index = slideArray.length-1;  
  
    for(let i=0;i<slideArray.length;i++){
       
	  slideArray[i].style.display = "none";
      
      dots[i].classList.remove("active");
      
      
    }
    
    slideArray[index].style.display = "block";
    dots[index].classList.add("active");

    
	
  

}

//sur les points indiqués par un point vert faites un addEventListener afin de pouvoir 
//changer l'image du carrousel de cette manière également
let imgSlide = document.querySelectorAll('.slide');
dots.forEach((evet)=>{
	evet.addEventListener('click',function (e) {		
		let item = Array.prototype.indexOf.call(
			e.target.parentNode.children,
			e.target
		  );
		  if(dots.length < item){
			clearInterval(currentSlide);
			nextSlide(++item);
		  }else{
			clearInterval(currentSlide);
			prevSlide(--item);
		  }
		 
		 
		});
	});

	/* ----- lecture automatique du carrousel ----- */
	
const autoplay = () => {
	var Arrayimg = document.querySelectorAll('.slide');
	currentSlide = setInterval(() => {
	 if( index >= Arrayimg.length <= 0){
		  index++;
		  changeSlide(index);		  	   
		}else{
			clearInterval(currentSlide);
			index--;
			changeSlide(index);
		}		
	}, slideShowInterval);
  
  //
}
autoplay();
  


		

