// const myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("operation successful");
//     }else{
//         reject("operation failed");
//     }
// })

// myPromise
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("finally completed");
// })

// var getPromise = () => {
//   return new Promise((resolve, reject) =>{
//     console.log("i am promise")
//     reject ("success")
// })
// };

// let promise = getPromise();
// promise.catch(()=>{
// console.log("error occurred");
// })

// const getPromise = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Bill has been declared at counter");
//             reject("err");
//         }, 2000);
        
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     setTimeout(() => {
//         console.log("there are no such error in the database");
//     }, 3000);
    
// })

// promise.catch((err)=>{
//     console.log("rejected bill",err);
// })

// const getPromise = () => {
// return new Promise((resolve,reject) => {
//     setTimeout(() => {
//         console.log("Your database has been created successfully");
//         resolve("res")
//     }, 3000);
// });
// };
// let promise = getPromise();
// promise.then((res) => {
//     setTimeout(() => {
//         console.log("Your database hasn't been created successfully");
//     }, 4000);
// })
// promise.catch((err) => {
// console.log("rejected database",err);
// })

// const firstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First promise resolved!");
//     }, 1000);
//   });
  
//   firstPromise
//     .then((res) => {
//       console.log(res); // "First promise resolved!"
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("Second promise resolved!");
//         }, 1000);
//       });
//     })
//     .then((res) => {
//       console.log(res); // "Second promise resolved!"
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("network error detected here");
//     }, 2000);
// });

// myPromise.then((res) => {
// console.log(res);
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("network error are being enhanced here");
//     }, 2000);
// });
// })

// .then((res) => {
// console.log(res);
// })

// .catch((err) => {
//     console.log(err);
// });
