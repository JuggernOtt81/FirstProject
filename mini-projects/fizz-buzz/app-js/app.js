//start or controller function(get the values from the page)
function getValues() {
  //get the values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;
  let limitValue = document.getElementById("limitValue").value;

  //parse into Integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  limitValue = parseInt(limitValue);

  if (
    Number.isInteger(fizzValue) &&
    Number.isInteger(buzzValue) &&
    Number.isInteger(limitValue)
  ) {
    //define numbers by calling fizzBuzz funtion
    fizzBuzz(fizzValue, buzzValue, limitValue);

  } else {
    alert("YOU MUST ENTER INTEGERS!");
  }
}

//build the array of results
function fizzBuzz(fizzValue, buzzValue, limitValue) {
  //init the returnArray
  let returnArray = [];

  //loop from 1-vl
  let lv = limitValue;
  let fb = fizzValue * buzzValue;
  let i = 1;
  while (i <= lv) {
    if (i % fb == 0) {
      returnArray.push(`FIZZ <i class="fa-solid fa-bolt"></i> BUZZ`);
    } else if (i % buzzValue == 0) {
      returnArray.push(`<span">BUZZ</span>`);
    } else if (i % fizzValue == 0) {
      returnArray.push(`<span>FIZZ</span>`);
    } else {
      returnArray.push(i);
    }
    i++;
  }
  //pass the array to the displayData function
  displayData(returnArray);
}

//define displayData
function displayData(fbArray) {
  //loop over the array create a tablerow for each item.
  let templateRows = "";
  for (let i = 0; i < fbArray.length; i++) {
    templateRows += `<tr><td>${fbArray[i]}</td></tr>`;
  }
  document.getElementById("results").innerHTML = templateRows;
}

function resetTable() {
  let templateRows = "";
  document.getElementById("results").innerHTML = templateRows;
}
//
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
