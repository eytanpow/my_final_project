function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    /*document.getElementById("result").innerHTML="";*/
    var deposit="If you deposit "+principal+",\<br\>"
    var rate="at an interest rate of "+rate+"\<br\>"
    var recieve="You will receive an amount of "+interest+"\<br\>";
    var year="in the year "+year
    document.getElementById("result").innerHTML=deposit+rate+recieve+year;
}
function updateRate() 
{
    var x = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=x+"%";
}    

