var romanToInt = function (s) {
  if (/IL|IC|ID|IM|XD|XM/.test(s)) {
    return "Pattern no allowed";
  }

  const map = new Map();

  map.set("I", 1); // O(1)
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);

  let separated = s.split("");

  let nums = separated.map((simbol) => {
    //O(n)
    return map.get(simbol);
  });

  let I = 0;
  let V = 0;
  let X = 0;
  let L = 0;
  let C = 0;
  let D = 0;
  let M = 0;

  for (let i = 0; i < nums.length; i++) {
    //O(n)

    if (nums[i] == nums[i + 1] && [5, 50, 500].includes(nums[i])) {
      return "You cannot use V, L or D twice in a row";
    } else if (nums[i] === 1 && nums[i + 1] === 1) {
      I++;
    } else if (nums[i] === 10 && nums[i + 1] === 10) {
      X++;
    } else if (nums[i] === 100 && nums[i + 1] === 100) {
      C++;
    } else if (nums[i] === 1000 && nums[i + 1] === 1000) {
      M++;
    } else if (nums[i] === 5) {
      V++;
    } else if (nums[i] === 50) {
      L++;
    } else if (nums[i] === 500) {
      D++;
    }

    if (I > 2 || X > 2 || C > 2 || M > 2) {
      return "You cannot use I, X, C or M more than three times in a row";
    }

    if (V > 1 || L > 1 || D > 1) {
      return "There cannot be V, L or D twice in a roman number";
    }
  }

  let translated = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    //O(n)

    if (nums[i] > nums[i - 1]) {
      if (nums[i - 1] === 5 || nums[i - 1] === 50 || nums[i - 1] === 500) {
        return "V, L or D cannot be substracted";
      }

      translated.push(nums[i] - nums[i - 1]);
      i--;
    } else {
      translated.push(nums[i]);
    }
  }

  const sum = translated.reduce((acc, n) => acc + n, 0);

  if (sum > 3999) {
    return "There are not roman numbers above 3999";
  }

  return sum;
};

console.log(romanToInt("XVL"));
