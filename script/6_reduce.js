(() => {
  let arr = [1, 2, 5, 3, 0, 4, 5, 6];
  let isZero = false;
  let bufer = 0;
  
  let sum = arr.reduce((accum, value) => {
    if (isZero) {
      return accum;
    } else {
      isZero = value === 0;
      return accum + value;
    }
  }, 0);
  //console.log('sum', sum);

  let elemCount = arr.reduce((counter, value) => {
    if (bufer <= 10) {

      bufer += value;
      return ++counter;
    } else {
      return counter;
    }
  }, 0);

  //console.log('counter', elemCount);

})()

