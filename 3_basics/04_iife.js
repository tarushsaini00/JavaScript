//Immedieatly Invoked Function Expression (IIEF)

(function bro(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('vijy')
