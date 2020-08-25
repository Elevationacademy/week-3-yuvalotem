const add = function(data) {
    const user = data.results
    const source = $('#user-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template(user)
    $('#user-container').append(newHTML)
  }

  $('#btn').on('click', function(){
    $.ajax({
      method: "GET",
      url: 'https://randomuser.me/api/',
      success: add,
      error: function (xhr, text, error) {
          console.log(text);
      }
    });
  })
