// 2023-05-12
var fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')[0];
var input = fs.readFileSync("../../../예제.txt").toString().trim().split('\r\n')[0];
for (let i = 0; i < input; i++) {
    console.log(
` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     `
    );
}