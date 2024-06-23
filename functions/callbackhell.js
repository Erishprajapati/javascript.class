// function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 3000);
// }
function getData(dataId,getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
        getNextData();
        }
    }, 2000);
}
getData(1,()=>{
    getData(2)
});