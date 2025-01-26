const input1Compare = document.getElementById("input1Compare");
const input2Compare = document.getElementById("input2Compare");
const responseCompare = document.getElementById("responseCompare");
const btnSubmitCompare = document.getElementById("btnSubmitCompare");

async function getSum(num1, num2)
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini4/MiniChallenge4-GreaterThanOrLessThan/${num1}/${num2}/`);
    const data = await promise.json();
    return data;
}

btnSubmitCompare.addEventListener('click', async() =>
{
    responseCompare.innerText = await getSum(input1Compare.value, input2Compare.value);
})