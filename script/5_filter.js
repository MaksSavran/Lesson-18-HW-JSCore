(() => {
  let arr = [1, 'string', [3, 4], 5, [6, 7]];

  let result = arr.filter(elem => { Array.isArray(elem) }
  );
  //console.log(result);
})()