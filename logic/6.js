angkaAjaib = (number) => {
	let angkaAjaib;
	const kap = 6174;
	for (i = 0; angkaAjaib !== kap; i++) {
		let numArray = number.toString(10).split('');
		let angkaAsc = numArray.sort((a, b) => a - b);
		let angkaDesc = numArray.slice().sort((a, b) => b - a);
		let numAsc = '';
		let numDesc = '';
		angkaAsc.map((x) => (numAsc += x));
		angkaDesc.map((x) => (numDesc += x));
		numAsc = parseInt(numAsc);
		numDesc = parseInt(numDesc);
		angkaAjaib = numDesc - numAsc;
		number = angkaAjaib;
	}

	return i;
};

console.log(angkaAjaib(3124));
console.log(angkaAjaib(2412));
