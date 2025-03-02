$(document).ready(function(){
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        type:'GET',
        success:function(response){
            $('#userList').empty();
            response.forEach(function(user){
                $('#userList').append(
                    '<p>Name:${user.name}|Email: ${user.email}</p>'
                );
            });
        },
        error:function (xhr, status,error){
            $(  '#userList').html('An error occured while fetching data');
        }
    });

    $('#myForm').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        
        // Use GET method to submit form data
        $.get('', { name: name, email: email }, function(response) {
          $('#response').html(response);
        });
      });

    $('#spinner').show();
    $.get('https://jsonplaceholder.typicode.com/users',function(data){
        $('#spinner').hide();
        data.forEach(function(user){
            $('userList').append('<p>${user.name}-${user.email}</p>');
        });
    });
    $.get('https://jsonplaceholder.typicode.com/users',function(data){
        data.forEach(function(user){
            $('#userList').append('<p>${user.name} - ${user.email}</p');
        });
    });

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users', 
        type: 'GET',
        success: function(data) {
          data.forEach(function(user) {
            $('#data').append(`<p>${user.name} - ${user.email}</p>`);
          });
        },
        error: function(xhr, status, error) {
          if (xhr.status === 403) {
            $('#error-message').text('Access Forbidden: You do not have permission to view this data.');
          } else if (xhr.status === 500) {
            $('#error-message').text('Internal Server Error: Something went wrong on the server.');
          } else {
            $('#error-message').text('An unexpected error occurred: ' + error);
          }
        }
      });

});
   