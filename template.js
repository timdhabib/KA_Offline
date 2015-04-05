var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(30);


//ProgramCodeGoesHerevar xPos = 50;
var yPos = 600;
var zPos = 350;
var aPos = 10;
var sPos = 0;
var tPos = 600;
var rPos = -100;
draw = function() {
    xPos+=1;
    yPos-=4;
    zPos-=1;
    aPos+=2;
    tPos-=3;
    rPos+=3;
    background(3, 3, 3);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 20);
    ellipse(zPos,aPos,20,20);
    ellipse(rPos,250,10,10);
    beginShape();
    strokeWeight(2);
    fill(255, 0, 0);
    vertex(100,120);
    vertex(140,140);
    vertex(170,120);
    vertex(140,160);
    vertex(180,190);
    vertex(130,170);
    vertex(80,200);
    vertex(120,150);
    vertex(100,120);
    endShape();
    beginShape();
    strokeWeight(2);
    fill(21, 5, 250);
    vertex(sPos+300,tPos+100);
    vertex(sPos+310,tPos+120);
    vertex(sPos+310,tPos+190);
    vertex(sPos+340,tPos+220);
    vertex(sPos+260,tPos+220);
    vertex(sPos+290,tPos+190);
    vertex(sPos+290,tPos+120);
    vertex(sPos+300,tPos+100); 
    endShape();
    fill(255, 140, 0);
    rect(sPos+290,tPos+225,20,50);
    strokeWeight(4);
    point(50,80);
    point(20,100);
    point (100,300);
    point(200,250);
    point (300,25);
    stroke(252, 252, 252);
    strokeWeight(3);
};



}};
