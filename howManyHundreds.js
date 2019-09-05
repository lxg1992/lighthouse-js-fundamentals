const howManyHundreds = function(num){
  let count = 0;

  while (num >= 100){
    num -= 100;
    count++;
  }

  return count;
}

