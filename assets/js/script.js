//Global variables
let currentHour = dayjs().hour() - 9;
let saveBtn = document.querySelectorAll('.saveBtn');

//Code to display the current date in the header of the page.
let currentDay = document.getElementById('currentDay');
currentDay.append(dayjs().format('dddd, MMMM D YYYY, h:mm:ss A'))


//Function to set the hours for a standard business day in a 24 hour clock
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

//Array of the 24 hour clock, leaving the hours before 9am blank for the function below to operate correctly
  let hourList = [
    "", "", "", "", "", "", "", "", "",
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

  //to set the past, present & future colours for the current hour
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

  //Function to save to-do task items into local storage on mouse button click for each hour
    $(saveBtn).click(function () {
        // Get nearby values via  JQuery
        let text = $(this).siblings("textarea").val();
        let time = $(this).parent().attr("id");
        // Save text in local storage
        localStorage.setItem(time, text);
    })

    //Retrieve stored hourly to-do tasks from local storage
    let hourNineValue = localStorage.getItem('hour-9')
    $("#hour-9 textarea").val(hourNineValue)

    let hourTenValue = localStorage.getItem('hour-10')
    $("#hour-10 textarea").val(hourTenValue)

    let hourElevenValue = localStorage.getItem('hour-11')
    $("#hour-11 textarea").val(hourElevenValue)

    let hourTwelveValue = localStorage.getItem('hour-12')
    $("#hour-12 textarea").val(hourTwelveValue)

    let hourThirteenValue = localStorage.getItem('hour-13')
    $("#hour-13 textarea").val(hourThirteenValue)

    let hourFourteenValue = localStorage.getItem('hour-14')
    $("#hour-14 textarea").val(hourFourteenValue)

      let hourFifteenValue = localStorage.getItem('hour-15')
    $("#hour-15 textarea").val(hourFifteenValue)

    let hourSixteenValue = localStorage.getItem('hour-16')
    $("#hour-16 textarea").val(hourSixteenValue)

    let hourSeventeenValue = localStorage.getItem('hour-17')
    $("#hour-17 textarea").val(hourSeventeenValue)



  });

 