// function rotate(nums: number[], k: number): void {
//   for (let i = k; i > 0; i--) {
//     for (let j = 0; j < nums.length; j++) {
//       let temp = nums[j];
//       let lastIndex = nums.length - 1;
//       nums[j] = nums[lastIndex];
//       nums[lastIndex] = temp;
//     }
//   }

//   console.log(nums);
// }

// rotate([1, 2, 3, 4, 5, 6, 7], 54944);

function rotate(nums: number[], k: number): void {
  const n = nums.length;
  k = k % n; // Сокращаем k, если оно больше длины массива
  console.log(k);

  // Вспомогательная функция для обращения части массива
  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // Обращаем весь массив
  reverse(0, n - 1);
  // Обращаем первые k элементов
  reverse(0, k - 1);
  // Обращаем оставшиеся элементы
  reverse(k, n - 1);

  console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3)
