var input = 12345;

var change = function(input){
  var ten_thousand  = Math.floor(input % 10000);
  var five_thousand = Math.floor((input / 10000) % 5000);
  var thousand      = Math.floor((input / 10000 / 5000) % 1000);
  var five_hundred  = Math.floor((input / 10000 / 5000 / 1000) % 500);
  var hundred       = Math.floor((input / 10000 / 5000 / 1000 / 500) % 100);
  var fifty         = Math.floor((input / 10000 / 5000 / 1000 / 500 / 100) % 50);
  var ten           = Math.floor((input / 10000 / 5000 / 1000 / 500 / 100 / 50) % 10);
  var five          = Math.floor((input / 10000 / 5000 / 1000 / 500 / 100 / 50 / 10) % 5);
  var one           = Math.floor(input / 10000 / 5000 / 1000 / 500 / 100 / 50 / 10 / 5);
  return [ten_thousand, five_thousand, thousand, five_hundred, hundred, fifty, ten, five, one];
}

var change_anser = change(input);
document.getElementById('input').textContent =
  '1万円' + change_anser[0] + '枚' +
  '5千円' + change_anser[1] + '枚' +
  '千円' + change_anser[2] + '枚' +
  '500円' + change_anser[3] + '枚' +
  '100円' + change_anser[4] + '枚' +
  '50円' + change_anser[5] + '枚' +
  '10円' + change_anser[6] + '枚' +
  '5円' + change_anser[7] + '枚' +
  '1円' + change_anser[8] + '枚';
