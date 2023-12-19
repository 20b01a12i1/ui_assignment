$(document).ready(function() {
  
    function processForm() {
      var width = parseInt($('#image_width').val());
      var height = parseInt($('#image_height').val());
      var numColors = parseInt($('#no_of_colors').val());
      
      // Calculate color depth using logarithm base 2
      var colorDepth = Math.log2(numColors);
  
      // Calculate file size in kilobytes based on color depth
      var fileSizeKB = Math.ceil(((width * height * colorDepth) / 8) / 1024);
  
      var resultElement = '';
      if (fileSizeKB <= 50) {
        resultElement = `File size is ${fileSizeKB.toFixed(1)} KB which is OK`;
      } else {
        resultElement = 'Failed! File size is larger than 50 KB';
      }
      $('#userInput p').text(resultElement);
      $('#userInput').show(); 
    }
  
    $('#submitButton').click(function(event) {
      event.preventDefault(); 
      processForm(); 
    });
  });
  