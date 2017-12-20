const listMovie = response => {
  response.map((item) => {
    $("#data").append("<div>" + item.id + "----" + item.title + "----" + item.genre + "----" + item.year + "</div>");
  })
};

$('#MyMovies').click(function(){
    $.ajax({
        url: "https://o5ozuypux6.execute-api.us-west-2.amazonaws.com/dev/get",
        type: 'GET',
        success: data =>  listMovie(data),
        'Content-Type': 'application/json'
    })
});

$('#NewMovie').click(function(){
    $.ajax({
        url: "https://o5ozuypux6.execute-api.us-west-2.amazonaws.com/dev/post",
        type: 'POST',
        success: data =>  console.log(what),
        'Content-Type': 'application/json'
    })
});

$('#DeleteMovie').click(function(){
    $.ajax({
        url: "https://o5ozuypux6.execute-api.us-west-2.amazonaws.com/dev/delete",
        type: 'DELETE',
        success: res =>  console.log(what),
        'Content-Type': 'application/json'
    })
});

$('#UpdateMovie').click(function(){
    $.ajax({
        url: "https://o5ozuypux6.execute-api.us-west-2.amazonaws.com/dev/put",
        type: 'PUT',
        success: data =>  console.log(data),
        'Content-Type': 'application/json'
    })
});
