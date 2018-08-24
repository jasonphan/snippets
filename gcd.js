/**
 * Calculates the gcd of 2 numbers using the Euclidean Algorithm.
 * @param {Number} x
 * @param {Number} y
 * @returns {Number} Returns the gcd of x and y.
 */
function gcd(x, y) {
	let max, min, remainder;

	max = Math.abs(Math.max(x, y));
	min = Math.abs(Math.min(x, y));
	remainder = max % min;

	if (x === 0 && y === 0) return undefined;
	else if (x === 0 || y === 0) return max;

	console.log(`${max} = (${min} * ${Math.floor(max / min)}) + ${remainder}`);

	if (remainder === 0) return min;
	else if (remainder === 1) return 1;
	else return gcd(min, remainder);
}