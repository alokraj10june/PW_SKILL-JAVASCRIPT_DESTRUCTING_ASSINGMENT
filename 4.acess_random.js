function random(arr){
    let [first,second, , , ,last]=arr;
    return new Array(first,second,last);
}

console.log(random([1,2,3,4,5,6,7]))