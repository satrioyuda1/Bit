hargaSaham = (saham) => {
	let profit = [];
	let maxProfit, profitHarga;
	let hargaBeli, hargaJual;
	let skip = 0;
	for (i = 0; i < saham.length; i++) {
		for (j = i + 1; j < saham.length; j++) {
			hargaBeli = saham[i];
			hargaJual = saham[j];
			if (hargaBeli < hargaJual) {
				profitHarga = hargaJual - hargaBeli;
				profit.push(profitHarga);
			} else if (hargaBeli > hargaJual) {
				skip += 1;
			}
		}
	}
	if (profit.length < 1) {
		return 'harga saham selalu turun';
	}
	maxProfit = Math.max(...profit);
	return maxProfit;
};

console.log(hargaSaham([ 5, 6, 15, 3, 10, 22, 15 ]));
console.log(hargaSaham([ 10, 15, 8, 7, 14 ]));
console.log(hargaSaham([ 100, 90, 80, 75, 65 ]));
console.log(hargaSaham([ 100, 90, 80, 65, 75 ]));
