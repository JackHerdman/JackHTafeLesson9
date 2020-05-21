//javaScript Object Notation = JSON
//JSON is purely for data transfer and will only hold property values.
//you use JSON to send and retrieve information eg. a weather website will output JSON and you can pull it to use in your code to display current weather.
let person = {
    firstName: "Luke",
    lastName: "Parker",
    age: 23,
}

console.log(JSON.stringify(person));

let jsonPerson = '{"firstName":"Luke","lastName":"Parker","age":23}'
console.log(JSON.parse(jsonPerson));