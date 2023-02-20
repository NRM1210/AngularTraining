export class Colorpatch{
    
    constructor(
        public r: number, 
        public g: number, 
        public b: number,
        public a: number,
        public name: string
    ){
    }

    getRgba():string{
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
}