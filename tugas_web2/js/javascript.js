function cek(){
  if(form.angka1.value == "" || form.angka2.value == "" || form.angka3.value == "" ){
    alert("Data kosong");
    exit;
  }
}

function hitnil() {
  cek();
  a1=eval(form.angka1.value);
  a2=eval(form.angka2.value);
  a3=eval(form.angka3.value);

  var numbers=[a1,a2,a3];
  Nrata=(a1+a2+a3)/3;
  maksimum=Math.max.apply(Math,numbers);
  minimum=Math.min.apply(Math,numbers);
  numbers.sort((a, b)=> a - b );
  lowmid = Math.floor((numbers.length - 1) / 2);
  highmid = Math.ceil((numbers.length - 1) / 2);
  hasil = (numbers[lowmid] + numbers[highmid]) / 2;

  form.rata.value = Nrata;
  form.maks.value = maksimum;
  form.min.value = minimum;
  form.med.value = hasil;
}

function reset() {
  form.angka1.value="";
  form.angka2.value="";
  form.angka3.value="";
  form.total.value = "";
}
