const inputSayHello = document.getElementById("inputSayHello");
const responseSayHello = document.getElementById("responseSayHello");
const btnSubmitSayHello = document.getElementById("btnSubmitSayHello");


async function getName(name) 
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini1/MiniChallenge1-SayHello/${name}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

btnSubmitSayHello.addEventListener('click', async() =>
{
    responseSayHello.innerText = await getName(inputSayHello.value);
    
})