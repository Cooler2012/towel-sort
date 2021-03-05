
// You should implement your task here.

module.exports = function towelSort (matrix) {
  Array.isArray(matrix)? matrix = matrix : matrix = [];
  let array =[];
  for (let i = 0; i < matrix.length; i++) {
    let item = matrix[i];
    if(i % 2 !== 0){
      item = item.reverse()
    }
    array.push(...item);
    
  }
   
  return array
}
