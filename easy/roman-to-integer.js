
var romanToInt = function(s) {
    
    const map = new Map();

    map.set('I', 1); // O(1)
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
  
    let separated = s.split("");

    let nums = separated.map((simbol) =>{ //O(n)
      return map.get(simbol);
    })

    let translated = [];

    for(let i = 0; i < nums.length; i++){

      let subs = nums[i + 1] - nums[i];

      if(subs > 0){

        translated.push(subs);
        nums.splice(i + 1, 1);

      } else{
        translated.push(nums[i]);
      }

    }

    let I = 0;
    let X = 0;
    let C = 0;
    let M = 0;

    for(let i = 0; i < translated.length - 1; i++){

      if(translated[i] == translated[i + 1] && [5, 50, 500].includes(translated[i])){
        return "You cannot use V, L or D twice in a row";
      } else if(translated[i] === 1 && translated[i + 1] === 1){

        I++;

      } else if(translated[i] === 10 && translated[i + 1] === 10){
        X++;
      } else if(translated[i] === 100 && translated[i + 1] === 100){
        C++;
      } else if(translated[i] === 1000 && translated[i + 1] === 1000){
        M++;
      }

      if(I > 2 || X > 2 || C > 2 || M > 2){
        return "You cannot use I, X, C or M more than three times in a row"
      }


    }

    const sum = translated.reduce((acc, n) => acc + n, 0);

    if(sum > 3999){
      return "There are not roman numbers above 3999";
    }

    return sum;

};

console.log(romanToInt("XLIX"));
