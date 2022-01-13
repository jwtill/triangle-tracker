function findTriType(length_1, length_2, length_3)
{
  
  if ((length_1 === length_2) && (length_2 === length_3))
  {
    $("#results").text("it's equilateral!!!");
  }

  else if (
     ((length_1 === length_2) && (length_1 != length_3)) 
  || ((length_2 === length_3) && (length_2 != length_1)) 
  || ((length_1 === length_3) && (length_1 != length_2))
  ) 
  {
    $("#results").text("it's isosceles!!!");
  }
  else if ((length_1 != length_2) && (length_1 != length_3) && (length_2 != length_3))
  {
    $("#results").text("it's scalene!!!");
  }
  else if ( 
        ((length_1 + length_2) <= length_3)
    ||  ((length_2 + length_3) <= length_1)
    ||  ((length_1 + length_3) <= length_2)
  )
  {
    $("#results").text("NOT a triangle");
  }
}


$(document).ready(function() {
  $("#formOne").submit( function() {
    event.preventDefault();
    const length1 = $("#side1").val();
    const length2 = $("#side2").val();
    const length3 = $("#side3").val();
    findTriType(length1, length2, length3);
  });
});