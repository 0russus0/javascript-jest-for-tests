function addition(a, b) {
	return a + b;
}

function soustraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function verifString(string, substring) {
	let result = string.includes(substring);
	if (result == true) {
		return true;
	} else {
		return false;
	}
}

function reverseString(str, rts) {
	rts = str.split('').reverse().join('');
	if (str != rts) {
		return false;
	} else {
		return true;
	}
}

function capitalized(lowercase, capitalize) {
	capitalize = lowercase.toUpperCase();
	if (capitalize === lowercase) {
		return false;
	} else {
		return true;
	}
}

function fToC(fahrenheit) {
	let fTemp = fahrenheit;
	let fToCel = ((fTemp - 32) * 5) / 9;
	return fToCel;
}

module.exports = {
	addition,
	soustraction,
	multiplication,
	verifString,
	reverseString,
	capitalized,
	fToC,
};
