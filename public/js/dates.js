dayHeader();
loadJson();

// Todays-date calculator
let day = new Date(),
  month = day.getMonth() + 1,
  weekDay = day.getDate();
let today = `${month}/${(weekDay < 10 ? '0' : '') + weekDay}`;

// tomorrow calculator
let day2 = new Date(),
  month2 = day2.getMonth() + 1,
  weekDay2 = day2.getDate() + 1;
let today2 = `${month2}/${(weekDay2 < 10 ? '0' : '') + weekDay2}`;

// 2 days away from today
let day3 = new Date(),
  month3 = day3.getMonth() + 1,
  weekDay3 = day3.getDate() + 2;
let today3 = `${month3}/${(weekDay3 < 10 ? '0' : '') + weekDay3}`;

// 3 days away from today
let day4 = new Date(),
  month4 = day4.getMonth() + 1,
  weekDay4 = day4.getDate() + 3;
let today4 = `${month4}/${(weekDay4 < 10 ? '0' : '') + weekDay4}`;

// 4 days away from today
let day5 = new Date(),
  month5 = day5.getMonth() + 1,
  weekDay5 = day5.getDate() + 4;
let today5 = `${month5}/${(weekDay5 < 10 ? '0' : '') + weekDay5}`;

// 5 days away from today
let day6 = new Date(),
  month6 = day6.getMonth() + 1,
  weekDay6 = day6.getDate() + 5;
let today6 = `${month6}/${(weekDay6 < 10 ? '0' : '') + weekDay6}`;


// 6 days away from today
let day7 = new Date(),
  month7 = day7.getMonth() + 1,
  weekDay7 = day7.getDate() + 6;
let today7 = `${month7}/${weekDay7}`;



// A method that loops through the jsonFile (daysheader) which contains dates and days to add, to the main side where movies show a week ahead
function dayHeader() {
  fetch("json/daysHeader.json")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {

      for (let i = 0; i < data.length; i++) {

        // One variable for each day
        const day1 = document.querySelector(".day1");
        const day2 = document.querySelector(".day2");
        const day3 = document.querySelector(".day3");
        const day4 = document.querySelector(".day4");
        const day5 = document.querySelector(".day5");
        const day6 = document.querySelector(".day6");
        const day7 = document.querySelector(".day7");

        // Variable for looping through each day
        let day = data[i].day;

        // Instead of changing in the jsonfile i made a split - join, where in my oppinion dates looks much better this way
        let date = data[i].date.split("-").join("/").slice(5);

        // Depending on what date it is, this variable (textH) will apear in each date, from today and 6 days ahead where diffrent dates and days will be shown
        let textH = `<div class="headerStyle"> ${day} ${date} </div> `;

        if (today <= date && date <= today7) {

          if (date == today) {
            day1.innerHTML += textH;
          }
          if (date == today2) {
            day2.innerHTML += textH;
          }
          if (date == today3) {
            day3.innerHTML += textH;
          }
          if (date == today4) {
            day4.innerHTML += textH;
          }
          if (date == today5) {
            day5.innerHTML += textH;
          }
          if (date == today6) {
            day6.innerHTML += textH;
          }
          if (date == today7) {
            day7.innerHTML += textH;
          }

        }
      }
    })
    .catch(function (err) {
      console.log(err)
    });
}

// A method that loops through the jsonFile (shows) which contains (images, auditoriums, movie-name and time) to add, to the main side where movies show a week ahead
function loadJson() {
  fetch("json/shows.json ")
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.length; i++) {

        // variable for each day
        const monday = document.querySelector(".monday");
        const tuesday = document.querySelector(".tuesday");
        const wednesday = document.querySelector(".wednesday");
        const thursday = document.querySelector(".thursday");
        const friday = document.querySelector(".friday");
        const saturday = document.querySelector(".saturday");
        const sunday = document.querySelector(".sunday");

        // Variable for looping through each image, auditorium, movie-name, day and time
        let aud = data[i].auditorium;
        let img = data[i].img;
        let film = data[i].film;
        let time = data[i].time;
        let day = data[i].day;

        // Instead of changing in the jsonfile i made a split - join, where in my oppinion dates looks much better this way
        let date = data[i].date.split("-").join("/").slice(5);

        // Depending on what day it is, this variable (texts) will apear in each day, from today and 6 days ahead where diffrent shows will be shown
        let texts = `<img class="imageGenerator"  src=${img}>  <p class="line1">  </p> <div class="film"  <div class="film"> ${film} </div>  <div class="aud"> ${aud}</div>   <div class="time">${time} </div>`

        if (today <= date && date <= today7) {

          if (day === 'Måndag') {
            monday.innerHTML += texts;
          }
          if (day === 'Tisdag') {
            tuesday.innerHTML += texts;
          }
          if (day === 'Onsdag') {
            wednesday.innerHTML += texts;
          }
          if (day === 'Torsdag') {
            thursday.innerHTML += texts;
          }
          if (day === 'Fredag') {
            friday.innerHTML += texts;
          }
          if (day === 'Lördag') {
            saturday.innerHTML += texts;
          }
          if (day === 'Söndag') {
            sunday.innerHTML += texts;
          }
        }
      }

    })
    .catch(function (err) {
      console.log(err)
    });
}
