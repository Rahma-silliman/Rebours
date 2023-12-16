const body = document.querySelector("body");

const timer = document.querySelector("#timer");
const inputElement = document.querySelector("#entree");
const btn = document.querySelectorAll(".btn")
const hidden = document.querySelector('.hidden')
const atBeback = document.querySelector('#atBeback');
timer.style.marginTop = '5rem'
let valueMinutes
let valueSecondes
let heure
let minute
let seconde
document.querySelector('.input').style.marginTop = '30rem'
function atBeBack(){


  const number = new Date()
  heure = number.getHours();
 
    minute = number.getMinutes();
    seconde = number.getSeconds();
    let secondeActuelle = heure*3600 + minute*60 + seconde;
    let secondeTotale = secondeActuelle + parseInt(valueSecondes) ;
    heure = parseInt(secondeTotale/3600);
    minute = parseInt((secondeTotale%3600)/60,10);
    seconde = parseInt(secondeActuelle%60,10)
    heure = heure < 10? `0${heure}`:heure;
    minute = minute < 10? `0${minute}`: minute;
    seconde = seconde < 10? `0${seconde}`:seconde;
   atBeback.innerHTML = `Be Back At ${heure}:${minute}:${seconde}`
}


function foo() {
  if(valueSecondes === 0){
    timer.innerHTML = ''
    atBeback.innerHTML = ''
  }
  else{
    let heures = parseInt(valueSecondes / 3600, 10);

    let minutes = valueMinutes <= 60 ? parseInt(valueSecondes / 60, 10) : parseInt((valueSecondes % 3600) / 60, 10);
    let secondes = parseInt(valueSecondes % 60, 10);
    heures = heures < 10 ? `0${heures}` : heures;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    secondes = secondes < 10 ? `0${secondes}` : secondes;
    valueSecondes = valueSecondes <= 0 ? 0 : valueSecondes - 1;
  
    timer.innerHTML = `${heures}:${minutes}:${secondes}`;
  }

}

let compteur = 0;
inputElement.addEventListener("keydown", (event) => {
  clearInterval(compteur)
  if (event.key === 'Enter' && inputElement.value > 0) {
    valueMinutes = inputElement.value;
    valueSecondes = valueMinutes * 60;
    compteur = setInterval(foo, 1000);
 
  setTimeout(atBeBack,1000);  
  
  }

});


function click(val) {
  val = document.getElementById(id).value
  console.log(val)
  return val
}

for (let i = 1; i < btn.length; i++) {
  btn[i].addEventListener('click', (event) => {
    clearInterval(compteur);
    valueMinutes = btn[i].value;
    valueSecondes = valueMinutes * 60;
    compteur = setInterval(foo, 1000);
    setTimeout(atBeBack, 1000);

  });


}

btn[0].addEventListener('click', () => {
  valueSecondes = btn[0].value;
  clearInterval(compteur);
  compteur = setInterval(foo, 1000)

    setTimeout(atBeBack, 1000);


});

