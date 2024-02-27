var createCounter = function(n) {
    let count =n;
    return function ()
    {
        count++;
        return count;
    }
}
// co che closure khi mot ham duoc tra boi ham con thi cac doi tuong duoc khai
// o ben trong xe duoc tham chieu den doi tuong o ham ben ngoai. tuc ham ben trong co dia chi cua ham ben ngoai.
const counter1= createCounter(10);
console.log(counter1());
