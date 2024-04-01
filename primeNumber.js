#!/usr/bin/env node

// Helper function to check if a number is prime
const isPrime = num => {
    // Prime numbers must be greater than 1
    if (num <= 1) return false;
    
    // 2 and 3 are prime
    if (num <= 3) return true;
    
    // Eliminate multiples of 2 and 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check divisibility up to the square root of the number
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Function to filter prime numbers from an array
const filterPrimes = arr => arr.filter(num => isPrime(num));

// Main function
const main = () => {
    // Parse command-line arguments
    const args = process.argv.slice(2);
    
    // Convert arguments to numbers
    const numbers = args.map(Number);
    
    // Filter prime numbers
    const primes = filterPrimes(numbers);
    
    // Output prime numbers
    console.log(primes);
}

// Run main function
main();
