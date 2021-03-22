let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

  function contains(place, list) {
      for (let index = 0; index < list.length; index++) {
          if (place === list[index]) {
              return true;
          }
      }
      
      return false;
  };

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false