 /*
          console.log("rishi!")
          console.warn("warning!")
          console.error("error!")
          console.table([{name: "MAHA SIVA RISHI", age: 100 , professionalName: "Rishi"},{name: "GSG", age: 98, professionalName: "Priyan"}]);
          
          eval("let a=5; console.log(\"Hello\"); console.log(a);");
// strick mode  -- int top use "use strick"
let x= 3.14
console.log(x)
//JSON->js object notation
let obj={name: "sanjay"};
let str =JSON.stringify(obj);
console.log(str);
let back=JSON.parse(str)
console.log(back)
localStorage.setItem("name", "Alice");
localStorage.setItem("age", "30");
console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");

sessionStorage.setItem("sessionName", "Bob");
console.log(sessionStorage.getItem("sessionName"));
console.getItem("sessionName");
sessionStorage.removeItem("sessionName"); 

// Using a Promise
let promise = new Promise((resolve, reject) => {
    let=true;
    setTimeout(() => {resolve("hello")}, 10000);
});
promise.then(res => console.log(res)).catch(err => console.error(err));


//closure
function outer(){
    let name = "JS";
    return function inner() {
        console.log(name);
    };
}
let x = document.getElementById("DOM");
let body = document.querySelector("div");
x.style.color = "red";
x.innerText = "Hello Rishi!";

let newelement = document.createElement("h1");
newelement.innerText = "Hello World!";
x.appendChild(newelement);
setTimeout(() => {
    x.removeChild(newelement);    
},1000);
//divClass.removeChild();*/
let obj = document.getElementById("DOM");
obj.addEventListener("click", () => {
    let head_obj = document.getElementById("head");
    console.log(head_obj);
    head_obj.style.color = "blue";
    head_obj.innerText = "Welcome Rishi!";});

