// Immediately Invoked Function Expression (IIFE)
// (function declaration)();

(function invoke(){              //name iffe
    console.log("DS CONNECTED.")
})();

// global scope ke polution se problem hoti hai to jo b variables / declaration ko hata ne ke liye iife use karte hai
// immediate function execute ho jata hai iife use karne se

(()=>{
    console.log("DS CONNECTED 2.")
})();

((name)=>{
    console.log(`DS CONNECTED SUCCESFULLY ${name}`)
})("Raja")