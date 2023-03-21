let nums = [0,0,1,1,1,2,2,3,3,4];
           // [0,1,2,3,4,2,2,3,3,4]
var removeDuplicates = function(nums) {
     let insertIndex = 1;
        for(let i = 1; i < nums.length; i++){
            
            if(nums[i - 1] != nums[i]) {                
                nums[insertIndex] = nums[i];     
                insertIndex++;
            }
        }
        for(let i = insertIndex; i < nums.length; i++) {
            nums[i] = '_'
        }
    return insertIndex;
};
console.log(removeDuplicates(nums))
console.log(nums)