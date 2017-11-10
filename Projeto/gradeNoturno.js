$(document).ready(function() {

    var url = "https://script.google.com/macros/s/AKfycbwVobbz9rduw2NelcE5fLrT5zce9WdDseCeOiwJhLWnAGQuqsfK/exec?action=readNoturno";

    $.getJSON(url, function (json) {
        
        console.log(json.records.length); 

        var semestre = 0;

        for (var i = 0; i < json.records.length; i++) {

            createItemNoturno(json.records[i].semestre_1, 1, i, semestre++);
            createItemNoturno(json.records[i].semestre_2, 2, i, semestre++);
            createItemNoturno(json.records[i].semestre_3, 3, i, semestre++);
            createItemNoturno(json.records[i].semestre_4, 4, i, semestre++);
            createItemNoturno(json.records[i].semestre_5, 5, i, semestre++);
            createItemNoturno(json.records[i].semestre_6, 6, i, semestre++);
            createItemNoturno(json.records[i].semestre_7, 7, i, semestre++);
            createItemNoturno(json.records[i].semestre_8, 8, i, semestre++);
            createItemNoturno(json.records[i].semestre_9, 9, i, semestre++);
            createItemNoturno(json.records[i].semestre_10, 10, i, semestre++);
        }
    });
});

function createItemNoturno(json, id, i, semestre){
    var divContainer = document.getElementById("tablenoturno-semestre" + id);

    console.log(json); 

    tr = divContainer.insertRow(-1);
    var tabCell = tr.insertCell(-1);
    tabCell.innerHTML = getLayoutItemNoturno((i + semestre), json);
}

function getLayoutItemNoturno(id, name){

    return "<div class='form-group'>" +  
                "<input type='checkbox' name='fancy-checkbox-success' id='fancy-checkbox-success-noturno" + id + "' autocomplete='off' />" +
                "<div class='btn-group'>" +
                    "<label for='fancy-checkbox-success-noturno" + id + "' class='btn btn-success'>" +
                        "<span class='glyphicon glyphicon-ok'></span>" +
                        "<span> </span>" +
                    "</label>" +
                    "<label for='fancy-checkbox-success-noturno" + id + "' class='btn btn-default'> " + name + " </label>" +
                "</div>" +
                "<button type='button' class='btn btn-primary'>+</button>" +
            "</div>";
}  