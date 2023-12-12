//let Chrismas = ["assets/christmastree.png"];
let stars = ["assets/Objekt2.png", , "assets/Stern.png", "assets/stern1.png", "assets/stern2.png", "assets/stern3.png", "assets/stern4.png"];
/* Ein leeres Array erstellen*/
let imageArray = [];

//Hier wird das Grundgerüst festgelegt um random Größe und Position anzuordnen. 
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

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

            //set random size (wight and height) for the image. Hier wird eine random Höhe und Breite erstellt. min ist 0.1 und max ist 0.5. Es wird die Formel von an Zeile 7 benutzt. Der random Wert der zurückgegeben wird, wird in der Variable randomSize gespeichert.
            var randomSize = getRandomNumber(0.1, 0.5);
            aImage.setAttribute('width', randomSize);
            aImage.setAttribute('height', randomSize);

            // Set random position for the image. 
            var randomPositionX = getRandomNumber(-1, 1); // Adjust the range as needed
            var randomPositionY = getRandomNumber(-1, 1); // Adjust the range as needed
            var randomPositionZ = getRandomNumber(-1, 1);
            aImage.setAttribute('position', `${randomPositionX} ${randomPositionY} ${randomPositionZ}`);

            // Append the <a-image> to the <a-marker> Das a-image wird in den a-marker in HTML reingeladen. 
            marker.appendChild(aImage);
        }
    }




}
// Call loadImages with a callback function
loadImages();