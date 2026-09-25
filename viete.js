document.getElementById("button1").onclick= function(){
    let a =document.getElementById("inputa").value;
    let b =document.getElementById("inputb").value;
    let c =document.getElementById("inputc").value;
    let D=b*b-4*a*c;
    document.getElementById("eredmeny").innerHTML=D;

}