const Palindromic = (x) => {
	const pal = parseInt(x.toString().split('').reverse().join(''));

	if (pal === x) return true;
	else return false;
};
const PalindromicLargest = (x) => {
	let maxrange = 0;
	if (x === 1) {
		const x = 1;
		const y = 1;
		maxrange = 9;
	} else if (x === 2) {
		const x = 10;
		const y = 10;
		maxrange = 99;
	} else if (x === 3) {
		const x = 100;
		const y = 100;
		maxrange = 999;
	} else if (x === 4) {
		const x = 1000;
		const y = 1000;
		maxrange = 9990;
	} else {
		return 'max input 4';
	}
	let product,
		max = 0;

	for (x; x <= maxrange; x++) {
		for (y = x; y <= maxrange; y++) {
			product = x * y;
			if (Palindromic(product)) {
				if (max < product) {
					max = product;
					console.log(x + '*' + y + '=' + product);
				}
			}
		}
	}
};
PalindromicLargest(2);
