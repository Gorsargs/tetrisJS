
export default class View{
    constructor(width,height,rows,columns){
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('gameScreen');
        this.context = this.canvas.getContext("2d");
        this.blockWidth = this.width / columns;
        this.blockHeight = this.height / rows;
        this.colors = ["#990099","#002699","#260099"];
        this.secondsPassed;
        this.oldTimeStamp;
        this.fps;
    }
    randomColors (){
        const colorCount = this.colors.length;
        const i = Math.floor(Math.random() * Math.floor(colorCount));
        return this.colors[i];
    }
    createRect (x,y,width,height,color){
        this.context.fillStyle = color;
        this.context.fillRect(x * width , y * height, width, height);
        this.context.lineWidth = 2;
        this.context.strokeStyle = 'black';
        this.context.strokeRect(x * width ,y * height ,width,height);
       
    };
    render(playfield) {
        this.clearScreen();
        const color = this.randomColors();
        for (let y = 0; y < playfield.length; y++) {
            const line = playfield[y];
            for (let x = 0; x < line.length; x++) {
                const block = line[x];
                if (block) {
                    this.createRect(x,y,this.blockWidth,this.blockHeight,this.randomColors());
                };  
            };
        };
    };
    clearScreen(){
        this.context.clearRect(0,0,this.width,this.height);
    };
    
  
};