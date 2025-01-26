const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const response = document.getElementById("response");

async function getDecision(choice)
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini10/Mini10-ResturauntPicker/${choice}`);
    const data = await promise.text();
    return data;
}

btn1.addEventListener('click', async() =>
{
    response.innerText = await getDecision("pizza");
});

btn2.addEventListener('click', async() =>
{
    response.innerText = await getDecision("chinese");
});

btn3.addEventListener('click', async() =>
{
    response.innerText = await getDecision("fastfood");
});

