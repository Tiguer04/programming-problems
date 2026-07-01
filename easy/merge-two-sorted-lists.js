//This algorithm only works if you put arrays in the params.

var mergeTwoLists = function(list1, list2) {

  let nums = [];

  nums = [...list1, ...list2];
  
  nums.sort((a, b) => a - b);

  return nums;
  
};

console.log(mergeTwoLists([], [0]));