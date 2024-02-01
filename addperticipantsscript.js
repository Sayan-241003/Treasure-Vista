var entry = document.getElementById("entry");
entry.addEventListener("click",addParticipants);

var row =1;

function addParticipants()
{
    var name =document.getElementById("name").value;

    if(!name)
    {
        alert("Fill Team Name");
        return;
    }

    var table = document.getElementById("participantstable");

    var newRow = table.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = row;
    cell2.innerHTML = name;

    row++;
}

