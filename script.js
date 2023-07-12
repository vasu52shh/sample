// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  var loveForm = document.getElementById('loveForm');

  // Add a submit event listener to the form
  loveForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the input fields
    var boyName = document.getElementById('boyName').value;
    var girlName = document.getElementById('girlName').value;

   
    var fullstr=boyName+"Loves"+girlName;
    fullstr=fullstr.toUpperCase();
    var charCount = {};

    // Iterate over each character in the string
    for (var i = 0; i < fullstr.length; i++) {
      var char = fullstr[i];
  
      // Check if the character is already a key in the hash map
      if (charCount[char]) {
        // Increment the count if the character exists
        charCount[char]++;
      } else {
        // Initialize the count to 1 if the character doesn't exist
        charCount[char] = 1;
      }
    }
    var first_int_str="";
    for (var key in charCount) {
      console.log(key + ": " + charCount[key]);
      first_int_str=first_int_str+charCount[key];
      
    }

   console.log(first_int_str);

            var temp = first_int_str;
    var looptemp = "";
    var sumt = 0, first, second;

    while (temp.length >= 3) {
      for (let j = 0, k = temp.length - 1; j <= k; j++, k--) {
        first = Number(temp.charAt(j));
        second = Number(temp.charAt(k));
        if(j===k)
        {
          looptemp += first;
        }
        else
        {
          sumt = first + second;
          looptemp += sumt;
        }
       
      }
      temp = looptemp;
      looptemp = "";
    }

// Display the result on the page
var div = document.getElementById("result");

// Hide the div
div.style.display = "flex";

var boy1 = document.getElementById("boy");

// Hide the div
boy1.style.display = "none";
var girl1 = document.getElementById("girl");

// Hide the div
girl1.style.display = "none";
var div = document.getElementById("btn");

// Hide the div
div.style.display = "none";
document.getElementById('result').innerHTML =  '<p>'+ temp + '%</p>';


const data={
  Name:document.getElementById('boyName').value,
  Crush:document.getElementById('girlName').value,
  Result: temp
  
}
const response=fetch('https://sheet.best/api/sheets/d7b02a9b-31c1-475f-8df8-f18f948f9dcc',
{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
    'Content-Type':'application/json'
  }
})

});
});
