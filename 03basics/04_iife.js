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


//Here lets discus about how js code executes
/*
When we run code first,
1.Global Execution Constext or Global Environment creates,wher we represents code with "this".
2.Next phase is Memory creation, all variables will be assigned to undefined,functions 
will assigned or set with their definations untill next phase that is execution phase.
3.Next phase is Execution phase where actuall values will assigne to varibles and function 
call happens,for functions the memory phase and execution phase again happens just like above one. 

need to keep in mind.
1.global execution context.
2.memory phase.
3.execution phase.
*/