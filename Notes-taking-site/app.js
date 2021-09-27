
showNotes(); //calling this function because we want to show notes after refreshing the page
//if user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []; //an array
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = ""; //to make the text area empty upon pushing to the notes section
    // console.log(notesObj);
    showNotes();
})

// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.getElementById("currentDate").innerHTML = date;



//function to show elements from localstorage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []; //an array
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {    //appending the notes in the card
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1},<span id='currentDate'></span></h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Node</button>
        </div>
    </div>`;   //in the above {this.id} passing the id(what I am trying to delete) to the deleteNote function 
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML=`Nothing to show,use 'add a note' section above to show`;
    }

}

//function to delete a note
function deleteNote(index){
    // console.log('I am deleting',index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = []; //an array
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
// function AddZero(num) {
//     return (num >= 0 && num < 10) ? "0" + num : num + "";
// }

// window.onload = function() {
//     var now = new Date();
//     var strDateTime = [[AddZero(now.getDate()), 
//         AddZero(now.getMonth() + 1), 
//         now.getFullYear()].join("/"), 
//         [AddZero(now.getHours()), 
//         AddZero(now.getMinutes())].join(":"), 
//         now.getHours() >= 12 ? "PM" : "AM"].join(" ");
//     document.getElementById("Console").innerHTML = "Now: " + strDateTime;
// };

let search=document.getElementById('searchTxt');
search.addEventListener("input", ()=>{
    let inputVal=search.value.toLowerCase();  //storing the search term into inputVal to search among the cards //using tolowercase to so that the searhbutton works if the user writes in capital letter also 
    //console.log("input listener fired",inputVal);
    let noteCards=document.getElementsByClassName('noteCard'); //searching through the cards
    Array.from(noteCards).forEach(function(element){ 
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})



/*Future features:
1.add titles
2.mark as important(that card will turn into another colour
*/
