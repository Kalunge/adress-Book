/* jshint esversion:6 */

//Business LOgic for adress-book ......
function Adressbook(){
  this.contacts = [];
}
Adressbook.prototype.addContact = function(contact){
 return this.contacts.push(contact);
};

let familyAdressBook = new Adressbook();
let mySister = new Contact('Alice', 'Kaari', '0726436504');
familyAdressBook.addContact(mySister);

let friendsAdressBook = new Adressbook();
let eduMutugi = new Contact('Edwin', 'Mutugi', '0718104889');
friendsAdressBook.addContact(eduMutugi);

//Business Logic for contacrs
function Contact(firstName, lastName, phoneNUmber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNUmber = phoneNUmber;
}

Contact.prototype.fullName = function(){
  return this.firstName + ' ' + this.lastName;
};
let myMother = new Contact('Grace', 'Acibi', '0706236177');
let faithMuthoni = new Contact('Faith', 'Muthoni', '0713266564');
let myDad = new Contact('Joseph', 'Kalunge', '0714487730');

familyAdressBook.addContact(myMother);
familyAdressBook.addContact(myDad);
familyAdressBook.addContact(faithMuthoni);