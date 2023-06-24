function minmax(arr){
    let obj={minm:Math.min(...arr),maxm:Math.max(...arr)}
    return obj;
}
console.log(minmax([1,2,3,5,7,8]))