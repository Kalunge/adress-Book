/* jshint esversion:6 */

//Business LOgic for adress-book ......

// constructor for creating an ADress book and initialiing an id for the contact
function Adressbook(){
  this.contacts = [],
  this.currentId = 0;

}

// adding a new contact to the adress book and assigning it a new id
Adressbook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts.push(contact);
};

// method for assigning a contact an id
Adressbook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
};


// method for finding a contact in an adress book
Adressbook.prototype.findContact = function(id){
  for (let contactIndex = 0; contactIndex < this.contacts.length; contactIndex++){
    if (this.contacts[contactIndex].id){
      if (this.contacts[contactIndex].id == id){
        return this.contacts[contactIndex];
      }
    }
  }
  return false;
};


//method for deleting a contact based on id

Adressbook.prototype.deleteContact = function(id){
  for (let contactIndex = 0; contactIndex < this.contacts.length; contactIndex++){
    if (this.contacts[contactIndex]){
      if (this.contacts[contactIndex].id == id){
        delete this.contacts[contactIndex];{
          console.log('contact deleted');
        }
      }
    }
  }
  return false;
};

//Business Logic for contacts

function Contact(firstName, lastName, phoneNUmber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNUmber = phoneNUmber;
}

Contact.prototype.fullName = function(){
  return this.firstName + ' ' + this.lastName;
};

let highSchoolAdressBook = new Adressbook();

let kalumaGeorge = new Contact('George', 'Kaluma', '0713398918');

highSchoolAdressBook.addContact(kalumaGeorge);

let thaicu = new Contact('Wilson', 'Thuranira', '0715557552');

highSchoolAdressBook.addContact(thaicu);

let kumbuka = new Contact('JOhn', 'Mwirig', '07153264581');
highSchoolAdressBook.addContact(kumbuka);


let familyAdressBook = new Adressbook();
let mySister = new Contact('Alice', 'Kaari', '0726436504');
familyAdressBook.addContact(mySister);

let friendsAdressBook = new Adressbook();
let eduMutugi = new Contact('Edwin', 'Mutugi', '0718104889');
friendsAdressBook.addContact(eduMutugi);


let myMother = new Contact('Grace', 'Acibi', '0706236177');
let faithMuthoni = new Contact('Faith', 'Muthoni', '0713266564');
let myDad = new Contact('Joseph', 'Kalunge', '0714487730');

familyAdressBook.addContact(myMother);
familyAdressBook.addContact(myDad);
familyAdressBook.addContact(faithMuthoni);

