(() => {
  let arr = [
    { name: 'Ivan', country: 'Ukraine' },

    { name: 'Petro', country: 'Ukraine' },

    { name: 'Miguel', country: 'Cuba' }
  ];

  let check = arr.some(item => {
    return item.country.toLowerCase() === 'ukraine';
  });

  //console.log(check);
})()
