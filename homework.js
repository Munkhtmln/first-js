const contactsString =
  "  Alice:99123456,  Bob:99678901,  Charlie:99543210,  David:99321098,  Eve:99234567,  Frank:99456789,  Grace:99789012,  Hannah:99876543,  Ivy:99987654,  Jack:99111234";

let contactsarray = contactsString.split(",");
let objectarray = contactsarray.map((contact) => {
  let personarr = contact.split(":");
  return { name: personarr[0], phone: personarr[1] };
});

let me = {
  name: "tem",
  phone: 99752257,
};
objectarray.push(me);

const searchContact = (searchValue) => {
  let fountContact = objectarray.find((contact) => {
    return contact.name === searchValue || contact.phone === searchValue;
  });
  return fountContact || "Oldsongvi";
};
console.log(searchContact("Bob"));
