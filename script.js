// Solution 1
function reverse(str) {
    return str.split('').reverse().join('');
};
 
// Solution 2
// function reverse(str) {
//   let reversed = '';
//   for (let character of str) {
//   reversed = character + reversed;
//   };
//   return reversed;
// };

// Solution 3
// function reverse(str) {
//   let reversed = '';
//   for (i = 0; i < str.length; i++) {
//   reversed = str[i] + reversed;
// }
//   return reversed;
// };

// Solution 4
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   });
// }
  
console.log(reverse('talk'))