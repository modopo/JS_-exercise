let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

vocabulary.forEach( nested => {
    nested.forEach( word => {
        console.log(word)
    });
});
