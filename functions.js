class burger{
	constructor(xs,ys,vs){
		this.x=xs;
		this.y=ys;
    	this.v=vs;
   		this.bur=createImg('burger.png');
   		this.bur.class("bord");
	}
	move1(){
		this.x=this.x-this.v;
	}
	chbd(){
		if(this.x<0||this.x>windowWidth-150){this.v=-1*this.v;}
	}
	display1(){
		this.bur.position(this.x,this.y);
		this.bur.size(175,175);
	}
	delete1(){
		this.bur.position(-500,-500);
	}
}