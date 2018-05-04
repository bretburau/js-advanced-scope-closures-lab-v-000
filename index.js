function produceDrivingRange(range) {
  return function(streetA, streetB) {
    distance = Math.abs(parseInt(streetA) - parseInt(streetB));    
    if(range < distance) {
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return percentage * fare;
  }
}