//-----------------------spread operator=======================
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr, 5, 6, 7, 8, 9]; //spread operator to add in old array to the new one
let obj={
    name="ansh",
    age=23
}
let newobj={
    ...obj,
    mind="jenius"//here thsi new object has all the members of the old object of name and age

}
//---------------------rest operator
