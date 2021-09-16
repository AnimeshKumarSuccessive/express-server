const equilateral = (n: number) => {
// const n = 10;
let str: string = '';
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    str += ' ';
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    str += '*';
  }
  str += '\n';
}
console.log(str);
};
export default equilateral;