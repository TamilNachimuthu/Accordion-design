function firstfunction(){
    if(para1.style.display=="block")
    {
        para1.style.display="none";
        dropdown1.style.transform="rotate(313deg)";
        document.getElementById("texth31").style.backgroundColor="white";   
        document.getElementById("texth31").style.borderBottom="none"; 
    }
    else{
        // alert(para1);
        para1.style.display="block";
        para2.style.display="none";
        para3.style.display="none";
        document.getElementById("texth31").style.borderBottom="1px solid black";
        document.getElementById("texth31").style.backgroundColor="#E7F1FF";  
        document.getElementById("texth32").style.borderBottom="none";  
        document.getElementById("texth33").style.borderBottom="none";                                                                            
        document.getElementById("texth32").style.backgroundColor="white";        
        document.getElementById("texth33").style.backgroundColor="white";               
        dropdown1.style.transform="rotate(137deg)";
        dropdown2.style.transform="rotate(313deg)";
        dropdown3.style.transform="rotate(313deg)";
        texth31.style.backgroundcollor="red"
        texth32.style.backgroundcollor="white"
        texth33.style.backgroundcollor="white"

    }
}
function secondfunction(){
    if(para2.style.display=="block")
    {
        para2.style.display="none";
        dropdown2.style.transform="rotate(313deg)";  
        document.getElementById("texth32").style.backgroundColor="white";  
        document.getElementById("texth32").style.borderBottom="none";                                   
    }
    else{
        // alert(para2);
        para2.style.display="block";
        para1.style.display="none";
        para3.style.display="none";
        document.getElementById("texth32").style.borderBottom="1px solid black";
        document.getElementById("texth31").style.borderBottom="none";   
        document.getElementById("texth33").style.borderBottom="none";                                                   
        document.getElementById("texth32").style.backgroundColor="#E7F1FF";   
        document.getElementById("texth31").style.backgroundColor="white";        
        document.getElementById("texth33").style.backgroundColor="white";             
        dropdown2.style.transform="rotate(137deg)";
        dropdown1.style.transform="rotate(313deg)";
        dropdown3.style.transform="rotate(313deg)";

    }
}
function thirdfunction(){
    if(para3.style.display=="block")
    {
        para3.style.display="none";
        dropdown3.style.transform="rotate(313deg)";
        document.getElementById("texth33").style.backgroundColor="white"; 
        document.getElementById("texth33").style.borderBottom="none";                          
    }
    else{
        // alert(para3);
        para3.style.display="block";
        para1.style.display="none";
        para2.style.display="none";
        document.getElementById("texth33").style.borderBottom="1px solid black";
        document.getElementById("texth33").style.backgroundColor="#E7F1FF"; 
        document.getElementById("texth32").style.borderBottom="none"; 
        document.getElementById("texth31").style.borderBottom="none";                                                                                                      
        document.getElementById("texth31").style.backgroundColor="white";        
        document.getElementById("texth32").style.backgroundColor="white";                
        dropdown3.style.transform="rotate(137deg)";
        dropdown1.style.transform="rotate(313deg)";
        dropdown2.style.transform="rotate(313deg)";

    }
}

