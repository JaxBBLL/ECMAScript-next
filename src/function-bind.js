//document.querySelectorAll returns a NodeList element which is not a plain array,
//so you normally can't use the map function on it,
//and have to use it this way: Array.prototype.map.call(document.querySelectorAll(...), node => { ... }).
//The above code using the :: will work because it is equivalent to:

const { map, filter } = Array.prototype;

export let url = document
  .querySelectorAll("a")
  ::map(node => node.href)
  ::filter(href => href.substring(0, 5) === "https");
