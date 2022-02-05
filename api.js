var user_input= prompt("insert name:")
const gender_url= "https://api.genderize.io/?name="+user_input
const age_url="https://api.agify.io/?name="+ user_input
const nationality_url="https://api.nationalize.io/?name="+ user_input
const dog_url="https://dog.ceo/api/breeds/image/random"

getGender()
getAge()
getNationality()
getDog()




async function getGender(){
    const response= await fetch(gender_url);
    const gender_data=  await response.json();
    const gender= gender_data.gender;
    document.getElementById("gender").textContent= gender;
    
}


async function getAge(){
    const response= await fetch(age_url);
    const age_data=  await response.json();
    const age= age_data.age;
    document.getElementById("age").textContent= age;
    
}


async function getNationality(){
    const response= await fetch(nationality_url);
    const nationality_data=  await response.json();
    const nationality= nationality_data.country
    for (const i in nationality){
       var list= "<li>"+nationality[i].country_id+"</li>"
        document.getElementById("nationality").innerHTML += list
        
        
    }
}

async function getDog(){
    const response= await fetch(dog_url);
    const dog_data=  await response.json();
    const dog= dog_data.message
    document.getElementById("image").src=dog

    

}