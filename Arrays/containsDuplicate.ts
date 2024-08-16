function containsDuplicate(nums: number[]): boolean {
  const originalNums = new Set<number>();

  for (const value of nums) {
    if (originalNums.has(value)) {
      return true;
    }

    originalNums.add(value);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 2, 3, 1]));

// Or another good variant

function containsDuplicateGoodVariant(nums: number[]): boolean {
  const numSet = new Set(nums);

  if (numSet.size == nums.length) return false;
  else return true;
}
