/* jshint esversion:6 */

function Contact(firstName, lastName, phoneNUmber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNUmber = phoneNUmber;
}

Contact.prototype.fullName = function(){
  return this.firstName + ' ' + this.lastName;
};
let myMother = new Contact('Grace', 'Acibi', 254706236177);
let faithMuthoni = new Contact('Faith', 'Muthoni', 254713266564);
let myDad = new Contact('Joseph', 'Kalunge', 254714487730);

