function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++) {
    const otherNumber = target - array[i]
    for(let j = i + 1; j < array.length; j++)
    if (array[j] === otherNumber) return true
  } 
  return false
}

/* 
  Write the Big O time complexity of your function here
  //has a nested iteration 
  quadratic O notation
  time complexity: O(n*2)
*/

/* 
  Add your pseudocode here


  hasTargetSum([3, 8, 12, 4, 11, 7], 10));
target - array[] = array[]
iterate through each number of the array
      
      for the current num, identify a complement that adds to the target
      iterate through the rest of the array and check if any number is our complement
      return true

      else return false


*/

/*
  Add written explanation of your solution here

  make a function "hasTargetSum" that checks if two numbers from the array add up to the target. For example, if I have an array "[1,2,3,4]" and the target is 6 I should return true because 2 and 4 add to 6. if target is 10 I should return 10. FOr each number check if there's a number that adds up to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
