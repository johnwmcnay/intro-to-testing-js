// helloWorld function 
const helloWorld = () => {
    return "Hello, World!";
}

const sayHello = name => {
    if (typeof(name) === "string" && isNaN(name))
        return "Hello, " + name + "!";
    return "Hello, World!"
}

const isFive = num => {

    if (num === 5 || num === "5")
        return true;

    return false;
}

const isEven = num => {

    if (typeof num === "boolean")
        return false;

    const remainder = num % 2;

    if (! isNaN(remainder)) {
        return remainder === 0;
    }

    return false;
}