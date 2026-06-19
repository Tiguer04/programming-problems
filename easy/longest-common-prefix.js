var longestCommonPrefix = function(strs) {
    
  if(strs.length <= 1){
    return strs[0];
  }

  let prefix = "";
  let index = 0;

  for (let i = 0; i <= strs[index].length; i++) {

    let newSection = strs[index].slice(0, i);

    if(i === 0 && !strs[index + 1].startsWith(newSection)){
      return "";
    }

    for(let j = 0; j < strs.length; j++){
    
      if(strs[j].startsWith(newSection)){
        if(j === strs.length - 1){
          prefix = newSection;
          break;
        }
      continue;
      } else{
          if(prefix.length > 0){
            break;
          } else{
            return "";
          }
        }
    }

    if(i !== 0 && !strs[index + 1].startsWith(newSection)){
      break;
    }
  }

  if(prefix.length > 0){
    if(strs.length <= 2){
      return prefix;
    } else{
      for (let i = 2; i < strs.length; i++) {
        if(!strs[i].startsWith(prefix)){
          return "";
        }
      }
    }
    return prefix;
  } else{
      return "";
  }

};

console.log(longestCommonPrefix(["dog","racecar","car"]));