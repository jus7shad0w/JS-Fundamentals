// Write a function that manipulates an array of numbers.  
// • Add {number}: add a number to the end of the array 
// • Remove {number}: remove all occurrences of a particular number from the array 
// • RemoveAt {index}: removes number at a given index 
// • Insert {number} {index}: inserts a number at a given index 
// Note: All the indices will be valid! 
// The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every 
// other command you receive will also be a string. 
// The output is the manipulated array printed on the console on a single line, separated by space. 
function arrayManipulator(input) {
    let newArr = input.shift().split(' ').map(Number);

    for (let command of input) {
        let [action, num, index] = command.split(' ').map(x => isNaN(x) ? x : Number(x));

        if (action === 'Add') {
            newArr.push(num);
        } else if (action === 'Remove') {
            newArr = newArr.filter(x => x !== num);
        } else if (action === 'RemoveAt') {
            newArr.splice(num, 1);
        } else if (action === 'Insert') {
            newArr.splice(index, 0, num);
        }
    }
    console.log(newArr.join(' '));
}
arrayManipulator(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
arrayManipulator(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2']);
