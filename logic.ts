
export enum sign {
    ADD,
    SUBSTRACT,
    MULTIPLY,
    DEV,
}
 export function generateKey(): number {
   
    return Math.floor( Math.random() * 4 );
 } 
 export function operation(num1: number, num2: number, key: number): number {
     switch (key) {
         case sign.ADD:
            return num1 + num2; 
         case sign.SUBSTRACT:
            return num1 - num2;           
         case sign.MULTIPLY:
            return num1 * num2;     
         case sign.DEV: 
            return Math.round(num1 / num2 * 10) / 10;  
         default: 
            return NaN;    
     }
 }
 
 export function generate(max: number, min: number): number {
         const res = Math.round(Math.random()  * (max - min ) + min);
         return res ? res : max;
       }
       
export class Primer {
  
    readonly text: string;
    readonly result: number;
    readonly numberFirst: number;
    readonly numberSecond: number;
    readonly key: number;
    constructor() {
        const min = -10;
        const max = 10;
        this.key = generateKey();
        this.numberFirst = generate(min, max);
        this.numberSecond = generate(min, max);
        this.result = operation(this.numberFirst, this.numberSecond, this.key);
    }
}