const input1Add = document.getElementById("input1Add");
const input2Add = document.getElementById("input2Add");
const responseAdd = document.getElementById("responseAdd");
const btnSubmitAdd = document.getElementById("btnSubmitAdd");

async function getSum(num1, num2)
{
    const promise = await fetch(`https://allforone25-e6hpcea8gnfegqdn.westus-01.azurewebsites.net/api/Mini2/MiniChallenge2-AddTwoNumbers/${num1}/${num2}/`);
    const data = await promise.text();
    return data;
}

btnSubmitAdd.addEventListener('click', async() =>
{
    responseAdd.innerText = await getSum(input1Add.value, input2Add.value);
})