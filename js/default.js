var input = 12345;

var change = function(input)
{
  var change_number = new Array(9);
  var div_number = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  var input_rem = input;
  for(var i = 0; i < 9; i++)
  {
    change_number[i] = Math.floor(input_rem / div_number[i]);
    input_rem -= div_number[i] * change_number[i];
  }
  return change_number;
}

var change_answer = change(input);
document.getElementById('list').textContent =
  '1万円' + change_answer[0] + '枚\n' +
  '5千円' + change_answer[1] + '枚\n' +
  '千円'  + change_answer[2] + '枚\n' +
  '500円' + change_answer[3] + '枚\n' +
  '100円' + change_answer[4] + '枚\n' +
  '50円'  + change_answer[5] + '枚\n' +
  '10円'  + change_answer[6] + '枚\n' +
  '5円'   + change_answer[7] + '枚\n' +
  '1円'   + change_answer[8] + '枚';
