const diamond = (size: number) => {
    for (let i = 1; i <= size; i++) {
       for (let s = size - 1; s >= i; s--) {
          process.stdout.write(' ');
       }
       for (let j = 1; j <= i; j++) {
          process.stdout.write('* ');
       }
       console.log();
    }

       for (let i = 1; i <= size - 1; i++) {
          for (let s = 1; s <= i; s++) {
             process.stdout.write(' ');
          }
          for (let j = i; j <= size - 1; j++) {
             process.stdout.write('* ');
          }
          console.log();
       }

 };
 export default diamond;