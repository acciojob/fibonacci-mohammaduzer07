function fibonacci(num) {
// your code here
	if(num == 2){
		return 1;
	}
	if(num == 1){
		return 0;
	}
	int fib = fibonacci(num-1) + fibonacci(num-2);
	return fib;
}


module.exports = fibonacci;
