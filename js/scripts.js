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

//USER-INTERFACE LOGIC
//dont be in the habit of using global var
let adressBook = new Adressbook();

//Displaying Contacts on our Page
// this will display info in the DOM
//separating it from the block of Code is a best practise
//will link this to the ul list


function displayContactDetails(adressBookToDisplay){
  let contactList = $("ul#contacts");
  let htmlForContactInfo = "";
  adressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
    contactList.html(htmlForContactInfo);
  }

// open a jquery.ready function

$(document).ready(function(){
  // add a form submission with event listener
  $("form#new-contact").submit(function (event) { 
    event.preventDefault();

    //gather user input from form fields and assign them variables
    let inputtedFirstName = $("input#new-first-name").val();
    let inputtedLastName = $("input#new-last-name").val();
    let inputtedPhonNUmber = $("input#new-phone-number").val();
    
    // create a new contact object pass in the gathered info
    let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhonNUmber);
    
    // add newContact to the adress book
    adressBook.addContact(newContact);

    // log the list of our contacts in the adressbook to the console
    // console.log(adressBook.contacts);
    displayContactDetails(adressBook);

  });

});
