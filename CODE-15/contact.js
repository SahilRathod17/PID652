

function FillAddressInput()
    {
       let checkBox= document.getElementById('checkbox');

       let c1 = document.getElementById("c1");
       let c3 = document.getElementById("c3");
       let c4 = document.getElementById("c4");
       let c5 = document.getElementById("c5");
       let c6 = document.getElementById("c6");
       let c7 = document.getElementById("c7");
       let c8 = document.getElementById("c8");
       let c9 = document.getElementById("c9");
       let c2 = document.getElementById("c2");
       let c10 = document.getElementById("c10");

       let d1 = document.getElementById("d1");
       let d2 = document.getElementById("d2");
       let d3 = document.getElementById("d3");
       let d4 = document.getElementById("d4");
       let d5 = document.getElementById("d5");
       let d6 = document.getElementById("d6");
       let d7 = document.getElementById("d7");
       let d8 = document.getElementById("d8");
       let d9 = document.getElementById("d9");
       let d10 = document.getElementById("d10");




        if (checkBox.checked == true)
        {
        
       var e1 = c1.value;
       let e2 = c2.value;
       let e3 = c3.value;
       let e4 = c4.value;
       let e5 = c5.value;
       let e6 = c6.value;
       let e7 = c7.value;
       let e8 = c8.value;
       let e9 = c9.value;
       let e10 = c10.value;


       d1.value = e1; 
       d2.value = e2; 
       d3.value = e3;   
       d4.value = e4; 
       d5.value = e5; 
       d6.value = e6; 
       d7.value = e7; 
       d8.value = e8; 
       d9.value = e9;  
       d10.value = e10;      


       }

        else
        {
       d1.value = "";
       d2.value = "";   
       d3.value = "";
       d4.value = "";
       d5.value = "";   
       d6.value = "";
       d7.value = "";
       d8.value = "";   
       d9.value = "";
       d10.value = "";

       }
    }

