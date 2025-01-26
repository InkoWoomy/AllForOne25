const input = document.getElementById("input");
const response = document.getElementById("response");
const btnSubmit = document.getElementById("btnSubmit");

async function getAnswer(text)
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini7A/Mini7-ReverseIt(Alphanumeric)/${text}`);
    const data = await promise.text();
    return data;
}

btnSubmit.addEventListener('click', async() =>
{
    response.innerText = await getAnswer(input.value);
})