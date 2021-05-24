 
function compute()
{   
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var y = document.getElementById("years").value;
    var interest =(p*r*y)/100;
     document.getElementById("result").innerHTML="If you deposit" +p+ "at a rate of" +r+ " for the time of" +y+ "years, you will receive " +interest+ "interest";
}  

     function updateRate()
     {
            
            var rateval= document.getElementById("rate").value;
            document.getElementById("rate_val").innerText=rateval;

         }
        




        
