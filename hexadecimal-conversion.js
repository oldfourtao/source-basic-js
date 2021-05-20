/**
 * 进制转换问题
 */

 //10进转36
 //36进制表示0-9a-z

 /**
  * 获取36进制数据结构
  * @param {*} n 
  */
 const getNum36 = function(){
    let num36 = [];
    for(let i = 0 ; i < 36 ; i++){
        if(i < 10){
            num36.push(i)
        }else {
            num36.push(String.fromCharCode(i+87))
        }
    }
 }

 const scaleHex36 = function(n){
     let arr = [];
     let num36 = getNum36();
     let rex = '';
     if(n < 0){
         rex = '-';
     }
     while(n){
         res = n % 36;
         arr.unshift(num36[res]);
         n = parseInt(n/36)
     }
     arr.unshift(rex)
     return arr.join('')
 }