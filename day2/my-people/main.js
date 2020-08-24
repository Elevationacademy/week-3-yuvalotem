const add = function(data) {
    const user = data.results
    console.log(user[0].id.value);
    const source = $('#user-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(user)
    $('#user-container').append(newHTML)
  }

$.ajax({
    method: "GET",
    url: 'https://randomuser.me/api/',
    success: add,
    error: function (xhr, text, error) {
        console.log(text);
    }
  });
