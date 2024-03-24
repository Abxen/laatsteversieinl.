console.log("yippie")

let getal = 0
let nextlevelpops = 10
let healthgetal = 1

let currenthealth = healthgetal
let timesclicked = 0

const nextlevel = document.querySelector('h2')
const points = document.querySelector('h3')
const health = document.querySelector('h4')

let knop = document.querySelector('#rodeballon')
let gif = document.querySelector('#yippie')

let width = 100
let popbar = document.getElementById("bar")


/*bij deze code heb ik hulp gehad van https://stackoverflow.com/questions/9419263/how-to-play-audio
ik heb dit wel met let gedaan ipv var en heb wat aanpassingen aan de code gedaan. */
function geluid() {
    let audio = new Audio('(short) Yippee sound effect!!.mp3')
    audio.play()
}


function play() {
    let audio = new Audio('Bloons TD 5 Sound Effect - Pop Bloon Sound.mp3')
    audio.play()
}


function roze(){
    console.log("roze")
    console.log("getal:" + nextlevelpops)
    timesclicked++
    currenthealth -= 1
    health.textContent = ('Health: ') + currenthealth

    if (currenthealth ===  0) {
    /*Dit zorgt ervoor dat health weer reset */
    currenthealth = healthgetal
    health.textContent = ('Health: ') + currenthealth
    gif.src = 'images/1434843_2deda.gif';
    /*Hier maak ik een functie aan zonder een hele functie
    uit te hoeven schrijven, want ik ga voor de rest toch niets
    in deze functie doen. Dit is een arrow function. Ik heb hierover
    geleerd door een vriend van mij genaamd Wessel*/
    setTimeout (()=> {gif.src = 'images/400-by-400.png'}, 1000)
    getal = getal + 1
    /*console.log("health:" + getal)*/
    points.textContent = ('Points: ') + getal
    }

    if(timesclicked == healthgetal){
        timesclicked = 0
        nextlevelpops -=1
        width -= 10
        nextlevel.textContent = ('Pops till next level: ') + nextlevelpops
        popbar.style.width = width + "%"; 
    }

    if (nextlevelpops ===  0) {
        width = 100
        popbar.style.width = width + "%";
        knop.src = ('images/rodeballon.avif')
        nextlevelpops = 10
        nextlevel.textContent = ('Pops till next level: ') + 10
        /*hoe reset ik dit, zodat het weer vanaf het begin begint?*/
        yippie.removeEventListener('click', roze)
        yippie.addEventListener('click', aftellen)
        healthgetal = 1
    }
}


function paars(){
    console.log("paars")
    console.log("getal:" + nextlevelpops)
    timesclicked++
    currenthealth -= 1
    health.textContent = ('Health: ') + currenthealth


    if (currenthealth ===  0) {
        currenthealth = healthgetal
        health.textContent = ('Health: ') + currenthealth
        gif.src = 'images/1434843_2deda.gif';
        setTimeout (()=> {gif.src = 'images/400-by-400.png'}, 1000)
        getal = getal + 1
        points.textContent = ('Points: ') + getal
    }

    if(timesclicked == healthgetal){
        timesclicked = 0
        nextlevelpops -=1
        width -= 10
        nextlevel.textContent = ('Pops till next level: ') + nextlevelpops
        popbar.style.width = width + "%";  
    }


    if (nextlevelpops ===  0) {
        width = 100
        popbar.style.width = width + "%";
        knop.src = 'images/rozeballon.png';
        nextlevelpops = 10
        nextlevel.textContent = ('Pops till next level: ') + 10
        /*hoe reset ik dit, zodat het weer vanaf het begin begint?*/
        yippie.removeEventListener('click', paars)
        yippie.addEventListener('click', roze)
        healthgetal = 5
    }
}

function oranje(){
    timesclicked++
    console.log("oranje")
    console.log("getal:" + nextlevelpops)
    currenthealth -= 1
    health.textContent = ('Health: ') + currenthealth


    if (currenthealth ===  0) {
        currenthealth = healthgetal
        health.textContent = ('Health: ') + currenthealth
        gif.src = 'images/1434843_2deda.gif';
        setTimeout (()=> {gif.src = 'images/400-by-400.png'}, 1000)
        getal = getal + 1
        points.textContent = ('Points: ') + getal
    }
      
    if(timesclicked == healthgetal){
        timesclicked = 0
        nextlevelpops -=1
        width -= 10
        nextlevel.textContent = ('Pops till next level: ') + nextlevelpops
        popbar.style.width = width + "%";
    }

    if (nextlevelpops ===  0) {
        width = 100
        popbar.style.width = width + "%";
        knop.src = 'images/paarseballon.png';
        nextlevelpops = 10
        nextlevel.textContent = ('Pops till next level: ') + 10
        yippie.removeEventListener('click', oranje)
        yippie.addEventListener('click', paars )
        healthgetal = 4
    }
}


function blauw(){
    /*Zorgt ervoor dat de health omhoog gaat en je vaker  moet klikken om 
    de ballon te poppen*/
    timesclicked++
    console.log("blauw")
    console.log("getal:" + nextlevelpops)
    currenthealth -= 1
    health.textContent = ('Health: ') + currenthealth

    if (currenthealth ===  0) {
        currenthealth = healthgetal
        health.textContent = ('Health: ') + currenthealth
        gif.src = 'images/1434843_2deda.gif';
        setTimeout (()=> {gif.src = 'images/400-by-400.png'}, 1000)
        getal = getal + 1
        points.textContent = ('Points: ') + getal
    }

    if(timesclicked == healthgetal){
        timesclicked = 0
        nextlevelpops -=1
        width -= 10
        nextlevel.textContent = ('Pops till next level: ') + nextlevelpops
        popbar.style.width = width + "%";      
    }

    if (nextlevelpops ===  0) {
        width = 100
        popbar.style.width = width + "%";
        knop.src = 'images/oranjeballon.png';
        nextlevelpops = 10
        nextlevel.textContent = ('Pops till next level: ') + 10
        yippie.removeEventListener('click', blauw)
        yippie.addEventListener('click', oranje )
        healthgetal = 3
    }
}


function aftellen(){
    nextlevelpops = nextlevelpops - 1
    width -= 10
    console.log("getal:" + nextlevelpops)
    nextlevel.textContent = ('Pops till next level: ') + nextlevelpops
    popbar.style.width = width + "%";
    currenthealth -= 1
    health.textContent = ('Health: ') + currenthealth


    if (currenthealth ===  0) {
        currenthealth = healthgetal
        health.textContent = ('Health: ') + currenthealth
        gif.src = 'images/1434843_2deda.gif';
        setTimeout (()=> {gif.src = 'images/400-by-400.png'}, 1000)
        getal = getal + 1
        points.textContent = ('Points: ') + getal
    }
    
    /*Dit zorgt ervoor dat de ballon blauw wordt na 10 pops*/
    if (nextlevelpops ===  0) {
        width = 100
        popbar.style.width = width + "%";
        knop.src = 'images/blauweballon.png';
        /*Dit zorgt ervoor dat de pops weer resetten */
        nextlevelpops = 10
        nextlevel.textContent = ('Pops till next level: ') + 10
    /*Dit zorgt ervoor dat er een ander event plaatsvind, hulp van 
    de docent gehad*/
        yippie.removeEventListener('click', aftellen)
        yippie.addEventListener('click', blauw) 
       /* yippie.addEventListener('click', blauwtellen) */
       healthgetal = 2
    }
}
   

/*Yippie is een transparante img over de ballon heen, dit zorgt ervoor 
de gif werkt. Dit is waarom yippie wordt aangesproken ipv rodeballon*/
yippie.addEventListener('click', aftellen)
/*yippie.addEventListener('click', healthaftellen)*/
yippie.addEventListener('click', play)
points.addEventListener('mouseover', geluid)

   