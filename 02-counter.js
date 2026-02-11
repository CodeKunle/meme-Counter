

const randomImages = [{
    id: 1,
    img: "02-image/01-pics.webp" 
},
{
    id: 2,
    img: "02-image/02-pics.webp" 

},
{
    id: 3,
    img: "02-image/03-pics.webp" 

},
{
    id: 4,
    img: "02-image/04-pics.gif" 

},
{
    id: 5,
    img: "02-image/05-pics.webp" 

},
{
    id: 6,
    img: "02-image/06-pics.gif" 

},
{
    id: 7,
    img: "02-image/07-pics.gif" 

},
{
    id: 8,
    img: "02-image/08-pics.gif" 

},
{
    id: 9,
    img: "02-image/09-pics.gif" 

},
{
    id: 10,
    img: "02-image/10-pics.webp" 

},{
    id: 11,
    img: "02-image/11-pics.gif" 
}];


const display2 = document.getElementById("display-2");
const display3 = document.getElementById("display-3");
const display4 = document.getElementById("display-4");
const display5 = document.getElementById("display-5");
const display6 = document.getElementById("display-6");

const countBtn = document.getElementById("countBtn");
const resetBtn = document.getElementById("resetBtn");


let count = Number(localStorage.getItem("count")) || 0;
let countOfFifties = Number(localStorage.getItem("countOfFifties")) || 0;
let countOfHundreds = Number(localStorage.getItem("countOfHundreds")) || 0;

let isOrangeBackground = true;

display2.textContent = count;
display3.textContent = `50s: ${countOfFifties}`;
display4.textContent = `100s: ${countOfHundreds}`;



function counting(){
    
    count++;
    display2.textContent = count;
    
    if(count % 50 === 0){
        
        countOfFifties++;
        display3.textContent = `50s: ${countOfFifties}`;
        display3.style.backgroundColor = isOrangeBackground ?"purple" : "orange";
        isOrangeBackground = !isOrangeBackground;

       /* 
                ----------ALGORITHIM-------------- */
          //1. Generate a random number between 1 & 11

        //const randomId = Math.floor((Math.random()*randomImages.length) + 1);

          //2. Match this number to the appropriate position in the array
        const randomId = Math.floor((Math.random()*randomImages.length) + 1);
        const pickedImage = randomImages.find(randomImage=> randomId === randomImage.id);

          //3. Match the identified index image id & display it appropriately

        if(pickedImage){
            display5.style.backgroundImage = `url("${pickedImage.img}")`;
            display5.style.backgroundSize = "cover";
            display5.style.backgroundPosition = "center";
        }
    }
        
    if(count % 100 === 0){
        countOfHundreds++;
        display4.textContent = `100s: ${countOfHundreds}`;
        const randomId = Math.floor((Math.random()*randomImages.length) + 1);
        const pickedImage = randomImages.find(randomImage=> randomId === randomImage.id);

          // Match the identified index image id & display it appropriately

        if(pickedImage){
            display6.style.backgroundImage = `url("${pickedImage.img}")`;
            display6.style.backgroundSize = "cover";
            display6.style.backgroundPosition = "center";
        }
    }
localStorage.setItem("count", count);
localStorage.setItem("countOfFifties", countOfFifties);
localStorage.setItem("countOfHundreds", countOfHundreds);
}
countBtn.addEventListener("click", counting);

resetBtn.addEventListener("click", () => {

    // Clear storage
    localStorage.clear();

    // Reset in-memory variables
    count = 0;
    countOfFifties = 0;
    countOfHundreds = 0;
    isOrangeBackground = true;

    // Reset UI text
    display2.textContent = 0;
    display3.textContent = "50s: 0";
    display4.textContent = "100s: 0";

    // Reset styles
    display3.style.backgroundColor = "";
    display5.style.backgroundImage = "";
    display6.style.backgroundImage = "";
});






