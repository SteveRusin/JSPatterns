const MySuperModule = (function () {
    // Private variable

    const userData = [];

    // public methods
    const sayHello = function (name) {
        console.log(`Hello ${name}!`);
    };

    const storeUserData = function (data) {
        return userData.push(data);
    };

    const getUserData = function () {
        return userData;
    };

    return {
        sayHello,
        storeUserData,
        getUserData
    }
})();
