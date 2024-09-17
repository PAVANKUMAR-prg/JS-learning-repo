//IIFE - stand for Imediate invoked function expression
// some cases will be there, that time we need  to execute function immediately then we can use this IIFE

// how to do that let's see--

(function pavan(){
    console.log("executing...")
})();
//if we executing multiple iife methods then put ; at end of first one , all set

(()=>{
    console.log("Unnamed IIFE executing...")
})();
