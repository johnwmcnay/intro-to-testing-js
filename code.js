// helloWorld function 
const helloWorld = () => {
    return "Hello, World!";
}

const sayHello = name => {
    if (typeof(name) === "string" && name !== '' && isNaN(name))
        return "Hello, " + name + "!";
    return "Hello, World!"
}