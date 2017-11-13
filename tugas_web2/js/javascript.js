function process() {
  if(document.getElementById('angka1').value == "" ||
     document.getElementById('angka2').value == "" ||
     document.getElementById('angka3').value == "" ){
    alert("Data kosong");
    exit;
  }

  var form1 = document.getElementById('angka1').value;
  var form2 = document.getElementById('angka2').value;
  var form3 = document.getElementById('angka3').value;

  var numbers = [parseFloat(form1),parseFloat(form2),parseFloat(form3)];

  var maksimum = Math.max.apply(Math,numbers);
  var minimum = Math.min.apply(Math,numbers);
  numbers.sort((a, b)=> a - b );;

  var rerata = (numbers[0] + numbers[1] + numbers[2]) / 3;

  document.getElementById('rata').value = rerata;
  document.getElementById('maks').value = maksimum;
  document.getElementById('min').value = minimum;
  document.getElementById('med').value = numbers[1];
}

function reset(){
  document.getElementById('angka1').value = "";
  document.getElementById('angka2').value = "";
  document.getElementById('angka3').value = "";
  document.getElementById('rata').value = "";
  document.getElementById('maks').value = "";
  document.getElementById('min').value = "";
  document.getElementById('med').value = "";
}
