//wait until the page loads
window.onload = function () {
    //select all edit links
    const editLinks = document.querySelectorAll('.edit');
   for (const link of editLinks){
       link.onclick = editRecord;
   }

    //select all delete links
    const deleteLinks = document.querySelectorAll('.delete');
    for (const link of deleteLinks){
        link.onclick = deleteRecord;
    }
}

function deleteRecord(evt){
    const deleteLink = evt.target;
    const row = deleteLink.parentElement.parentElement;
    const cells = row.children;

    const deleteID = cells[0].innerHTML;
    console.log(`selected the follow ${deleteID}`);

    //send the fetch request


    //remove the row
    row.remove();
}

function editRecord(evt) {
    console.log(evt.target);

    //look for the id we are editing
    const editLink = evt.target;
    const row = editLink.parentElement.parentElement;
    const cells = row.children;

    const id = cells[0].innerHTML;
    console.log(`Editing id ${id}`);

    const species = cells[2].innerHTML;
    console.log(`editing species ${species}`);

    //replace the text with an input element
    cells[2].innerHTML = `<input type="text" id="species" value='${species}'>`

    //replace the location with an input element

    const age = cells[3].innerHTML;
    console.log(`editing age ${age}`);

    cells[3].innerHTML = `<input type="text" id="age" value='${age}'>`
}