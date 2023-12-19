$(document).ready(function() {
    
    function processForm() {
      
      var person_name = $('#person_name').val();
      var character = $('#character').val();
      var adverb = $('#adverb').val();
      var adjective = $('#adjective').val();
  
      var story = `One day, my friend <span class="userInputText">${person_name}</span> was visiting New York and ran into <span class="userInputText">${character}</span>, ${person_name} ran <span class="userInputText">${adverb}</span> to meet <span class="userInputText">${character}</span>, But <span class="userInputText">${character}</span> turned out to be very <span class="userInputText">${adjective}</span> and ${person_name} did not enjoy the meeting.`;
  
      $('#userInput p').append(story);
      $('#userInput').show(); 
    }
  
    
    $('#submitButton').click(function(event) {
      event.preventDefault(); 
      processForm(); 
    });
  });
  