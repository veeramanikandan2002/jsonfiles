let date1= new Date("June 20, 2019");
let date2=new Date("June 10, 2019");

function getDate(start,end){
    let diffdate= Math.abs(end-start);
    let setDate=diffdate/(24*60*60*1000);
    return setDate;
}
console.log("Difference Between The Date="+getDate(date1,date2));