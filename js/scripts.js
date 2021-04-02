let input = [];

$(document).ready() {
  $("favorite-things").submit(function(event) {
    input.push($("field1"));
    input.push($("field2"));
    input.push($("field3"));
    
    console.log(input);
    event.preventDefault();
  });
};