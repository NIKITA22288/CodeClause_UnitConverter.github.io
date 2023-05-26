var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", myresult);
inputType.addEventListener("change", myresult);
resultType.addEventListener("change", myresult);
function myresult(){
    inputTypeValue=inputType.value;
    resultTypeValue=resultType.value;
    
    if (inputTypeValue == "meter" && resultTypeValue == "kilometer") {
        result.value = Number(input.value) * 0.001;
      }
      else if (inputTypeValue == "meter" && resultTypeValue == "centimeter") {
        result.value = Number(input.value) * 100;
      }
      else if (inputTypeValue == "meter" && resultTypeValue == "feet") {
        result.value = Number(input.value) * 3.28084;
      }
      else if (inputTypeValue == "meter" && resultTypeValue == "inches") {
        result.value = Number(input.value) * 39.3701;
      }
      else if (inputTypeValue == "centimeter" && resultTypeValue == "meter") {
        result.value = Number(input.value) * 0.01;
      }
      else if (inputTypeValue == "centimeter" && resultTypeValue == "kilometer") {
        result.value = Number(input.value) * 0.00001;
      }
      else if (inputTypeValue == "centimeter" && resultTypeValue == "feet") {
        result.value = Number(input.value) * 0.0328084;
      }
      else if (inputTypeValue == "centimeter" && resultTypeValue == "inches") {
        result.value = Number(input.value) * 0.393701;
      }
      else if (inputTypeValue == "kilometer" && resultTypeValue == "meter") {
        result.value = Number(input.value) * 1000;
      }
      else if (inputTypeValue == "kilometer" && resultTypeValue == "centimeter") {
        result.value = Number(input.value) * 100000;
      }
      else if (inputTypeValue == "kilometer" && resultTypeValue == "feet") {
        result.value = Number(input.value) * 3280.84;
      }
      else if (inputTypeValue == "kilometer" && resultTypeValue == "inches") {
        result.value = Number(input.value) * 39370.1;
      }
      else if (inputTypeValue == "feet" && resultTypeValue == "meter") {
        result.value = Number(input.value) * 0.3048;
      }
      else if (inputTypeValue == "feet" && resultTypeValue == "centimeter") {
        result.value = Number(input.value) * 30.48;
      }
      else if (inputTypeValue == "feet" && resultTypeValue == "kilometer") {
        result.value = Number(input.value) * 0.0003048;
      }
      else if (inputTypeValue == "feet" && resultTypeValue == "inch") {
        result.value = Number(input.value) * 12;
      }
      else if (inputTypeValue == "inches" && resultTypeValue == "meter") {
        result.value = Number(input.value) * 0.0254;
      }
      else if (inputTypeValue == "meter" && resultTypeValue == "meter") {
        result.value = Number(input.value);
      }
      else if (inputTypeValue == "kilometer" && resultTypeValue == "kilometer") {
        result.value = Number(input.value);
      }
      else if (inputTypeValue == "centimeter" && resultTypeValue == "centimeter") {
        result.value = Number(input.value);
      }
      else if (inputTypeValue == "feet" && resultTypeValue == "feet") {
        result.value = Number(input.value);
      }
      else if (inputTypeValue == "inches" && resultTypeValue == "inches") {
        result.value = Number(input.value);
      }
    }
      
      
      

    
