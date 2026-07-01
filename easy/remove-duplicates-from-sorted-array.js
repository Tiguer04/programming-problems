var removeDuplicates = function(nums) {
  
  let k = 1; // El primer elemento siempre es único.
                    // --> Una regla del ejercicio es que el arreglo debe 
                    //      contener al menos 1 elemento.

  for (let i = 1; i < nums.length; i++) {

    if(nums[i] !== nums[i - 1]){
      nums[k] = nums[i];
      k++;
    } else{
      continue;
    }

  }

  return k; // Se retorna la cantidad de números unicos.

};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));