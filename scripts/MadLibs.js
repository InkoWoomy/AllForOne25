const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const input7 = document.getElementById("input7");
const input8 = document.getElementById("input8");
const input9 = document.getElementById("input9");
const input10 = document.getElementById("input10");
const btnSubmitMadLibs = document.getElementById("btnSubmitMadLibs");
const responseMadLibs = document.getElementById("responseMadLibs");

async function madLibs(verb1, verb2, verb3, place, personName, animal, adjective, clothingItem, noun1, noun2)
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini5/MiniChallenge5-MadLibs/${verb1}/${verb2}/${verb3}/${place}/${personName}/${animal}/${adjective}/${clothingItem}/${noun1}/${noun2}`);
    const data = await promise.text();
    return data;
}

btnSubmitMadLibs.addEventListener('click', async() => 
{
    responseMadLibs.innerText = await madLibs(input1.value, input2.value, input3.value, input4.value, input5.value, input6.value, input7.value, input8.value, input9.value, input10.value);
})