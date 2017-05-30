
var vertices = [];

function setup() {
    createCanvas(600, 400);
}

function mousePressed(){
    var v = createVector(mouseX,mouseY);
    vertices.push(v);
}


function draw() {
    background(100);
    var unreached = [];
    var reached = [];

    for(var i=0;i<vertices.length;i++){
        unreached.push(vertices[i]);
    }
    reached.push(unreached[0]);
    unreached.splice(0,1);
    
    while(unreached.length>0){
        var dmin=10000;
        var uindex,rindex;
        for(var i = 0; i < reached.length;i++){
            for(var j=0; j < unreached.length; j++ ){
                var d = dist(reached[i].x,reached[i].y,unreached[j].x,unreached[j].y);
                if(d<dmin){
                    dmin=d;
                    uindex=j;
                    rindex=i;
                }
            }
        }
        stroke(255);
        strokeWeight(2);
        line(reached[rindex].x,reached[rindex].y,unreached[uindex].x,unreached[uindex].y);
        reached.push(unreached[uindex]);
        unreached.splice(uindex,1);
    }
    for(var i=0;i<vertices.length;i++){
        fill(255);
        stroke(255);
        ellipse(vertices[i].x,vertices[i].y,6,6);
    }
}
