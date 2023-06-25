
let maximum=parseInt(prompt("enter the maximum number"));
while(!maximum){
maximum= parseInt(prompt("please enter a valid number"));
}

const targetNum= Math.floor(Math.Random()* maximum)+1;

let guess=parseInt("enter the guess");
let attempts=1;
while(parseInt(guess)!=targetNum){
    attempts++;
    if(guess === 'q'){
        break;
    }
    if(guess>targetNum){
        guess= (prompt("too high,try again"));
    }
    if(guess<targetNum){
        guess= (prompt("too low,try again"));
    }
}
if(guess === 'q'){
    console.log("quitting");
}
console.log(`you got it. it took you ${attempts} guesses!`);

