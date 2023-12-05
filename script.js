document.querySelector("#szene2").object3D.visible = false;

document.getElementById("clickArea").addEventListener("click", function() {
    console.log("hallo0")
    document.querySelector("#szene1").object3D.visible = false;
    document.querySelector("#szene2").object3D.visible = true;
})
document.getElementById("clickArea2").addEventListener("click", function() {
    console.log("hallo1")
    document.querySelector("#szene1").object3D.visible = true;
    document.querySelector("#szene2").object3D.visible = false;
})

var el = document.createElement('a-entity');
for()
el.setAttribute("geometry", "primitive: box");
el.setAttribute("id", "NEWBOX");
el.setAttribute("material", "color: red; src: ./assets/Kirche.jpg");
el.object3D.position.x = 1;
el.object3D.position.y = 1;
el.object3D.position.z = 10;
el.setAttribute("geometry", "width: .3; height: .3; depth: .1");

setInterval(function() {
    el.object3D.position.y -= 0.05;
}, 20);

//el.setAttribute( "height=1", "width:=2")
console.log(el);

console.log(el.object3D)

//l.setAttribute(material="src:);

document.getElementById("szene1").appendChild(el);