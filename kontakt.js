console.log(" ")

console.log('Zadanie 4 cz.1')

console.log('----------------')

console.log(" ")

let name1 = "Maxwell Wright";
let name2 = "Raja Villareal";
let name3 = "Helen Richards";
let phone1 = "(0191)7196495";
let phone2 = "08663982895";
let phone3 = "08001111";
let email1 = "Curabitur.egestas.nunc@nonummayc.co.uk";
let email2 = "posuere.vulputate@sed.com";
let email3 = "libero@convallis.edu";

console.log(name1);
console.log(phone1);
console.log(email1);

console.log(" ");

console.log(name3);
console.log(phone3);
console.log(email3);


console.log(" ");

console.log('Zadanie 4 cz.2')

console.log('----------------')

console.log(" ")

let kontakty = [
    {
        name: "Maxwell Wright",
        phone: "(0191)7196495",
        email: "Curabitur.egestas.nunc@nonummayc.co.uk"
    },
    {
        name: "Raja Villareal",
        phone: "08663982895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "08001111",
        email: "libero@convallis.edu"
    }
    ]

kontakty[3] = {
    name: "Maisie Haley",
    phone: "09135313030",
    email: "risus.Quisque@urna.ca"
}

console.log(kontakty.length);
console.log(" ")

console.log(kontakty[0].name ," / ", kontakty[0].phone, " / ", kontakty[0].email);
console.log(kontakty[3].name ," / ", kontakty[3].phone, " / ", kontakty[3].email);