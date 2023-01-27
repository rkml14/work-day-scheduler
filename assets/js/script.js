// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


//global variables
let currentHour = dayjs().hour() - 9;
let saveBtn = document.querySelectorAll('.saveBtn');
let toDoList = document.querySelectorAll('.description');


//Code to display the current date in the header of the page.
let currentDay = document.getElementById('currentDay');
currentDay.append(dayjs().format('dddd, MMMM D YYYY, h:mm:ss A'))

// setInterval(() => {
//   let presentDateTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss A');
//   document.getElementById("currentDay").innerText = presentDateTime;
// }, 1000);


$(function () {
  const hourNine = document.getElementById('hour-9');
  const hourTen = document.getElementById('hour-10');
  const hourEleven = document.getElementById('hour-11');
  const hourTwelve = document.getElementById('hour-12');
  const hourThirteen = document.getElementById('hour-13');
  const hourFourteen = document.getElementById('hour-14');
  const hourFifteen = document.getElementById('hour-15');
  const hourSixteen = document.getElementById('hour-16');
  const hourSeventeen = document.getElementById('hour-17');


  let hourList = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    hourNine,
    hourTen,
    hourEleven,
    hourTwelve,
    hourThirteen,
    hourFourteen,
    hourFifteen,
    hourSixteen,
    hourSeventeen,
  ]

  for (let i = 9; i < hourList.length; i++) {
    if (dayjs().hour() == [i]) {
      hourList[i].setAttribute('style', 'background-color: #ff6961');
    } else if (dayjs().hour() > [i]) {
      console.log('past');
      hourList[i].setAttribute('style', 'background-color: #d3d3d3')
    } else {
      hourList[i].setAttribute('style', 'background-color: #77dd77');
    };
  };

  //Function to save to-do task items, store in local storage & retrieve
  
  $(saveBtn).click(function () {
        // Get nearby values of the description in JQuery
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(time, text);
    })

  });







// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



   // for (let i = 0; i < 9; i++) {
  //   if (currentHour == i) {
  //     console.log('present');
  //   }
  //   else if (currentHour > i) {
  //     console.log('past');
  //   }
  //   else if (currentHour < i) {
  //     console.log('future');
  //   };
  // };


  // let toDoList = document.querySelectorAll('.description');
//   var student = document.getElementById("student-names");
// var grade = document.getElementById("grades");
// var comment = document.getElementById("msg");


//   var studentGrade = {
//     student: student.value,
//     grade: grade.value,
//     comment: comment.value.trim()
//   };
//   localStorage.setItem("studentGrade", JSON.stringify(studentGrade));

  // $(“.saveBtn”).on(“click”, function () {
  //   // $(this) <== the button element clicked.
  //   // $(this).siblings(‘textarea’)  <== the textarea element
  //   // $(this).parent() <== div element which is the parent element of button.
  //   let textAreaValue = $(this).siblings(“textarea”).val();
  //   let timeBlockId = $(this).parent().attr(‘id’);
  //   ///add text value to the local storage///
  //   localStorage.setItem(timeBlockId, textAreaValue);
  // })


  // var hourNineValue = localStorage.getItem(“hour - 9”)
  // $(“#hour - 9 textarea”).val(hourNineValue)