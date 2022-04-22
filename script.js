function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="";
    document.getElementById("result").innerHTML=principal+interest;
}
function updateRate() 
{
    var x = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=x+"%";
}    

