//make button clickable
//capture input
//make new table row
//put cost and item in the rows
//add delete button to row
//make row footer
//add all costs together and put in row footer

let newcost = document.getElementById('cost');
let newpurchase = document.getElementById('purchase');
let table = document.getElementById('table');
var ids = 0;
let sumdislpay = document.getElementById('sumdisplay');

function addrow() {
    var row = table.insertRow();
    var cell = row.insertCell();
    cell.classList.add("subcost");
    cell.innerHTML = newcost.value;
    cell = row.insertCell();
    cell.innerHTML = newpurchase.value;
    newcost.value = "";
    newpurchase.value = "";
    findsum();
}

function findsum() {
    var sum = 0;
    var allcosts = document.getElementsByClassName("subcost");
    for (var i = 0; i < (allcosts.length); i++) {
        var item = allcosts[i].innerHTML;
        var itemtonumber = parseFloat(item);
        sum += itemtonumber;
    }
    sumdislpay.innerHTML = sum;
    console.log(sum)
}