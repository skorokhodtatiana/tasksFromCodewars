/**Задача: при передаче в функцию какого-либо числа, выводить все числа, на которое делится передаваемое число без остатка*/
function divisors(integer) {
	const arr = [];
	  const unSuit = [];
	  let i;
	  for(i = 2; i < integer; i++) {
		  let suit = integer % i;
		  suit === 0 ? arr.push(i) : '';
	 
	  }
	  arr.length === 0 ? console.log(`${integer} is prime`) : console.log(arr);
  };

divisors(15);