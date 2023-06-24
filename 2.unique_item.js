function unique(arr){
    return new Set(arr);
}
let arr=[1,1,2,3,4,2,3];
console.log(unique(arr));
// output:---Set(4) { 1, 2, 3, 4 }