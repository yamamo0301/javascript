// 繰り返し処理(while)

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// 繰り返し処理(do...while)

// do{
// 処理;
// }while(条件式);

// 先にdoの処理をしてから条件式に当てはめる