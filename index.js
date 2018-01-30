const mySingleton = (function () {
    let instance;

    function init() {

        const privateVariable = `I'm private variable`;

        function privateMathod() {
            console.log('private method')
        }

        function publicMethod() {
            console.log('public method');
        }

        return {
            publicMethod
        }
    }

    return {
        getInstance: function () {
           return instance = instance ? instance : init();
        }
    }
})();


