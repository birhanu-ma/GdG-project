import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function NoteApp(){


  const [note, setNote] = useState("");
  const [savedNotes, setSavedNotes] = useState([]);
  const [showAddButton, setShowAddButton] = useState(true);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showTextarea, setShowTextarea] = useState(false);
  const [showNavBar, setShowNavBar] = useState(false);
  const [showEditButton, setShowEditButton] = useState(false);
  const [doneText, setDoneText] = useState("Done");
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("write a note");
  // check the state of the button
  const [isEditing, setIsEditing] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [fileName, setFileName] = useState("")
  const[stack, setStack] = useState([]);
  const [added, setAdded] = useState("");





  



  
  function handleAdd(){

    setShowAddButton(false);
    setShowTextarea(true);
    setNote("");
    setEditingIndex(null);
    setShowNavBar(true);
    setIsEditing(false);

  }

  function handleChange(event){
  
    setNote(event.target.value);
    setAdded(event.target.value);
  }


 function handleStack(){
  setStack((prevStack) => [...prevStack, added]); // Correctly updates stack
  setAdded(""); // No need for an updater function

  console.log(added);
  console.log(stack);
 
 }




 

  function handleDone(){
   
    setShowTextarea(true);
    setDoneText("Edit");
    setShowEditButton(true);
    setShowTextarea(false);
    setIsReadOnly(true);
    setPlaceHolder("");
    setIsEditing(true);
   
    
   

  

  }

  function handleUndo(){
    setShowModal(false);
    setShowNavBar(true);
    setShowTextarea(true);

  
  



  }

  function handleRedo(event){

    setShowModal(false);
    setShowNavBar(true);
    setShowTextarea(true);
  
  
   

      
    
  
  }

  function handleEdit(index){
   
    setShowTextarea(true);
    setDoneText("Done");
    setShowTextarea(true);
    setIsEditing(false);
    setIsReadOnly(false);
   


    
  
  }

 

  




  const handleSave = async () => {
   
    try {
      // ✅ Open file picker to let the user choose a folder
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: "MyNote.txt",
        types: [
          {
            description: "Text Files",
            accept: { "text/plain": [".txt"] },
          },
        ],
      });

      // ✅ Create a writable file stream
      const writableStream = await fileHandle.createWritable();
      await writableStream.write(note);
      await writableStream.close();

      alert("File saved successfully! 📂");
    } catch (error) {
      console.error("Error saving file:", error);
      alert("Failed to save file.");
    }
  };





  

  function handleDeleteClicked(){
    handleStack();
    setShowNavBar(false);
    setShowModal(true);
   
    
  }

  const handleModalSave = async() =>{
    setShowModal(false);
    setShowNavBar(true);
    setShowTextarea(true);
    try{
      const fileHandle = await window.showSaveFilePicker({
        suggestedName:"myNote",
        types:
      
          [
            {
              description: "text file",
              accept: {"text/palin":[".txt"]}
            },
          ],
        
      });

      const writableStream = await fileHandle.createWritable();
      await writableStream.write(note);
      await writableStream.close();


    }
    catch (error){

      console.error("error genrated",  error);
      alert("fail to save", error);

    }




  }



  function handleModalDiscard(){

    setShowTextarea(false);
    setShowNavBar(false);
    setShowAddButton(true);
    setShowModal(false);
  }

  function handleModalCancel(){
    setShowModal(false);
 
    setShowNavBar(true);
    setShowTextarea(true);

  }



  return(
    <div>

      {showAddButton &&
      <div className="add-div" >
      <button 
      className="add-btn"
      onClick={handleAdd}>
        add
      </button>

    </div>}
      

   {showNavBar &&(

    // div for wrap the nav bar and text area
    <div>

    <div className="nav-bar">

      <div className="nav-gab">


      <div className="nav-item">
        <button 
        className="done-btn"
        onClick={isEditing ? handleEdit : handleDone }
        >{doneText}</button>
      </div>

      <div className="nav-item">
        <button 
        onClick={handleSave}
        ><i class="fa-regular fa-floppy-disk"></i></button>
      </div>
      </div>

      <div className="nav-gab">
      <div  className="nav-item">
        <button
        onClick={handleUndo}
        disabled= {note.length===0}     
       
        >
        <i class="fa-solid fa-rotate-left"></i></button>
      </div>
      <div className="nav-item">
        <button 
       
        onClick={handleRedo}
        // disabled = {note.length=== currentState.length}
       
        >
          <i class="fa-solid fa-rotate-right"></i></button>
      </div>
      </div>
     
     <div className="nav-gab">
      <div className="nav-item">
        <button ><i class="fa-solid fa-layer-group"></i></button>
      </div>
      <div className="nav-item">
        <button
        onClick={handleDeleteClicked} 
        >
          <i class="fa-solid fa-trash">
        </i></button>
      </div>
        {/* section for confirmation when delete button get clicked */}
  
      </div>
    
    </div>

     <div>
     <textarea
     readOnly = {isReadOnly}
     className="text-area"
     typeof="text"
     value={note}
     onChange={handleChange}
     placeholder={placeHolder}
     
     >
     </textarea>
   </div>

  


   </div>
   
    )}

{showModal &&(
          <div className="modal">
            <p className="modal-btn">
              would you like to save the changes you have made to this note?
            </p>
            <div className="modal-btn">
            <button 
            className="modal-item"
            onClick={handleModalCancel}
            >
              Cancel</button>
            <button
            className="modal-item"
            onClick={handleModalDiscard}
            >
              Discard</button>

            <button 
            className="modal-item"
            onClick={handleModalSave}
            >Save</button>
            </div>
          </div>
        )}

    


    </div>
  );
}


root.render(<NoteApp />);