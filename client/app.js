/*const movie = (responseData) => {
    responseData.data.options.title
};

let listMovie = movie => {
    $("#data").append(
      $(`<h1 class="movies">${responseData.data.options.title}</h1>`),
  );
}
*/
$('#MyMovies').click(function(){
    $.ajax({
        url: "https://6yvtnxwo7d.execute-api.us-west-2.amazonaws.com/dev/get",
        type: 'GET',
        success: data =>  console.log(data),
        'Content-Type': 'application/json'
    })
});

$('#NewMovie').click(function(){
    $.ajax({
        url: "https://6yvtnxwo7d.execute-api.us-west-2.amazonaws.com/dev/post",
        type: 'POST',
        success: data =>  console.log(what),
        'Content-Type': 'application/json'
    })
});

$('#DeleteMovie').click(function(){
    $.ajax({
        url: "https://6yvtnxwo7d.execute-api.us-west-2.amazonaws.com/dev/delete",
        type: 'DELETE',
        success: res =>  console.log(what),
        'Content-Type': 'application/json'
    })
});

$('#UpdateMovie').click(function(){
    $.ajax({
        url: "https://6yvtnxwo7d.execute-api.us-west-2.amazonaws.com/dev/put",
        type: 'PUT',
        success: data =>  console.log(data),
        'Content-Type': 'application/json'
    })
});
