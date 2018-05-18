// a independent controller
var BudgetController = (function(){
    var a = 23

    var add = function(x) {
        return x + a
    }

    return {
        publicTest: function(b){
            return add(b)
        }
    }
})()


// another independent controller
var UIController = (function(){
    // some code here
})()

// to link between above two controllers
var Controller = (function(BdgtCtrl, UICtrl){
    // outside has access to publicTest function but not add function and variable a inside BudgetController

    x = BdgtCtrl.publicTest(5)
    console.log(x)

})(BudgetController, UIController)