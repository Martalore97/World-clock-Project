//LosAngeles
setInterval(function () {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    `h:mm:ss`
  )} <small>${losAngelesTime.format("A")}</small>`;
}, 1000);

//Sydney
setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    `h:mm:ss`
  )} <small>${sydneyTime.format("A")}</small>`;
}, 1000);

//Tokyo
setInterval(function () {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format(
    `h:mm:ss`
  )} <small>${tokyoTime.format("A")}</small>`;
}, 1000);

//Paris
setInterval(function () {
  let ParisElement = document.querySelector("#paris");
  let ParisDateElement = ParisElement.querySelector(".date");
  let ParisTimeElement = ParisElement.querySelector(".time");
  let ParisTime = moment().tz("Europe/Rome");

  ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
  ParisTimeElement.innerHTML = `${ParisTime.format(
    `h:mm:ss`
  )} <small>${ParisTime.format("A")}</small>`;
}, 1000);
