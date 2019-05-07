class bullet{
	constructor(xs,ys,vs){
		this.x=xs;
		this.y=ys;
    	this.v=vs;
    	this.img=createImg('ketchuppacket.png');
	}
	move(){
    	this.y=this.y-this.v;
	}
	display(){
		this.img.position(this.x,this.y);
		this.img.size(30,50);
	}
	dead(){
		if(this.y<-200){return true;}
		else{return false;}
	}
	delete(){
		this.img.position(-700,-700);
	}
}

