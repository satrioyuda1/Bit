matching = (input) => {
	let arr = [ 'pro', 'gram', 'merit', 'program', 'merit', 'it', 'programmer' ];
	let output = [];
	let output2 = [];
	for (let x = 0; x <= input.length; x++) {
		if (arr.includes(input.slice(0, x))) {
			output.push(input.slice(0, x));
			let z = x;
			for (let y = z; y <= input.length; y++) {
				if (!arr.includes(input.slice(z, y))) {
					continue;
				}
				output2.push(input.slice(z, y));
				z = y;
			}
		}
	}
	let hasil = output.concat(output2);
	if (hasil.length < 1) {
		return 'no way';
	} else {
		return hasil.filter((item, index) => {
			return hasil.indexOf(item) === index;
		});
	}
};
console.log(matching('program'));
console.log(matching('programit'));
console.log(matching('programmerit'));
console.log(matching('programlala'));
console.log(matching('proletarian'));
console.log(matching('algoritma'));
