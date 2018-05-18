

    function myFunction()
    {
    document.getElementById('topdiv').style.display="none";
    document.getElementById('bottomdiv').style.display="inline";
var text1=  document.getElementById('nam3').value;

    document.getElementById('para1').innerText=text1;
 
 var text2= document.getElementById('mail').value;

 document.getElementById('para2').innerText=text2;

 var text3= document.getElementById('bday').value;
 
 document.getElementById('para3').innerText=text3;

// if(document.getElementsByName('gender').checked){
//     console.log('inside if loop');
//     var text4= document.getElementById('Gender').value;
//     alert(text4);


   
// }

if (radiovalue=='male'){
    document.getElementById('para4').innerText='M';
 }
 else if(radiovalue=='female'){
    document.getElementById('para4').innerText='F';
 }


 
 
 

}

var radiovalue;
    function radioselection(value)
    {
        radiovalue=value;
    }
    