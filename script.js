function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
}
function updateRate() 
{
    var x = document.getElementById("Interest").value;
    document.getElementById("rate_val").innerHTML=x+"%";
}    

function updatecheck() 
{
    var rateval = "checked";
    document.getElementById("check").innerText=rateval;
}    