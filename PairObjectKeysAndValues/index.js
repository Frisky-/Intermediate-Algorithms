function whereAreYou(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var count = 0;
  for (var i = 0; i < collection.length; i++) {
    for (var j = 0; j < Object.keys(source).length; j++) {
      if (collection[i].hasOwnProperty(Object.keys(source)[j])) {
        if (collection[i][Object.keys(source)[j]] === source[Object.keys(source)[j]]) {
          count++;
          if (count === Object.keys(source).length) {
            arr.push(collection[i]);
            count = 0;
          }
        }
      } else {
        count = 0;
      }
    }
  }
  console.log(arr);
  // Only change code above this line
  return arr;
}

whereAreYou([{
  first: "Romeo",
  last: "Montague"
}, {
  first: "Mercutio",
  last: null
}, {
  first: "Tybalt",
  last: "Capulet"
}], {
  last: "Capulet"
})

whereAreYou([{
  "a": 1
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2
}], {
  "a": 1
})

whereAreYou([{
  "a": 1,
  "b": 2
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2,
  "c": 2
}], {
  "a": 1,
  "b": 2
})

whereAreYou([{
  "a": 1,
  "b": 2
}, {
  "a": 1
}, {
  "a": 1,
  "b": 2,
  "c": 2
}], {
  "a": 1,
  "c": 2
});
