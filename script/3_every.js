(() => {
  let arr = [
    { name: 'Ivan', country: 'Ukraine' },

    { name: 'Petro', country: 'Ukraine' },

    { name: 'Miguel', country: 'Cuba' }
  ];

  let check = arr.every(item => {
    return item.country.toLowerCase() === 'ukraine';
  });

  //console.log(check);
})()
