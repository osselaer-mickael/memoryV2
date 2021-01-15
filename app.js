let choiceBody = document.querySelector('#theme');
let choiceBackGroundLeft = document.getElementById('container_left');
let backgroundCard = document.getElementById('card');
let centuryFox = document.getElementById('centuryFox');
let buttonStart = document.getElementById('start');
let choiceLevel = document.getElementById('level');
let label = document.getElementsByTagName('label');
let border = document.querySelector('.border');
let tittleScore = document.querySelector('.tittle');

choiceBody.addEventListener('change', (e) => {
    if (choiceBody.value === 'nemo') {
        document.body.style.backgroundImage = "url('nemo_background.jpeg')";
        choiceBackGroundLeft.style.backgroundImage = "url('le-monde-de-nemo.jpg')";
        choiceBackGroundLeft.style.backgroundSize = "cover";
        backgroundCard.style.backgroundImage = "url('le-monde-de-nemo.jpg')";
        backgroundCard.style.border = "2px solid white";
        centuryFox.style.display = "none";
    }
    else if (choiceBody.value === 'cinema') {
        document.body.style.backgroundImage = "url('image_background.png')";
        choiceBackGroundLeft.style.backgroundImage = "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)";
        backgroundCard.style.backgroundImage = "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)";
        centuryFox.style.display = "flex"
    }
})

buttonStart.addEventListener('click', (e) => {
        choiceBody.style.display = "none";
        choiceLevel.style.display = "none";
        buttonStart.style.display = "none";
        backgroundCard.style.display = "none";
        centuryFox.style.display = "none";
        for(let lab of label){
            lab.innerHTML = "";
        }
        border.style.display = "none";
        tittleScore.style.margin = "2rem";
})




