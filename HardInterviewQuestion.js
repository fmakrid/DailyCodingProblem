const array1 = [10, 15, 30];
const array2 = [12, 15, 20];
const array3 = [17, 20, 32];
const mergedArray = array1.concat(array2, array3);
console.log(mergedArray);

for (let i = 0; i < mergedArray.length - 1; i++) {
  for (let j = 0; j < mergedArray.length - 1; j++) {
    if (mergedArray[j] > mergedArray[j + 1]) {
      let temp = mergedArray[j];
      mergedArray[j] = mergedArray[j + 1];
      mergedArray[j + 1] = temp;
    }
  }
}

console.log(mergedArray);
