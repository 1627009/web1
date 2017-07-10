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
document.createElement('list');

for(i = 0; i < 9; i++)
{
  li.textContent = 
  switch(i){
    case 1:
       li.textContent = '1万円' + change_answer[i] + '枚';
      break;
    case 2:
       li.textContent = '5千円' + change_answer[i] + '枚';
      break;
    case 3:
       li.textContent = '千円' + change_answer[i] + '枚';
      break;
    case 4:
       li.textContent = '500円' + change_answer[i] + '枚';
      break;
    case 5:
       li.textContent = '100円' + change_answer[i] + '枚';
      break;
    case 6:
       li.textContent = '50円' + change_answer[i] + '枚';
      break;
    case 7:
       li.textContent = '10円' + change_answer[i] + '枚';
      break;
    case 8:
       li.textContent = '5円' + change_answer[i] + '枚';
      break;
    case 9:
       li.textContent = '1円' + change_answer[i] + '枚';
      break;
  }
  document.getElementById('list').appendChild(li);
}
