</*script>
let nom=[];
const txt=document.getElementById("txt")
const but1=document.getElementById("but1")
const but2=document.getElementById("but2")
const liste=document.getElementById("liste")
 const popup=document.getElementById("popup")
but1.addEventListener("click",function () {
if(txt.value!=""){
    const lis = document.createElement("li");
lis.textContent = txt.value ;
liste.appendChild(lis);
   nom.push(txt.value);
   txt.value="";
}  
    else {
        alert("Saisie le nom!");
    }                                                                 
});   
but2.addEventListener("click",function()){


}



</script> */