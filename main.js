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
    document.getElementById("well").src = "/image/well/0.png";
    player = setInterval(function(){ next(); }, 40);
}

function next(){
    
    // while (n<3) {
        
        var fullPath=document.getElementById("well").src;
        var filename = fullPath.split("/").pop();
        var n=parseInt(filename, 10) + 1;
        if (n < 39) {
            document.getElementById("well").src = "image/well/" + n + ".png";
            if (document.getElementById("well").height == 0) { clearInterval(player); };
        }
        if (n == 3) { timestamp = new Date().getTime(); };
    
    // }
}


// usage
preloadImage(function () { console.log('images loaded'); });




