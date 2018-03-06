import prompt from "@jace1995/readline";
import { generateKey, sign, operation, generate, Primer} from "./logic";

var score = 0;

interface SignsPerformance {
    [key : number]: string;
}
const SignsConvert: SignsPerformance = {
    [sign.ADD]: "+",
    [sign.DEV]: "-",
    [sign.MULTIPLY]: "*",
    [sign.DEV]: "/",
};


 async function main() {
    while (true) {
        const Current = new Primer(); 
        const answ = await prompt(`${Current.numberFirst} ${SignsConvert[Current.key]} ${Current.numberSecond} = `);

        if (answ == "!exit") {
            console.log(`Содержание алкоголя ~${score / 10}00 промилле!`);
            break;
        }
        if (Number(answ) == Current.result) {
            console.log("Наливай еще!");
        } else {
            score++;
            console.log(`Хватит пить!\nВерный ответ: ${Current.result}`);
        }
     }
}
main();






