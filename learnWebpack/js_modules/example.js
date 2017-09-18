//This is a simplified example of what webpack is doing

const myModules = [
	function() {
		const sum = (a, b) => a + b;
		return sum;
	},
	function() {
		const sum = myModules[0]();
		const total = sum(5,10);
		console.log(total)
	}
]

const entryPointIndex = 1;
myModules[entryPointIndex]();