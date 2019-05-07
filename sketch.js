let can,anch,b,img,pic,bur,para;
let bullets=[];
let par;let d=0;
let burgarray=[];
let a;
	function setup() {
		fill(255);
anch=select('#sier');
	anch.position(0,30);
	anch.class("bdd");
pic=createImg('ketchupbottle.png');
pic.size(140,200);
	for(j=0;j<10;j++){
	burgarray.push(new burger(50,50,random(5,15)));
	theradio();
}
}

function draw() { 
frameRate(25);	
drawradio();
for(j=0;j<bullets.length;j++){
	bullets[j].move();
	bullets[j].display();
	if(bullets[j].dead()){bullets.splice(j,1);}
}
for(k=0;k<burgarray.length;k++){
	burgarray[k].move1();
	burgarray[k].chbd();
	burgarray[k].display1();
}

pic.position(mouseX-70,windowHeight-190);
//par.html(d); 
var x = mouseX;     // Get the horizontal coordinate
            var y = mouseY;
			

for(j=bullets.length-1;j>=0;j--){
		for(k=burgarray.length-1;k>=0;k--){
			d=dist(burgarray[k].x+50,burgarray[k].y,bullets[j].x,bullets[j].y);
			if(d<80){burgarray[k].delete1();burgarray.splice(k,1);
				  bullets[j].delete();}
			
			}
		}
	}
function keyPressed(){     
if(keyCode==32){bullets.push(new bullet(mouseX-15,windowHeight-200,20));}
if(keyCode==66){burgarray.push(new burger(0,50,random(5,30)));}
}