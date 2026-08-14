const myLabel = document.getElementById("myLabel");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const mySumbit = document.getElementById("mySubmit");

mySumbit.onclick = function(){

    let age = Number(ageInput.value);
    let name = String(nameInput.value);
    if(age >= 18){
        myLabel.textContent = `${name} congrutulations with your license drive`
    }
    else{
        myLabel.textContent = `You are not old enough to receive license drive`
    }
}