let numbers = [123, 123, 3213, 5153, 3251, 53252, 6, 623, 5234];

function findminodd(arr) {
  let minodd = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minodd && arr[i] % 2 == 1) {
    }
  }

  return minodd;
}
