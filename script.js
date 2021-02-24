
function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("myRange").value;
    y = document.getElementById("years").value;

    rate_percentage = r / 100;
    amount = (p * rate_percentage) * y;

    document.getElementById("result").innerHTML = `If you deposit <mark>${p}</mark> at an interest rate of <mark>${r}%</mark> You will receive an amount of <mark>${amount}</mark>, in the year <mark>${2021 + parseInt(y,10)}</mark>`
}