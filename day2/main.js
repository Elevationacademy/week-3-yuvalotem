// $.get("https://www.googleapis.com/books/v1/volumes?q=intitle:Name-of-the-Wind", function(result){
//     console.log(result.items[0].searchInfo.textSnippet)
// })

// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
// ﻿//console.log(users);
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
//   let catchLast = users[users.length - 1].company.catchPhrase
//   console.log(catchLast);
//   //log the dataconsole.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
// })


// const useData = function(data) {
//     console.log(data);
//   }
// $.ajax({
//     method: "GET",
//     url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521',
//     success: useData
//   })

//ex 1
// const fetch = function(ISBN){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }) 
// }

// $('#btn').on('click', function(){
//     fetch($('#inp').val())
// })

//ex 2 3
// const printAuthor = function (data) {
//     for(let book of data.items){
//     console.log("Title:" + book.volumeInfo.title);
//     console.log("Author: " + book.volumeInfo.authors[0]);
//     console.log("ISBN: " + book.volumeInfo.industryIdentifiers[0].identifier);
//     }
// }



// const fetch = function(queryType, queryValue){
//     $.ajax({
//         method: "GET",
//         url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
//         success: printAuthor,
//         error: function (xhr, text, error) {
//             console.log(text);
//         }
//     }) 
// }

// fetch("title", "How to Win Friends and Influence People")

//ex 4 5
const printGif = function (response) {
    $('#gif-container').empty()
    // $('#gif-container').append(`<iframe src="${response.data[0].embed_url}"></iframe>`)
    const embedUrlArr = response.data.map(x => x.embed_url);
    const source = $('#gif-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(embedUrlArr)
    $('#gif-container').append(newHTML)
}



const fetch = function(input){
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=8EowMeglFAanhs7YlWH7mV8Kf9tSYmNk&q=${input}&limit=5&offset=0&rating=g&lang=en`,
        success: printGif,
        error: function (xhr, text, error) {
            console.log(text);
        }
    }) 
}

$('#show-gifs-btn').on('click', function(){
    const input = $('#inp').val()
    fetch(input)
})
let favoriteGifs = []
$('#gif-container').on('click','.add-btn', function(){
    const $iframe = $(this).closest('div').find('iframe')
    const src = $iframe.attr('src')
    favoriteGifs.push(src)
    $('#gif-container').empty()
    $('#fav-Gif-container').empty()
    const source = $('#fav-gif-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(favoriteGifs)
    $('#fav-Gif-container').append(newHTML)
})
