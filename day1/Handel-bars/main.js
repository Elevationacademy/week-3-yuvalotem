// var classData = {
//     classmates: [
//         {name: "That on gal", description: "Always has the ansswer"},
//         {name: "The weird dude", description: "Quick with a smile"},
//         {name: "Taylor", description: "Just Taylor"}
//     ]
// }

// const source = $("#kids-template").html()
// const template = Handlebars.compile(source)
// const newHTML = template(classData)
// $('#kids').append(newHTML)


// const menuData = {
//     menu: [
//       { name: "Google", link: "http://google.com", socialNetwork: true },
//       { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
//       { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
//       { name: "Twitter", link: "http://twitter.com", socialNetwork: false },
//     ]
//   };
  
//   const source = $('#menu-template').html();
//   const template = Handlebars.compile(source);
//   const newHTML = template(menuData);
  
//   // append our new html to the page
//   $('.menu').append(newHTML);

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]
  
const source = $('#first-animals-template').html()
const template = Handlebars.compile(source)
const newHTML = template(animals)
$('#animals').append(newHTML)