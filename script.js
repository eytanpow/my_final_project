function compute()
{
    if(validateForm())
    {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    /*document.getElementById("result").innerHTML="";*/
    var deposit="If you deposit <mark>"+principal+"</mark>,\<br\>"
    var rate="at an interest rate of <mark>"+rate+"</mark>\<br\>"
    var recieve="You will receive an amount of <mark>"+interest+"</mark>\<br\>";
    var year="in the year <mark>"+year+"</mark>"
    document.getElementById("result").innerHTML=deposit+rate+recieve+year;
    }
}
function updateRate() 
{
    var x = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=x+"%";
}  
function validateForm()
 {
    var principal = document.getElementById("principal").value;
    if (principal <=0) {
      alert("principal must be bigger than 0");
      document.getElementById("principal").focus();
      return false;
    }
    else
    return true;
  }  

