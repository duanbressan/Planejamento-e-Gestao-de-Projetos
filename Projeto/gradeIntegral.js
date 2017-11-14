$(document).ready(function() {

    var url = "https://script.google.com/macros/s/AKfycbwVobbz9rduw2NelcE5fLrT5zce9WdDseCeOiwJhLWnAGQuqsfK/exec?action=readIntegral";

    $.getJSON(url, function (json) {
        
        console.log(json.records.length); 

        var semestre = 0;

        for (var i = 0; i < json.records.length; i++) {

            createItem(json.records[i].semestre_1, 1, i, semestre++);
            createItem(json.records[i].semestre_2, 2, i, semestre++);
            createItem(json.records[i].semestre_3, 3, i, semestre++);
            createItem(json.records[i].semestre_4, 4, i, semestre++);
            createItem(json.records[i].semestre_5, 5, i, semestre++);
            createItem(json.records[i].semestre_6, 6, i, semestre++);
            createItem(json.records[i].semestre_7, 7, i, semestre++);
            createItem(json.records[i].semestre_8, 8, i, semestre++);
        }
    });
});

function createItem(json, id, i, semestre){
    var divContainer = document.getElementById("tableintegral-semestre" + id);

    console.log(json); 

    tr = divContainer.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = getLayoutItem((i + semestre), json);
}

function getLayoutItem(id, name){

    return "<div class='form-group'>" +  
                "<input type='checkbox' name='fancy-checkbox-success' id='fancy-checkbox-success-integral" + id + "' autocomplete='off' />" +
                "<div class='btn-group'>" +
                    "<label for='fancy-checkbox-success-integral" + id + "' class='btn btn-success mybutton'>" +
                        "<span class='glyphicon glyphicon-ok'></span>" +
                        "<span> </span>" +
                    "</label>" +
                    "<label for='fancy-checkbox-success-integral" + id + "' class='btn btn-default'> " + name + " </label>" +
                "</div>" +
                "<button type='button' class='btn btn-primary'>INFO</button>" +
            "</div>";
}  
