//if user adds a note, add it to the localStorage
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click", function(e){
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null){
        notesObj=[]; //an array
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    addTxt.value=""; //to make the text area empty upon pushing to the notes section
    console.log(notesObj);
})