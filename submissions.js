
const findSum = function(array) {
    var result = 0;
    for (var i=0; i<array.length; i++){
        result += array[i];
    }
    return result;
  };

  
  const findFrequency = function(array) {
    var count = {};
    for (var i=0; i<array.length; i++){
        if (count[array[i]] === undefined){
            count[array[i]] = 1;
        }else{
            count[array[i]]++;
        }
        console.log(count)
    }
    result = {most: array[0], least: array[0]};
    for (var key in count){
        if (count[key] > count[result.most]){
            result.most = key;
        }
        if (count[key] < count[result.least]){
            result.least = key;
        }
    }
    return result
  };

  const isPalindrome = function(str) {
    var string = str.toLowerCase();
    var l = 0;
    var r = string.length - 1;
    while (l <= r){
        if (string[l] === string[r]){
            l++;
            r--;
        }else{
          return false
        }
    }
    if (string[l] === string[r]){
        return true;
    }else{
        return false;
    }
  };

  const largestPair = function(array) {
    var l = 0;
    var r = 1;
    var result = 0;
    while(r < array.length){
      if (array[l] * array[r] > result){
        result = array[l] * array[r];
      }
      l++;
      r++;
    }
    return result;
  };
console.log(largestPair([5, 1, 2, 3, 12, 4])); // 6
console.log(largestPair([9, 5, 10, 2, 24, -1, -48])) // 50
  
  const removeParenth = function(str) {
    var start = 0;
    var end = 0;
    for (var i=0; i<str.length; i++){
      if (str[i] === '('){
        start = i;
      }
      if (str[i] === ')'){
        end = i + 1
        break;
      }
    }
    str = str.slice(0,start) + str.slice(end, str.length);
    return str;
  };
  
  
  const scoreScrabble = function(str) {
    const keys1 = ['a', 'e', 'i', 'o','u', 'l', 'n', 'r', 's', 't'];
    const keys2 = ['d', 'g'];
    const keys3 = ['b', 'c', 'm', 'p'];
    const keys4 = ['f', 'h', 'v', 'w', 'y'];
    const keys5 = ['k'];
    const keys6 = ['j', 'x'];
    const keys7 = ['q', 'z'];
    const obj = {
  ...Object.fromEntries(
    keys1.map(key => [key, 1])
  ),
  ...Object.fromEntries(
    keys2.map(key => [key, 2])
  ),
  ...Object.fromEntries(
    keys3.map(key => [key, 3])
  ),
  ...Object.fromEntries(
    keys4.map(key => [key, 4])
  ),
  ...Object.fromEntries(
    keys5.map(key => [key, 5])
  ),
  ...Object.fromEntries(
    keys6.map(key => [key, 8])
  ),
  ...Object.fromEntries(
    keys7.map(key => [key, 10])
  )
}; 
  var result = 0;
  for (var i=0; i<str.length; i++){
    result += obj[str[i]];
  }
  return result
  };
