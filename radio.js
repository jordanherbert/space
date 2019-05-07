let radio;
function theradio(){
radio = createRadio();
radio.position(0,0);
	radio.class("bdd");
radio.option('Millenium Falcon',1);
radio.option('Enterprise',2);
radio.option('Outer Space',3);
radio.option('The Ocean',4);
radio.style(width,'60px');
}

function drawradio(){
var val = radio.value();
 switch(val){
 	case '1': mill();break;
 	case '2': enter();break;
 	case '3': space();break;
 	case '4': matthew();break;
 }
}
let background1,background2,background3,background4,anch2,anch3,anch4;

function mill(){
let background1=createImg('spac.jpg');
background1.size(windowWidth,windowHeight);
background1.position(0,0);
anch2=select('#sier');
	anch2.position(0,0);
	anch2.class("bdd");
setup();
}
function enter(){
let background2=createImg('enterprise.jpg');
background2.size(windowWidth,windowHeight);
background2.position(0,0);
anch3=select('#sier');
	anch3.position(0,0);
	anch3.class("bdd");
setup();
}
function space(){
let background3=createImg('universe.jpg');
background3.size(windowWidth,windowHeight);
background3.position(0,0);
anch4=select('#sier');
	anch4.position(0,0);
	anch4.class("bdd");
setup();
}
function matthew(){
let background4=createImg('mattt.jpg');
background4.size(windowWidth,windowHeight);
background4.position(0,0);
setup();
}


