
function rotate(arr, n) {
    for (let i = 0; i < n; i++)
        arr.push(arr.shift());
    return arr;
}


function buildTable() {

}


console.log(buildTable())