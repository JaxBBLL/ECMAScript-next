export function total(...args) {
  return args.reduce((prev, res) => prev + res);
}

function _total() {
	/*
		1.arguments在函数内是函数参数对象的集合。是类数组对象，有length属性，可以用for遍历，但不能用数组的方法。
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			    args[_key] = arguments[_key];
			  }
		2.类数组对象先转为数组后才能用数组的方法：
			Array.prototype.slice.call(arguments) or [].slice.call(arguments)
	*/
	var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(prev, res) {
    return prev + res;
  });
}

