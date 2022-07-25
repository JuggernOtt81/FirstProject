
//start or controller function(get the values from the page)
function getValues() {
  //get the values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let limitValue = document.getElementById("limitValue").value;

  //parse into Integers
  fizzInt = parseInt(fizzValue);
  buzzInt = parseInt(buzzValue);
  limitInt = parseInt(limitValue);

  //validate that entries are integers
  if (
    Number.isInteger(fizzInt) &&
    Number.isInteger(buzzInt) &&
    Number.isInteger(limitInt)
  ) {
    //define numbers by calling fizzBuzz funtion
    fizzBuzz(fizzInt, buzzInt, limitInt);
  } else {
    alert("YOU MUST ENTER INTEGERS!");
  }
}

//build the array of results
function fizzBuzz(fizzInt, buzzInt, limitInt) {
  //init the returnArray
  let returnArray = [];

  //loop from 1-li
  let li = limitInt;
  let fb = fizzInt * buzzInt;
  let i = 1;
  while (i <= li) {
    if (i % fb == 0) {
      returnArray.push(`FIZZ <i  style="color: #f7e900" class="fa-solid fa-bolt"></i> BUZZ`);
    } else if (i % buzzInt == 0) {
      returnArray.push(`<span  style="color: red">BUZZ</span>`);
    } else if (i % fizzInt == 0) {
      returnArray.push(`<span  style="color: royalblue">FIZZ</span>`);
    } else {
      returnArray.push(i);
    }
    i++;
  }
  //pass the array to the displayData function
  displayData(returnArray);
}

//dynamically display table, width based on buzzInt
function displayData(fbArray) {
  //loop over the array create a tablerow for each item.
  let templateRows = "";
  for (let i = 0; i < fbArray.length; i++) {
    var z = "";
    //loop over the row defined by buzzInt
    for (let x = 0; x < buzzInt; x++) {
      z += `<td>${fbArray[i+x]}</td>`;
    }
    templateRows += `<tr>${z}</tr>`;
    i += buzzInt-1;
  }
  document.getElementById("results").innerHTML = templateRows;
}

//resets the table
function resetTable() {
  let templateRows = "";
  document.getElementById("results").innerHTML = templateRows;