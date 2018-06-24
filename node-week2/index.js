const Contact = require("./Contact.js");
const ContactList = require("./ContactList.js");

let List = new ContactList();

let Rohit = new contact("Rohit");
console.log(Rohit);
Rohit.callContact();

List.add(Rohit);
console.log(List);
