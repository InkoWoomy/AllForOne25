const input1Ask = document.getElementById("input1Ask");
const input2Ask = document.getElementById("input2Ask");
const responseAsk = document.getElementById("responseAsk");
const btnSubmitAsk = document.getElementById("btnSubmitAsk");

async function getAnswer(name, time)
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini3/MiniChallenge3-AskingQuestions/${name}/${time}/`);
    const data = await promise.text();
    return data;
}

btnSubmitAsk.addEventListener('click', async() =>
{
    responseAsk.innerText = await getAnswer(input1Ask.value, input2Ask.value);
})