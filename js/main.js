let notes = [];
const checkForData = () => {
  notes = JSON.parse(localStorage.getItem("myData")) || [];
  createNotes();
};

const myAction = () => {
  let note = new Object();
  note.taskName = document.getElementById("taskName").value;
  note.time = document.getElementById("time").value;
  note.date = document.getElementById("date").value;
  notes.push(note);
  localStorage.setItem("myData", JSON.stringify(notes));
  createNotes();
  document.getElementById("myForm").reset();
  fadeNotes();
};

const createNotes = () => {
  let elNotes = document.getElementById("notes");
  let data = "";

  notes.map((item, index) => {
    data += ` <div class="note" id="${index}"><button class="btn" onclick="removeNote(${index})"><img class="btnImg" src="img/x.png" alt="x"></button><br /><p> ${
      item.taskName
    }</p>
    <div class="dateTime"> ${prettifyDate(item.date)} <br /> 
     ${item.time}</div></div>`;
  });
  elNotes.innerHTML = data;
};

const fadeNotes = () => {
  let lNote = notes.length - 1;
  let elNote = document.getElementById(`${lNote}`);
  elNote.classList.add("fade");
};

const removeNote = (index) => {
  notes.splice(index, 1);
  localStorage.setItem("myData", JSON.stringify(notes));
  createNotes();
};

const prettifyDate = (date) => {
  const myNewDate = date.split("-");
  return `${myNewDate[2]}/${myNewDate[1]}/${myNewDate[0]}`;
};
checkForData();
