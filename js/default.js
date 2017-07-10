var input = 12345;

var change = function(input){
  var change_number[9];
  var div_number[9] = {10000, 5000, 1000, 500, 100, 50, 10, 5, 1};
  var input_rem = input;
  for(var i = 0;i < 9;i++){
    change_number[i] = input_rem / div_number[i];
    input_rem -= div_number[i] * change_number[i];
  }
  return [change_number[0], change_number[1], change_number[2], change_number[3], change_number[4], change_number[5], 
          change_number[6], change_number[7], change_number[8];
}

var change_anser = change(input);
document.getElementById('input').textContent =
  '1万円' + change_anser[0] + '枚\n' +
  '5千円' + change_anser[1] + '枚\n' +
  '千円'  + change_anser[2] + '枚\n' +
  '500円' + change_anser[3] + '枚\n' +
  '100円' + change_anser[4] + '枚\n' +
  '50円'  + change_anser[5] + '枚\n' +
  '10円'  + change_anser[6] + '枚\n' +
  '5円'   + change_anser[7] + '枚\n' +
  '1円'   + change_anser[8] + '枚';
