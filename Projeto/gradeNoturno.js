$(document).ready(function() {

    var url = "https://script.google.com/macros/s/AKfycbwVobbz9rduw2NelcE5fLrT5zce9WdDseCeOiwJhLWnAGQuqsfK/exec?action=readNoturno";

    $.getJSON(url, function (json) {

        var divContainer = document.getElementById("tablenoturno-semestre1");
        
            console.log(json.records.length); 

        for (var i = 0; i < json.records.length; i++) {

            console.log(json.records[i].semestre_1); 

            var post = document.createElement("div");

            post.innerHTML =    "<div class='content-text'>" +
                                    "<p>" + json.records[i].semestre_1 + "</p>" +
                                    "<p>" + json.records[i].descricao_1 + "</p>" +
                                "</div>";

            divContainer.appendChild(post);
        }
    });
});  