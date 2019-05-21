
// load the page first
window.onload = function() {

// load tableau extension
tableau.extensions.initializeAsync()

//Get the button
var button = document.getElementById('button1')

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {

        $('#spinner').show();
        $('#sam').hide();



        //get request to page where python is located//
        $.getJSON('/_add_numbers', {
                 a: $('input[name="a"]').val()
                 }, function(data) {
                        $('#spinner').hide();
                        $("#sam").text(data.result);
			            //console.log(data.result)
                        const param = tableau.extensions.dashboardContent.dashboard.getParametersAsync().then (function (sum) {
                        const sam = sum[2].changeValueAsync(data.result)
                        console.log(sum[2])
                        });
                        $('#sam').show();
                     });

         return false;
    });

}
