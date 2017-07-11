var input;

document.getElementById('form').onsubmit = function(){
  input = document.getElementById('form').input.value;
}

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

for(i = 0; i < 9; i++)
{
  var li = document.createElement('li');
  
  if(change_answer[i] > 0)
    continue;
  
  if(i == 0)
    li.textContent = '1万円\t' + change_answer[i] + '枚';   
  else if(i == 1)
    li.textContent = '5千円\t' + change_answer[i] + '枚';
  else if(i == 2)
    li.textContent = '千円\t' + change_answer[i] + '枚';
  else if(i == 3)
    li.textContent = '500円\t' + change_answer[i] + '枚';
  else if(i == 4)
   li.textContent = '100円\t' + change_answer[i] + '枚';
  else if(i == 5)
   li.textContent = '50円\t' + change_answer[i] + '枚';
  else if(i == 6)
   li.textContent = '10円\t' + change_answer[i] + '枚';
  else if(i == 7)
   li.textContent = '5円\t' + change_answer[i] + '枚';
  else
   li.textContent = '1円\t' + change_answer[i] + '枚';
  
  document.getElementById('list').appendChild(li);
}
