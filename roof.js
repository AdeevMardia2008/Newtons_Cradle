class Roof extends BaseClass {
    constructor(x,y){
      super(x,y,50,50);
    }
  
    display() {
      this.body.position.x = 600;
      this.body.position.y = 50;
      super.display();
    }
  }
  