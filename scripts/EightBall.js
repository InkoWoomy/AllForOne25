const response = document.getElementById("response");
const btnSubmit = document.getElementById("btnSubmit");
const input = document.getElementById("input")


async function getName(question) 
{
    const promise = await fetch(`https:/allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini8/MiniChallenge8-8Ball/${question}`);
    const data = await promise.text();
    console.log(data);
    return data;
}

btnSubmit.addEventListener('click', async() =>
{
    response.innerText = await getName(input.value);
})