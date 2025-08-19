// console.log(document)
// const body = document.body

// console.log(body.childNodes)
// // child nodes give the tags in index.html

// function changeText(){
//     document.getElementById("change").textContent = "Standing by over..."
// }

// let counter = 0;

// let counterId = document.getElementById("counter");
// let incrementBtn = document.getElementById("increment-btn");

// incrementBtn.addEventListener("click", () => {
//     alert(`Current value of increment: ${counter}`)
//     counter++;
//     counterId.textContent = counter
// })

// let enterBtn = document.getElementById("enterBtn");
// let statusTag = document.getElementById("status")

// enterBtn.addEventListener("click", () => {
//     statusTag.innerHTML= "<h1>Entered Metaverse</h1>"
// })

// document.getElementById("MyForm").addEventListener("submit", (e) => {
//     e.preventDefault()

//     let radiusInput = document.getElementById("radius").value;
//     let radius = parseFloat(radiusInput);

//     let volumeField = document.getElementById("volume");

//     if (isNaN(radius) || radius < 0) {
//         volumeField.value = "NaN";
//         return
//     }

//     let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

//     volumeField.value = volume.toFixed(4)
// })

// const submitBtn = document.getElementById("submit");
// const playerInputs = document.getElementById("player-inputs");
// const gameSection = document.getElementById("game");
// const message = document.querySelector(".message");
// const cells = document.querySelectorAll(".cell");

// let player1 = "";
// let player2 = "";
// let currentPlayer = "";
// let board = Array(9).fill(null);
// let gameActive = true;

// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// submitBtn.addEventListener("click", () => {
//     player1 = document.getElementById("player-1").value
//     player2 = document.getElementById("player-2").value

//     if (player1 && player2) {
//       currentPlayer = player1;
//       playerInputs.classList.add("hidden");
//       gameSection.classList.remove("hidden");
//       message.textContent = `${currentPlayer}, you're up`;
//     } else {
//       alert("Please enter names for both players!");
//     }
// })

// cells.forEach((cell, index) => {
//   cell.addEventListener("click", () => {
//     if (!gameActive || cell.textContent) return;

//     let symbol = currentPlayer === player1 ? "X" : "O";
//     board[index] = symbol;
//     cell.textContent = symbol;

//     if (checkWinner(symbol)) {
//       message.textContent = `${currentPlayer}, congratulations you won!`;
//       gameActive = false;
//     } else if (board.every((cell) => cell !== null)) {
//       message.textContent = "It's a draw!";
//       gameActive = false;
//     } else {
//       currentPlayer = currentPlayer === player1 ? player2 : player1;
//       message.textContent = `${currentPlayer}, you're up`;
//     }
//   });
// });

// function checkWinner(symbol) {
//   for (let combo of winningCombinations) {
//     const [a, b, c] = combo;
//     if (board[a] === symbol && board[b] === symbol && board[c] === symbol) {
//       highlightWinner(combo);
//       return true;
//     }
//   }
//   return false;
// }

// function highlightWinner(combo) {
//   combo.forEach((i) => {
//     cells[i].classList.add("winner");
//   });
// }

// const submitBtn = document.getElementById("submit");
// const bookList = document.getElementById("book-list");

// submitBtn.addEventListener("click", () => {
//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const isbn = document.getElementById("isbn").value;

//   if (title ==='' || author === '' || isbn === ''){
//     alert(`Please fill all fields`)
//     return;
//   }

//   const row = document.createElement("tr")
//   row.innerHTML = `
//   <td>${title}</td>
//   <td>${author}</td>
//   <td>${isbn}</td>
//   <td><button class = "delete">X</button></td>
//   `

//   bookList.appendChild(row);

//   document.getElementById("title").value = "";
//   document.getElementById("author").value = "";
//   document.getElementById("isbn").value = "";
// })

// bookList.addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete")) {
//     e.target.parentElement.parentElement.remove()
//   }
// })

// const getSumBtn = document.createElement("button")
// getSumBtn.append("Get Total Price")
// document.body.appendChild(getSumBtn)

// const getSum = () => {
//   const prices = document.querySelectorAll(".price")
//   let totalPrice = 0;

//   prices.forEach(cell => {
//     totalPrice += parseFloat(cell.textContent) || 0
//   })

//   const oldTotal = document.getElementById("totalRow");
//   if (oldTotal) oldTotal.remove();

//   const table = document.querySelector("table")
//   const totalRow = document.createElement("tr")
//   totalRow.id = "totalRow"

//   const totalCell = document.createElement("td")
//   totalCell.textContent = `Total Price: Rs. ${totalPrice}`

//   totalRow.appendChild(totalCell)
//   table.appendChild(totalRow)
// }

// getSumBtn.addEventListener("click", getSum)

// const plusBtn = document.querySelector("#plus")
// const minusBtn = document.querySelector("#minus")
// const productBtn = document.querySelector("#multiply")
// const divideBtn = document.querySelector("#divide")
// const remainderBtn = document.querySelector("#remainder")

// const resultText = document.querySelector("#result-div");

// plusBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value)
//   const input2 = parseFloat(document.querySelector("#input-2").value)
//   resultText.textContent = `Result: ${input1 + input2}`
// })
// minusBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);
//   resultText.textContent = `Result: ${input1 - input2}`;
// });
// productBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);
//   resultText.textContent = `Result: ${input1 * input2}`;
// });

// divideBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);

//   if (input2 === 0) {
//     resultText.textContent = `Cannot divide by 0`
//   }
//   else
//   resultText.textContent = `Result: ${input1 / input2}`;
// });

// remainderBtn.addEventListener("click", () => {
//   const input1 = parseFloat(document.querySelector("#input-1").value);
//   const input2 = parseFloat(document.querySelector("#input-2").value);
//    if (input2 === 0) {
//      resultText.textContent = `Cannot divide by 0`;
//    } else
//      resultText.textContent = `Result: ${input1 % input2}`;
// });

// let count = 0;

// const countEl = document.getElementById("count");
// const errorEl = document.getElementById("error");
// const clearBtn = document.getElementById("clearBtn");

// document.getElementById("incrementBtn").addEventListener("click", () => {
//   count++;
//   countEl.textContent = count;
//   errorEl.style.display = "none";
//   clearBtn.style.display = "inline-block";
// });

// document.getElementById("decrementBtn").addEventListener("click", () => {
//   if (count === 0) {
//     errorEl.style.display = "block";
//   } else {
//     count--;
//     countEl.textContent = count;
//     errorEl.style.display = "none";
//   }
// });

// document.getElementById("clearBtn").addEventListener("click", () => {
//   count = 0;
//   countEl.textContent = count;
//   clearBtn.style.display = "none";
//   errorEl.style.display = "none";
// });

// let arr = [
//   { heading: "This is 1", text: "Hello from 1" },
//   { heading: "This is 2", text: "Hello from 2" },
//   { heading: "This is 3", text: "Hello from 3" },
//   { heading: "This is 4", text: "Hello from 4" },
// ];

// let body = document.getElementById("my-body");

// arr.forEach((item, i) => {
//   // build cards via innerHTML
//   body.innerHTML += `
//         <div class="card">
//           <h2>${item.heading}</h2>
//           <p>${item.text}</p>
//         </div>
//       `;
// });

// // now select all cards and attach events
// const cards = document.querySelectorAll(".card");
// cards.forEach((card, i) => {
//   card.addEventListener("click", () => {
//     if ((i + 1) % 2 === 0) {
//       card.style.backgroundColor = "red";
//     } else {
//       card.style.backgroundColor = "orange";
//     }
//   });
// });

// const body = document.getElementById("my-body");
//   const employeesContainer = document.getElementById("employees-container");

// let employeesArr = [];
// let count = 0;

// function addUser() {
//   const nameInput = document.getElementById("name-input");
//   const professionInput = document.getElementById("profession-input");
//   const ageInput = document.getElementById("age-input");
//   const employeesContainer = document.getElementById("employees-container");
//   const error = document.getElementById("errorMessage");


//   const name = nameInput.value;
//   const profession = professionInput.value;
//   const age = ageInput.value;

//   if (!name || !profession || !age) {
//     error.innerHTML = `
//     <p style = "color: red">Error : Please Make sure All the fields are filled before adding in an employee !</p>
//     `;
//     return;
//   }
  
//   error.innerHTML = "";

//   let newEmployee = { name, profession, age };
//   employeesArr.push(newEmployee);
//   count++;

//   employeesContainer.innerHTML += `
//     <div class="employeeTable" id = "employee-${count}">
//       <div class = "employeeDetails">
//       <p>${count}.</p>
//       <p>Name: ${newEmployee.name}</p>
//       <p>Profession: ${newEmployee.profession}</p>
//       <p>Age: ${newEmployee.age}</p>
//       </div>
//       <div class = "employeeDelete">
//       <button class = "delete-btn" data-index="${count-1}">Delete User</button>
//       </div>
//     </div>
    
//   `;

//   nameInput.value = "";
//   professionInput.value = "";
//   ageInput.value = "";

//   newEmployee = {}
// }

// function deleteUser(event) {
//   if (event.target.classList.contains("delete-btn")) {
//     const button = event.target;
//     const indexToDelete = button.dataset.index;

//     employeesArr.splice(indexToDelete, 1);

//     button.parentElement.parentElement.remove();
//   }
// }

// const submitBtn = document.getElementById("add-btn");
// submitBtn.addEventListener("click", addUser);

// employeesContainer.addEventListener("click", deleteUser)

// let todo = ["todo1", "todo2", "todo3"]
// let progress = ["progress1", "progress2", "progress3"];
// let done = ["done1", "done2", "done3"]

// let todoCol = document.getElementById("todo")
// let progressCol = document.getElementById("progress")
// let doneCol = document.getElementById("done")

// function renderTodo() {
//   todoCol.innerHTML = ""
//   todoCol.innerHTML = ` <h1>TODO</h1>`;
// todo.forEach((item, index) => {
//   todoCol.innerHTML += `
//         <div class="task">
//             <p>${item}</p>
//             <button onclick="shiftToRight('todo', ${index})">&rarr;</button>
//         </div>
//   `;
// })
// }

// function renderProgress() {
//   progressCol.innerHTML = "";
//   progressCol.innerHTML = ` <h1>PROGRESS</h1>`;
  
//   progress.forEach((item, index) => {
//   progressCol.innerHTML += `
//         <div class="task">
//             <p>${item}</p>
//             <button onclick="shiftToLeft('progress', ${index})">&larr;</button>
//             <button onclick="shiftToRight('progress', ${index})">&rarr;</button>
//         </div>
//   `;
// })
// }

// function renderDone() {

//   doneCol.innerHTML = "";
//   doneCol.innerHTML = `<h1>DONE</h1>`;

// done.forEach((item, i) => {
//   doneCol.innerHTML += `
//         <div class="task">
//             <p>${item}</p>
//             <button>&rarr;</button>
//         </div>
//   `;
// })
// }

// function shiftToRight(colName, index) {
//   if (colName === 'todo') {
//     let itemToBePushed = todo[index];
//     todo = todo.filter((item, i) => i !== index)
//     console.log("After removal", todo, itemToBePushed)

//     renderTodo()

//     progress.push(itemToBePushed)
//     renderProgress()
//   }

//   if(colName === 'progress') {
//     let itemToBePushed = progress[index];
//     progress = progress.filter((item, i) => i !== index)
//     console.log("After removal ", progress, itemToBePushed)

//     renderProgress()

//     done.push(itemToBePushed)
//     renderDone()
//   }
// }

// function shiftToLeft(colName, index) {
//   if (colName === 'progress') {
//     let itemToBePushed = progress[index];
//     progress = progress.filter((item, i) => i !== index)

//     renderProgress()

//     todo.push(itemToBePushed)
//     renderTodo();
//   }
// }

// renderTodo();
// renderProgress();
// renderDone();


// const inputs = Array.from(document.querySelectorAll('.code-container input'));
// const codeContainer = document.querySelector('.code-container')

// codeContainer.addEventListener('keydown', (e) => {
//   const currentInput = e.target;
//   const currentIndex = inputs.indexOf(currentInput);

//   if (e.key === 'Backspace' && currentIndex > 0) {
//     e.preventDefault()
//     currentInput.value = '';
//     inputs[currentIndex - 1].focus();
//   }
// })

// codeContainer.addEventListener('input', (e) => {
//   const currentInput = e.target;
//   const currentIndex = inputs.indexOf(currentInput);

//   if (currentInput.value.length === currentInput.maxLength && currentIndex < inputs.length -1 ) {
//     inputs[currentIndex + 1].focus()
//   }
// })

// const strongElements  = document.querySelectorAll('strong')

// function highlight() {
//   strongElements.forEach((item) => {
//     item.style.color = 'rgb(0, 128, 0)';
//   })
// }

// function return_normal() {
// strongElements.forEach((item) => {
//   item.style.color = "rgb(0, 0, 0)";
// });
// }

// function createTable() {
//   const rn = prompt("Input number of rows");
//   const cn = prompt("Input number of columns");

//   if (rn < 0 || cn < 0) {
//     alert('Please enter positive values')
//   }

//   if (isNaN(rn) || isNaN(rn)) {
//     return;
//   }

//   const table = document.getElementById("myTable");

//   table.innerHTML = ''

//   for (let i = 0; i < rn; i++) {
//     const row = table.insertRow(i);

//     for (let j = 0; j < cn; j++) {
//       const cell = row.insertCell(j);

//       cell.textContent = `Row-${i} Column-${j}`
//     }
//   }
// }

// if ('speechSynthesis' in window) {
//             const synth = window.speechSynthesis;
//             const textToSpeak = document.querySelector('textarea[name="text"]');
//             const speakButton = document.getElementById('speak');
//             const stopButton = document.getElementById('stop');
//             const voiceSelect = document.getElementById('voices');
//             const rateInput = document.querySelector('input[name="rate"]');
//             const pitchInput = document.querySelector('input[name="pitch"]');
//             const rateValueDisplay = document.getElementById('rate-value');
//             const pitchValueDisplay = document.getElementById('pitch-value');
            
//             let voices = [];
            
//             // Function to populate the voice dropdown
//             function populateVoices() {
//                 voices = synth.getVoices().filter(voice => voice.lang.startsWith('en'));
//                 if (voices.length === 0) {
//                     voiceSelect.innerHTML = '<option value="">No voices available</option>';
//                     speakButton.disabled = true;
//                 } else {
//                     const voiceOptions = voices.map(voice => 
//                         `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
//                     ).join('');
//                     voiceSelect.innerHTML = voiceOptions;
//                     speakButton.disabled = false;
//                 }
//             }

//             // A common issue is that getVoices() returns an empty list initially.
//             // We listen for the 'voiceschanged' event to ensure we get the list.
//             synth.addEventListener('voiceschanged', populateVoices);
            
//             // Speak function
//             function speak() {
//                 // First, cancel any ongoing speech to handle mid-speech voice changes
//                 synth.cancel();

//                 if (textToSpeak.value.trim() === '') {
//                     // Prevent speech if no text is entered
//                     return;
//                 }

//                 const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
//                 const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
                
//                 // Set the selected voice
//                 utterance.voice = selectedVoice || voices[0];
                
//                 // Set the rate and pitch
//                 utterance.rate = rateInput.value;
//                 utterance.pitch = pitchInput.value;

//                 // Listen for an end event to enable the button again (optional)
//                 utterance.onend = () => {
//                     speakButton.disabled = false;
//                 };

//                 // Play the speech
//                 synth.speak(utterance);
//             }

//             // Stop function
//             function stopSpeaking() {
//                 synth.cancel();
//             }

//             // Event listeners
//             speakButton.addEventListener('click', speak);
//             stopButton.addEventListener('click', stopSpeaking);
//             rateInput.addEventListener('input', () => {
//                 rateValueDisplay.textContent = rateInput.value;
//                 if (synth.speaking) {
//                     // Restart speech with new settings if speech is active
//                     speak();
//                 }
//             });
//             pitchInput.addEventListener('input', () => {
//                 pitchValueDisplay.textContent = pitchInput.value;
//                 if (synth.speaking) {
//                     // Restart speech with new settings if speech is active
//                     speak();
//                 }
//             });
            
//             // Initial call to populate voices
//             // This is needed in case the voices are already loaded
//             populateVoices();
            
//         } else {
//             // Fallback for browsers that do not support Web Speech API
//         }

const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const errorMessageEmail = document.getElementById("error-message-email");
const errorMessagePassword = document.getElementById("error-message-password");
const okMessage = document.getElementById("message-ok");

function submitFunction(event) {
  event.preventDefault();

  const isEmailValid = checkEmail()
  const isPasswordValid = checkPassword()

  const confirmed = confirm('Are you sure you want to submit?')

  if (confirmed) {
    alert('successful signup')
    emailInput.value = ''
    passwordInput.value = ''
    okMessage.value = ''
  }
  else {
    window.location.reload()
  }
}

function checkEmail() {
  const emailValue = emailInput.value;

  if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes(".")) {
    errorMessageEmail.textContent = ``
    return true;
  }
}

function checkPassword() {
  const passwordValue = passwordInput.value;

  if (passwordValue.length > 8) {
    errorMessagePassword.textContent = ``
    return true;
  }
}

function checkOverall() {
  const email = checkEmail();
  const password = checkPassword();

  if (email && password) {
    okMessage.textContent = `All good to go`
  }
}

emailInput.addEventListener("input", checkOverall);
passwordInput.addEventListener("input", checkOverall);