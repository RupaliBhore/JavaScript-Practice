// pattren - 1
/*
let n = 5;
for (let i = 1; i <= n; i++) {
	let str = '';
	let count = 1;
	for (let j = 1; j <= 2 * n; ++j) {
		if (i + j >= n + 1 && (i >= j - n + 1)) {
			// Add a space after each number
			str += count.toString() + '  ';
			count++;
		} else {
			// Add two spaces for the gap
			str += '   ';
		}
	}

	console.log(str);
}
	*/



	//pattren - 2
	/*
	let n = 5;
	for (let i = 1; i <= n; i++) {
		let str = '';
		let count = 1;
		for (let j = 1; j <= n; ++j) {
			if (i + j >= 1 + n && j <= n) {
				// Add a space after each number
				str += count.toString() + ' ';
				count += 1;
			} else {
				// Add two spaces for the gap
				str += ' ';
			}
		}
	
		console.log(str);
	};
	for (let i = n - 1; i >= 1; i--) {
		let str = '';
		let count = 1;
		for (let j = 1; j <= n; ++j) {
			if (i + j >= 1 + n && j <= n) {
				// Add a space after each number
				str += count.toString() + ' ';
				count += 1;
			} else {
				// Add two spaces for the gap
				str += ' ';
			}
		}
		console.log(str);
	};
	
	*/

   
	// pattren - 2
var str1 = " ";
var h = 1;
for (var x = 1; x <= 5; x++) {
  str = "";
  str1 = "";
  for (var y = x; y <= 4; y++) {
    str1 += "  ";
  }
  for (var z = 1; z <= x; z++)
    {
      str = str + z + " ";
    }
    console.log(str1 + str + "\n");
    h = h + 2;
  
}
for (var i = 5; i >= 1; i--) {
  str = "";
  str1 = "";
  for (var j = 5; j >= i; j--) {
    str1 += "  ";
  }

  for (var k = 1; k <= i - 1; k++) {
    str = str + k + " ";
  }
  console.log(str1 + str + "\n");
}









	//pattren -3 
	/*
	let n = 5;
for (let i = 1; i <= n; i++) {
	let str = "";
	let count = 1; // Add numbers
	for (let k = 1; k <= i; k++) {
		str = count.toString() + " " + str;
		count += 1;
	}
	// Add spaces after numbers
	for (let j = i; j < n; j++) {
		str += " ";
	}
	console.log(str);
}
for (let i = n - 1; i >= 1; i--) {
	let str = "";
	let count = 1;
	// Add numbers
	for (let k = 1; k <= i; k++) {
		str = count.toString() + " " + str;
		count += 1;
	}
	// Add spaces after numbers
	for (let j = i; j < n; j++) {
		str += " ";
	}
	console.log(str);
};
*/

//patrren -4
/*
let n = 5;
for (let i = n; i >= 1; i--) {
	let str = '';
	let count = 1;
	for (let j = 1; j <= 2 * n; ++j) {
		if (i + j >= n + 1 && (i >= j - n + 1)) {
			// Add a space after each number
			str += count.toString() + ' ';
			count++;
		} else {
			// Add two spaces for the gap
			str += '  ';
		}
	}

	console.log(str);
};
*/


























