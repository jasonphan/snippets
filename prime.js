/**
 * Checks if a given number is prime.
 * @param {Number} n
 * @returns {Boolean} Returns true if number n is prime, false otherwise.
 */
function isPrime(n) {
	let x = Math.floor(Math.sqrt(n));

	for (let i = 2; i <= x; i++) {
		if (n % i === 0) return false;
	}

	return n !== 1;
}