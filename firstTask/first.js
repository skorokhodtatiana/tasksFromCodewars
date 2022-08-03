/**Задача: при передаче в функцию какого-либо числа, выводить все числа, на которое делится передаваемое число без остатка*/
const divisors = (num) => {
	const arr = [];
	const unSuit = [];
	let i;
	for(i = 1; i <= num; i++) {
		let suit = num % i;
		suit === 0 ? arr.push(i) : unSuit.push(i);
	}
	console.log(arr);
};

divisors(16);