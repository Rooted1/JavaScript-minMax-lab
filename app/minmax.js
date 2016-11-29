function findMinMax (arr){
    var result = [];
    var min = arr[0], 
        max = arr[0];

    for(var i = 0; i <= arr.length; i++){
      
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
          max = arr[i];
        }
    }
    
    if (max == min){
        result.push(min);
    }
    else {
        result.push(min, max);
    }

    return result;
  }

  module.exports = findMinMax;