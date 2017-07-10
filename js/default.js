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
      '1万円'
      break;
    case 2:
      '5千円'
      break;
    case 3:
      '千円'
      break;
    case 4:
      '500円'
      break;
    case 5:
      '100円'
      break;
    case 6:
      '50円'
      break;
    case 7:
      '10円'
      break;
    case 8:
      '5円'
      break;
    case 9:
      '1円'
      break;
  }
  + change_answer[0] + '枚';
  document.getElementById('list').appendChild(li);
}
