function getBmiValue(){
  var weight = document.getElementById('weight').value;
  var height= document.getElementById('height').value;

  var IMC=weight/(height*height);

 IMC= IMC.toFixed(2);

  document.getElementById('imc').value = IMC;

  var imcNumber= parseInt(IMC,10);
  console.log(imcNumber);

 imcMessage="";

 ResponseIMC = document.getElementById("ResponseIMC");

 if(imcNumber<=18.5){
   imcMessage="Tu IMC muestra que estas bajo de peso.";
   ResponseIMC.classList.toggle("good",false);
 }
 else if(imcNumber>=18.5 && imcNumber <=24.9){
   imcMessage="Tu IMC muestra que estas en un peso saludable.";
   ResponseIMC.classList.toggle("good",true);
 }
 else if(imcNumber>=25 && imcNumber <=29.9){
   imcMessage="Tu IMC muestra que estas en sobrepeso.";
    ResponseIMC.classList.toggle("good",false);
 }
 else if(imcNumber>=30 && imcNumber <=34.9){
   imcMessage="Tu IMC muestra que estas en una obesidad de grado 1.";
    ResponseIMC.classList.toggle("good",false);
 }
 else if(imcNumber>=35 && imcNumber <=39.9){
   imcMessage="Tu IMC muestra que estas en una obesidad de grado 2.";
  ResponseIMC.classList.toggle("good",false);
 }
 else{
    imcMessage="Tu IMC muestra que estas en una obesidad mórbida.";
     ResponseIMC.classList.toggle("good",false);
 }

  ResponseIMC.innerHTML = imcMessage;
}
