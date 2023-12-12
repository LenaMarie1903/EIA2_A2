let Chrismas = ["assets/christmastree.png"];
let stars = ["assets/Objekt2.png", , "assets/Stern.png", "assets/stern1.png", "assets/stern2.png", "assets/stern3.png", "assets/stern4.png"];
/* Ein leeres Array erstellen*/
let imageArray = [];

function loadImages() {
    /* Der a-marker aus HTML wird ausgewählt durch den querySelector und in der Variable var marker reingeschreiben*/
    var marker = document.querySelector('a-marker');
    for (var i = 0; i < stars.length; i++) {
        /* pro Durchgang wird ein neues Image erstellt und in var img gespeichert.*/
        var img = new Image();
        /* Quelle des Bildes wird in Array star nachgeschaut*/
        img.src = stars[i];
        /* wenn das image geladen wurde, wird die funktion ausgeführt*/
        img.onload = function () {
            imageArray.push(this);
             // Create an <a-image> element for each loaded. Es wird ein neues HTML Element erstellt. Ein a-image Tag.
             var aImage = document.createElement('a-image');
             //Das erstellte a-image Tag bekommt noch Attribute/Eigenschaften. 
             aImage.setAttribute('src', this.src);
             aImage.setAttribute('position', '0 0 0'); // Set the desired position
 
             // Append the <a-image> to the <a-marker> Das a-image wird in den a-marker in HTML reingeladen. 
             marker.appendChild(aImage);
        }
    }




}
// Call loadImages with a callback function
loadImages();