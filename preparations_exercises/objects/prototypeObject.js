let myProtoObj = {
    foo: 1,
    bar: 2,
    qux: 3
  };

  let myObj = Object.create(myProtoObj);

myObj.newstuff = 'new status';
console.log(myObj.foo);