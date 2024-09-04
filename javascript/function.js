function oldVersion()
{
    console.log("hi i am old function")
}
oldVersion()
//new version function
newversion = () =>
{
    console.log("hi i am new function")
}
newversion()
//old version function
function oldVersion2(x)
{
    return x+10;
}
console.log(oldVersion2(10))
//new version function
newversion2 = (x,y) => x+y
console.log(newversion2(35,34))