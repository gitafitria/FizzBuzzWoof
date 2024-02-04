// Function to generate the output for a given number
function generateOutput(number) {
    // initial the digits
    const digitList = [3, 5, 7];

    // initial the count result for storing each digit count
    let countResult = {
        3: 0,
        5: 0,
        7: 0,
    }

    // Function to increment the countResult if a number contains a specific digit
    function incrementOnContainsDigit(number, digit, countResult) {
        // get number of digit found in the number
        const containsNum = String(number).split('').filter((x) => x == digit).length;
        // increment the digit count in the countResult with length of digit found
        countResult[`${digit}`] = countResult[`${digit}`] + containsNum;
        return countResult;
    }

    // Function to increment the countResult if a number is divisible by digit
    function incrementOnDivisibleBy(number, digit, countResult) {
        if (number % digit === 0) {
            // increment the count if number is divisible by digit
            countResult[`${digit}`] = countResult[`${digit}`] + 1;
        }
        return countResult;
    }

    // populate Fizz / Buzz / Woof based on the countResult
    function generateString(number, countResult) {
        // init text value for each digit
        const text = {
            3: "Fizz",
            5: "Buzz",
            7: "Woof",
        }
        
        let output = "";
        // Loop through the digits to populate output text
        // example result:
        // - if countResult for 3 is 2, then will populate FizzFizz
        // - if countResult for 5 is 4, then will populate BuzzBuzzBuzzBuzz
        // - if countResult for 7 is 1, then will populate Woof
        for (const digit of digitList) {
            // Repeat the corresponding text for the current digit based on its count in countResult
            output += `${text[digit]} `.repeat(countResult[`${digit}`]);
        }
        
        if (!output) return number; // return number if value of output is blank
        return output;
    }

    // Iterate the digitList to get count result by checking divisible by digit & contains digit
    for (const digit of digitList) {
        countResult = incrementOnDivisibleBy(number, digit, countResult);
        countResult = incrementOnContainsDigit(number, digit, countResult);
    }

    return generateString(number, countResult)
}

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(generateOutput(i));
}