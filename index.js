function receivesAFunction(cb){
    return cb();
}
function returnsANamedFunction(){
    return function returnedFunction(){};
}
function returnsAnAnonymousFunction(){
    return (function(){});
}