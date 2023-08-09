function findMostRepeatedElements(arr) {
    let maxFrequency = 0;
    const mostRepeatedElements = [];
  
    for (let i = 0; i < arr.length; i++) {
      let frequency = 1;
  
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]){
          frequency++;
        }
      }
  
      if (frequency > maxFrequency) {
        maxFrequency = frequency;
        mostRepeatedElements.length = 0; // Clear the array
        mostRepeatedElements.push(arr[i]);
      } else if (frequency === maxFrequency) {
        mostRepeatedElements.push(arr[i]);
      }
    }
  
    return mostRepeatedElements;
  }
  
  // Example usage:
  const array = [1, 2, 3, 2, 4, 3, 5, 2];
  const mostRepeated = findMostRepeatedElements(array);
  console.log("Most repeated elements:", mostRepeated); // Output: [2, 3]
  