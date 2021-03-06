
const gender_url= "https://api.genderize.io/?name="
const age_url="https://api.agify.io/?name="
const nationality_url="https://api.nationalize.io/?name="
const dog_url="https://dog.ceo/api/breeds/image/random"


getDog()


function getPrediction(){
    
    var user_input =document.getElementById("name").value
    
    getGender(user_input)
    getAge(user_input)
    getNationality(user_input)  
    
}


async function getGender(user_input){
    const response= await fetch(gender_url+ user_input);
    const gender_data=  await response.json();
    const gender= gender_data.gender;
    document.getElementById("gender").textContent= "Gender: " + gender;
    
}



async function getAge(user_input){
    const response= await fetch(age_url+user_input);
    const age_data=  await response.json();
    const age= age_data.age;
    document.getElementById("age").textContent= "Age: " + age;
    
}


async function getNationality(user_input){
    document.getElementById("nationality").innerHTML = null
    
    const response= await fetch(nationality_url+user_input);
    const nationality_data=  await response.json();
    const nationality= nationality_data.country
    for (const i in nationality){
        var list= "<li>"+nationality[i].country_id+"</li>"
        document.getElementById("nationality").innerHTML += "Nationality" + list   
    }
}


async function getDog(){
    const response= await fetch(dog_url);
    const dog_data=  await response.json();
    const dog= dog_data.message
    document.getElementById("image").src=dog     
    document.body.style.backgroundImage = 'url('+dog+')'

}
