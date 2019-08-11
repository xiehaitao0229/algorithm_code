/**
 * 69 x的平方根   难度：简单
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function(x) {
//   return Math.floor(Math.sqrt(x))  
// };

//  使用二分法
var mySqrt =  function(x){
     //注：在中间过程计算平方的时候可能出现溢出，所以用long long。
     let i=0;
     let j=x/2+1;//对于一个非负数n，它的平方根不会大于（n/2+1）
     while(i<=j)
     {
        let mid=Math.floor((i+j)/2);
        let res=mid*mid;
         if(res==x) return mid;
         else if(res<x) i=mid+1;
         else j=mid-1;
     }
     return j;
}

console.log(mySqrt(8))