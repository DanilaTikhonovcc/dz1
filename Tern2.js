function manyChecksTF() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let result ='';

  if (a > 10) {
    result += 'a is bigger than 10';
  } else {
    result += 'a is less than or equal to 10 ';
    if (a === 5) {
      result += 'an example of a special case';
    }
  }

  if (a === 15) {
    result += 'but a is not 15';
  }

  if (a > 5) {
    result += ' and a is greater than 5';
  } else {
    result += 'and a is less than or equal to 5 ';
  }

  if (a % 2) {
    result += ' and a is odd';
  } else {
    result += ' and a is even ';
  }

  console.log(result);
  return result;
}
manyChecksTF();



function manyChecksSw() {
  let a = Math.floor(Math.random() * 20) + 1;
  console.log(`a = ${a}`);
  let result = '';

  switch (true) {
    case a > 10:
      result += 'a is bigger than 10';
      break;
    default:
      result += 'a is less than or equal to 10 ';
      switch (a) {
        case 5:
          result += 'an example of a special case';
          break;
      }
  }

  switch (a) {
    case 15:
      result += 'but a is not 15';
      break;
  }

  switch (true) {
    case a > 5:
      result += 'and a is greater than 5';
      break;
    default:
      result += 'and a is less than or equal to 5 ';
  }

  switch (true) {
    case a % 2 !== 0:
      result += ' and a is odd';
      break;
    default:
      result += ' and a is even ';
  }

  console.log(result);
  return result;
}

manyChecksSw();

// условие с условным (тернарным) оператором перевести в if...else И switch()
// результат выводить в консоль, с пощью console.log()