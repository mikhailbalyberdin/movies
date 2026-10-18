// // Callbacks
// function loadscript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = function() {callback(null, script)};
//     script.onerror = function() {callback(new Error(`Не удалось загрузить ${src}`))}
//     document.body.append(script);
// }

// loadscript('./src/script.js', function(error, script) {
//     if (error) {
//         console.log(error);
//     } else {
//         candyDealer(4, 5)
//     }
// })

// // Promises

// // let promise = new Promise(function(resolve, reject) {
// //     setTimeout(() => resolve("done"), 1000)
// // })

// // promise.then(
// //     function(result) {
// //         alert(result);
// //         let promise2 = new Promise(function(resolve, reject) {
// //             setTimeout(() => reject(new Error("Whoops")), 1000);
// //         })
// //         promise2.then(null, (error) => {alert(error)
// //             let promise3 = new Promise(function(resolve, reject) {
// //             setTimeout(() => reject(new Error("Ahhh")), 1000)
// //         })
// //         promise.finally(() => {alert("Готов к труду и обороне!")})
// //         promise3.catch((error) => alert("Несмотря на отклонённый промис!"));
// //         })
// //     },
// //     function(error) {
// //         alert(error);
// //     }
// // )

// function loadScriptAgain(src) {
//     return new Promise(function(resolve, reject) {
//         const script  = document.createElement('script');
//         script.src = src;
//         script.onload = () => {resolve(script)}
//         script.onerror = () => {alert(new Error("Oh"))}

//         document.body.append(script);
//     })
// }

// let promise = loadScriptAgain('./src/script.js')

// promise.then(
//     (result) => {candyDealer(3, 4)},
//     null
// )

// // Async/await

// async function f() {
//     return "Hi";
// }

// f().then((result) => console.log(result));

// async function g() {
//     let promise = new Promise(function(resolve, reject) {
//         resolve(1);
//     })
//     console.log(await promise);
// }

// g()

