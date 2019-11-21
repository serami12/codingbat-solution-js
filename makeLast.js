function makeLast(nums) {
  let newArr = [];
  for (let i = 0; i < (nums.length * 2) - 1; i++) {
    newArr.push(0)
  }
  let lastEle = nums[nums.length - 1]

  newArr.push(lastEle)
  return newArr
}