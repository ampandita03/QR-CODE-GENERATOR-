let qrImage = document.getElementById("qrImage");
let imageBox = document.querySelector(".imageBox");
let text= document.getElementById("text");
let outerDiv = document.getElementById("outerDiv");


function generateQR(){  
    if(text.value.length>0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
     imageBox.classList.add("show-img");
     outerDiv.style.height = "550px";
}
else{
    text.classList.add("error");
    setTimeout(()=>{
        text.classList.remove("error");
    },1000)
}
}