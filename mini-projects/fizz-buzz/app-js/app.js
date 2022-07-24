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

  if (
    Number.isInteger(fizzInt) &&
    Number.isInteger(buzzInt) &&
    Number.isInteger(limitInt)
  ) {
    
    //define numbers by calling fizzBuzz funtion
    let fbArray = fizzBuzz(fizzInt, buzzInt, limitInt);
    
  } 
  else {
    alert("YOU MUST ENTER INTEGERS!");
  }
}

//build the array of results
function fizzBuzz(fizzInt, buzzInt, limitInt) {
  //init the returnArray
  let returnArray = [];

  //loop from 1-vl
  let lv = limitInt;
  let fb = fizzInt * buzzInt;
  let i = 1;
  while (i <= lv) {
    if (i % fb == 0) {
      returnArray.push(`FIZZ <i class="fa-solid fa-bolt"></i> BUZZ`);
    } else if (i % buzzInt == 0) {
      returnArray.push(`<span">BUZZ</span>`);
    } else if (i % fizzInt == 0) {
      returnArray.push(`<span>FIZZ</span>`);
    } else {
      returnArray.push(i);
    }
    i++;
  }
    return returnArray;
}

//define displayData
function displayData(returnArray) {

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";
    
    for (let i = 0; i < returnArray.length; i+= buzzInt){
        let tableRow = document.importNode(templateRow.contentEditable, true);
        for (let x = 0; x < buzzInt; x++){
        //grab use the to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[x].textContent = returnArray[i];        
        tableBody.appendChild(tableRow);
        }
    }


/*   //loop over the array create a tablerow for each item.
  let templateRows = "";

  for (let i = 0; i < returnArray.length; i++) {
    templateRows += `<tr><td>${returnArray[i]}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows; */
}


function resetTable() {
  let templateRows = "";
  document.getElementById("results").innerHTML = templateRows;
}
//
