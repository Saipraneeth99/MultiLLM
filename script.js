$(document).ready(function () {
    // Define the API endpoint
    var url = "https://8n29jeml2j.execute-api.us-west-2.amazonaws.com/g2";
  
    // Function to handle the click event on the send button
    $("#send-btn").click(function () {
      // Get the input value
      var inputText = $("#chat-input").val();
  
      // Check if the input is not empty
      if (inputText.trim() !== "") {
        // Create the data object to be sent in the POST request
        var data = {
          "prompt": inputText,
        };
        var headers = {
            "Content-Type": "application/json",
            // "Authorization": "Bearer your_auth_token"  // Uncomment if needed
        };
        var userPromptParagraph = $("<div class='chat-message'>" +
                '<div class="profile"><img src="user.svg" alt="user">'+
                '</div>'+'<p class="usertext">'+inputText+'</p>'
                +'</div>');
                        // Append the user's prompt to the chat container
                $(".chat-container").append(userPromptParagraph);

                // Clear the input textarea after creating the user's prompt
                $("#chat-input").val("");
        // Send the POST request
        $.ajax({
          type: "POST",
          url: url,
          headers: headers, // Specify the content type
          data: JSON.stringify(data),
          datatype:"json", // Convert the data object to JSON
          success: function (response) {
            // Handle the success response from the server
            console.log("Success:", response);
            var resp = JSON.parse(response.body);
            console.log(resp);
            const keys = Object.keys(resp);
            //console.log(keys,resp[keys].body);
            var newRow = $("<div class='row'></div>");
                        var columnContent = [
                  //"<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp' class='card-img-top' alt='Hollywood Sign on The Hill' />" +
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>Claude</h5>" +
                  "<p class='card-text'>"+resp["claude"].body+"</p>" +
                  "</div>",
                  
                  // Repeat the pattern for each column
                   
                  "<div class='card-body'>" +
                  "<h5 class='card-title'>Llama</h5>" +
                  "<p class='card-text'>"+resp["llama"].body+"</p>" +
                  "</div>",
                  //"<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp' class='card-img-top' alt='Skyscrapers' />" +
                  "<div class='card-body id=3'>" +
                  "<h5 class='card-title'>Titan</h5>" +
                  "<p class='card-text'>"+resp["titan"].body+"</p>" +
                  "</div>",

                ];
      
                // Append each column content to the row
                for (var i = 0; i < columnContent.length; i++) {
                  var column = $("<div class='col-5 m-2'>" +
                                  "<div class='card'>" +
                                  columnContent[i] +
                                  "</div>" +
                                "</div>");
                  newRow.append(column);
                }
      
                // Append the new row to the chat container
                $(".chat-container").append(newRow);

                // Append the new card to the chat container
                //$(".chat-container").append(newCard);

                // Clear the input textarea after creating the card
                $("#chat-input").val("");

                // Auto-scroll to the bottom of the chat container
                $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
            // You can perform additional actions here if needed
          },
          error: function (error) {
            // Handle the error response from the server
            console.error("Error:", error);
            // You can perform additional error handling here if needed
          },
        });
  
        // Clear the input field after sending the request
        $("#chat-input").val("");
      }
    });
  
    // Add any additional functionality or event listeners as needed
  });

    // $(document).ready(function() {
    //     // Event listener for the send-btn click
    //     $("#send-btn").on("click", function() {
    //         // Get the input value from the textarea
    //         var inputText = $("#chat-input").val();

    //         // Check if the input text is not empty
    //         if (inputText.trim() !== "") {
                
    //             //var userPromptParagraph = $("<p>" + inputText + "</p>");
    //             var userPromptParagraph = $("<div class='chat-message'>" +
    //             '<div class="profile"><img src="user.svg" alt="user">'+
    //             '</div>'+'<p class="usertext">'+inputText+'</p>'
    //             +'</div>');

    //             // Append the user's prompt to the chat container
    //             $(".chat-container").append(userPromptParagraph);

    //             // Clear the input textarea after creating the user's prompt
    //             $("#chat-input").val("");

    //             // Create a Bootstrap card element
    //             var newRow = $("<div class='row'></div>");

    //             // Sample content for each column
    //             var columnContent = [
    //               //"<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp' class='card-img-top' alt='Hollywood Sign on The Hill' />" +
    //               "<div class='card-body'>" +
    //               "<h5 class='card-title'>Card title</h5>" +
    //               "<p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>" +
    //               "</div>",
                  
    //               // Repeat the pattern for each column
                   
    //               "<div class='card-body'>" +
    //               "<h5 class='card-title'>Card title</h5>" +
    //               "<p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content.</p>" +
    //               "</div>",
    //               //"<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp' class='card-img-top' alt='Skyscrapers' />" +
    //               "<div class='card-body'>" +
    //               "<h5 class='card-title'>Card title</h5>" +
    //               "<p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content.</p>" +
    //               "</div>",
      
    //               //"<img src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp' class='card-img-top' alt='Skyscrapers' />" +
    //               "<div class='card-body'>" +
    //               "<h5 class='card-title'>Card title</h5>" +
    //               "<p class='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content.</p>" +
    //               "</div>"
    //             ];
      
    //             // Append each column content to the row
    //             for (var i = 0; i < columnContent.length; i++) {
    //               var column = $("<div class='col-5 m-2'>" +
    //                               "<div class='card'>" +
    //                               columnContent[i] +
    //                               "</div>" +
    //                             "</div>");
    //               newRow.append(column);
    //             }
      
    //             // Append the new row to the chat container
    //             $(".chat-container").append(newRow);

    //             // Append the new card to the chat container
    //             //$(".chat-container").append(newCard);

    //             // Clear the input textarea after creating the card
    //             $("#chat-input").val("");

    //             // Auto-scroll to the bottom of the chat container
    //             $(".chat-container").scrollTop($(".chat-container")[0].scrollHeight);
    //         }
    //     });

    //     // Add any other script functionality as needed
    // });

