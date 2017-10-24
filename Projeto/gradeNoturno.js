$(document).ready(function() {

    var url = "https://script.google.com/macros/s/AKfycbwVobbz9rduw2NelcE5fLrT5zce9WdDseCeOiwJhLWnAGQuqsfK/exec?action=readNoturno";

    $.getJSON(url, function (json) {

        var divContainer = document.getElementById("tablenoturno-semestre1");
        var divContainer2 = document.getElementById("tablenoturno-semestre2");
        var divContainer3 = document.getElementById("tablenoturno-semestre3");
        var divContainer4 = document.getElementById("tablenoturno-semestre4");
        var divContainer5 = document.getElementById("tablenoturno-semestre5");
        var divContainer6 = document.getElementById("tablenoturno-semestre6");
        var divContainer7 = document.getElementById("tablenoturno-semestre7");
        var divContainer8 = document.getElementById("tablenoturno-semestre8");
        var divContainer9 = document.getElementById("tablenoturno-semestre9");
        var divContainer10 = document.getElementById("tablenoturno-semestre10");
        
        console.log(json.records.length); 

        for (var i = 0; i < json.records.length; i++) {

            console.log(json.records[i].semestre_1); 

            tr = divContainer.insertRow(-1);
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = json.records[i].semestre_1;

            console.log(json.records[i].semestre_2); 

            tr2 = divContainer2.insertRow(-1);
            var tabCell2 = tr2.insertCell(-1);
            tabCell2.innerHTML = json.records[i].semestre_2;

            console.log(json.records[i].semestre_3); 

            tr3 = divContainer3.insertRow(-1);
            var tabCell3 = tr3.insertCell(-1);
            tabCell3.innerHTML = json.records[i].semestre_3;

            console.log(json.records[i].semestre_4); 

            tr4 = divContainer4.insertRow(-1);
            var tabCell4 = tr4.insertCell(-1);
            tabCell4.innerHTML = json.records[i].semestre_4;

            console.log(json.records[i].semestre_5); 

            tr5 = divContainer5.insertRow(-1);
            var tabCell5 = tr5.insertCell(-1);
            tabCell5.innerHTML = json.records[i].semestre_5;

            console.log(json.records[i].semestre_6); 

            tr6 = divContainer6.insertRow(-1);
            var tabCell6 = tr6.insertCell(-1);
            tabCell6.innerHTML = json.records[i].semestre_6;

            console.log(json.records[i].semestre_7); 

            tr7 = divContainer7.insertRow(-1);
            var tabCell7 = tr7.insertCell(-1);
            tabCell7.innerHTML = json.records[i].semestre_7;

            console.log(json.records[i].semestre_8); 

            tr8 = divContainer8.insertRow(-1);
            var tabCell8 = tr8.insertCell(-1);
            tabCell8.innerHTML = json.records[i].semestre_8;

            console.log(json.records[i].semestre_7); 

            tr9 = divContainer9.insertRow(-1);
            var tabCell9 = tr9.insertCell(-1);
            tabCell9.innerHTML = json.records[i].semestre_9;

            console.log(json.records[i].semestre_8); 

            tr10 = divContainer10.insertRow(-1);
            var tabCell10 = tr10.insertCell(-1);
            tabCell10.innerHTML = json.records[i].semestre_10;
        }
    });
});  