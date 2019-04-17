// // récup le modal (background)
// var modal = document.querySelector('#myModal');
// // récup le conteneur de l'image
// var modal_img = document.querySelector("#img01");
// // récup totues les images
// var img = document.querySelectorAll(".myimg");

// // récup l'image voulue et l'insert dans le modal
//     // Utiliser le "alt" pour caler une légende ?
// var i;
// for (i=0; i<img.length; i++) {
//     img[i].addEventListener("click", function(){
//         modal.style.display = "block";
//         modal.src = this.src;
//     });
// }

// // récup les éléments qui peuvent fermer le modal
// var clickToClose = document.querySelectorAll(".close");

// // lorsque l'on clique, on ferme le modal
// clickToClose.addEventListener("click", function(){
//     modal.style.display = "none";
// });


// Get the modal
var modal = document.getElementById('myModal');
var i;

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById("img01");
for (i=0;i<img.length;i++){
	img[i].onclick = function(){
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
	  modalImg.src = this.src;
	}
}

// Get the elements that close the modal
var clickToClose = document.getElementsByClassName("close")[0];

// When the user clicks on the modal, close the modal
clickToClose.onclick = function() { 
  modal.style.display = "none";
}