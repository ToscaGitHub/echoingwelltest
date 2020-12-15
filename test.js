

var player;
var timestamp;

function preloadImage (done, i) {
    if (!i) { i = 1; }
    

    var img = new Image();
    img.onloadend = function () {
        if (this.height == 0) { return done(); }
        preloadImage(done, i + 1);
    };
    img.src = "image/well/" + i;
}

function start(){
    clearInterval(player);
    document.getElementById("image").src = "/image/well/0.png";
    player = setInterval(function(){ next(); }, 100);
}

function next(){
    // while (n<3) {

        var fullPath=document.getElementById("image").src;
        var filename = fullPath.split("/").pop();
        var n=parseInt(filename, 10) + 1;
        if (n < 6) {
            document.getElementById("image").src = "image/well/" + n + ".png";
            if (document.getElementById("image").height == 0) { clearInterval(player); }
        }
        if (n == 3) { timestamp = new Date().getTime(); }
    
    // }
}

// usage
preloadImage(function () { console.log('images loaded'); });




//Box Idée


function readForm() {
    var error1 = false


var elem = document.getElementById("userIdea")

// IDEE TAILLE MINIMUM

if (elem.value.length < 15){
    document.getElementById("ideaError").innerHTML = "Veuillez saisir au moins 15 caractères"
    error1 = true
}
else if (error1 == false) {
    document.getElementById("ideaError").innerHTML = ""
    error1 = false
}

// IDEE TAILLE MAXIMUM

if (elem.value.length > 300) {
    document.getElementById("ideaError").innerHTML = "Veuillez saisir un commentaire de 300 caractères maxi"
    error1 = true
}
else {
    document.getElementById("ideaError").innerHTML = ""
    error1 = false
}





//document.getElementById("output").innerHTML = elem.value

 

if (error1 == false) {
    var userIdea = document.getElementById("userIdea").value




//var recap = fName + ", " + fFirstName + ", " + fAge
//document.getElementById("output").innerHTML = recap



    document.getElementById("msgOk").innerHTML = "Merci pour votre idée, N'hésitez jamais a nous en redonner."
    document.getElementById("urIdea").innerHTML = "Votre Idée: " + userIdea
}
}



















// function changeImage() {
//     document.getElementById("well").src="/image/well light.png";

// }

// function resetImg() {
//     document.getElementById("well").src="/image/well.png";

// }