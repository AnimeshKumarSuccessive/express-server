function createDimondShape(size){
    for(var i=1;i<=size;i++){
       for(var s=size-1;s>=i;s--){
          process.stdout.write(" ");
       }
       for(var j=1;j<=i;j++){
          process.stdout.write("* ")
       }
       console.log();
    }
    if(i==size+1){
       for(var i=1;i<=size-1;i++){
          for(var s=1;s<=i;s++){
             process.stdout.write(" ");
          }
          for(j=i;j<=size-1;j++){
             process.stdout.write("* ");
          }
          console.log();
       }
    }
 }
 const size = process.argv.slice(2);
 createDimondShape(5);
 

 //process.stdout.write