// Imediately Invoked function Expressions

(function robot() {
    console.log(`DB connected`)
})();

// () => first parenthesis is where we're going to write the definition of the function
// () => second () execution call
// Always use a semicolon to terminate a function because, when invoked, it is not always clear where the context should end.

((name) =>{
    console.log(`DB connected ${name}`);
})('moron');

