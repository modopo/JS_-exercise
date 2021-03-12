let obj = {
    b: 2,
    a: 1,
    c: 3,
  };

  let objKeys = Object.keys(obj);
  let upperKeys = [];
  objKeys.forEach(keys => {
      upperKeys.push(keys.toUpperCase());
  });


  console.log(upperKeys);