$(document).ready(function() {

    var url = "https://script.google.com/macros/s/AKfycbwVobbz9rduw2NelcE5fLrT5zce9WdDseCeOiwJhLWnAGQuqsfK/exec?action=readIntegral";

    $.getJSON(url, function (json) {

        var divContainer = document.getElementById("tableintegral-semestre1");
        
            console.log(json.records.length); 

        for (var i = 0; i < json.records.length; i++) {

            console.log(json.records[i].semestre_1); 

            tr = divContainer.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json.records[i].semestre_1;

//            var post = document.createElement("div");

//            post.innerHTML =    "<div class='content-text'>" +
//                                    "<p>" + json.records[i].semestre_1 + "</p>" +
//                                "</div>";

//            divContainer.appendChild(post);
        }
    });
});  