(() => {
  let arr = [1, -2, 3, 0, 4, -5, 6, -11];

  let sqrtArr = arr.filter(elem => elem > 0).map(elem => Math.sqrt(elem));

  //console.log(sqrtArr);
})()
