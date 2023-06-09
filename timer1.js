//take command line arguments and form an array of numbers (in string value type)
const beepArray = process.argv.slice(2);
//turn numbers from string value type to number value type for accurate comparison in next step
const beepNum = beepArray.map((str) => {
  return Number(str);
});
//sort numbers in numberBeep from smallest to largest, the callback function inside is to make sure sort() compares the numerical value instead of Unicode code
const sortedBeepNum = beepNum.sort((a, b) => {
  return a - b;
});
//this console.log is here to assist visual representation of output in console as well as act as a debugger
console.log(sortedBeepNum);
//create a for loop over sortedBeepNum to find out how many beeps should happen as well as assign index to element
for (let i = 0; i < sortedBeepNum.length; i++) {
  setTimeout(() => {
    //process.stdout.write('\x07') does not work for Mac M2 system so I use visible character ' ⏰ ' instead
    process.stdout.write(' ⏰ ');
    //use sortedBeepNum[i] to pass the number of seconds in, and multiply 1000 to get miliseconds
  }, sortedBeepNum[i] * 1000);
}

//test code example: (enter in console) node timer1.js 10 3 5 15 9 
//expected output:
//[ 3, 5, 9, 10, 15 ]
// ⏰  ⏰  ⏰  ⏰  ⏰

