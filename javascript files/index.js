// Preloader
const preloader = document.getElementById('preloader');
preloader.style.display = 'flex'; // Initially show the preloader

// Position the preloader to cover the entire viewport and overlap everything
preloader.style.position = 'fixed';
preloader.style.zIndex = 9999; // Ensure it's on top of everything

setTimeout(() => {
  preloader.style.display = 'none'; // Hide preloader after 2 seconds
  document.getElementById('main-content').style.display = 'flex';
  document.body.style.overflow = 'auto'; // Re-enable scrollbars
}, 1700);

//API Implementation
const apikey = "AWRb+qRVNf59POxj0dPR/w==KHVLxw9b8aGM6hKw";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apikey
  }
}

const btnEl0 = document.getElementById("btn0");
const btnEl1 = document.getElementById("btn1");
const btnEl2 = document.getElementById("btn2");
const btnEl3 = document.getElementById("btn3");
const btnEl4 = document.getElementById("btn4");
const btnEl5 = document.getElementById("btn5");
const btnEl6 = document.getElementById("btn6");
const btnEl7 = document.getElementById("btn7");
const btnEl8 = document.getElementById("btn8");
const btnEl9 = document.getElementById("btn9");
const btnEl10 = document.getElementById("btn10");
const btnEl11 = document.getElementById("btn11");
const btnEl12 = document.getElementById("btn12");
const btnEl13 = document.getElementById("btn13");
const btnEl14 = document.getElementById("btn14");
const btnEl15 = document.getElementById("btn15");
const btnEl16 = document.getElementById("btn16");

const infoEl0 = document.getElementById("info");
const infoEl1 = document.getElementById("info");
const infoEl2 = document.getElementById("info");
const infoEl3 = document.getElementById("info");
const infoEl4 = document.getElementById("info");
const infoEl5 = document.getElementById("info");
const infoEl6 = document.getElementById("info");
const infoEl7 = document.getElementById("info");
const infoEl8 = document.getElementById("info");
const infoEl9 = document.getElementById("info");
const infoEl10 = document.getElementById("info");
const infoEl11 = document.getElementById("info");
const infoEl12 = document.getElementById("info");
const infoEl13 = document.getElementById("info");
const infoEl14 = document.getElementById("info");
const infoEl15 = document.getElementById("info");
const infoEl16 = document.getElementById("info");

const apiurl0 = "https://api.api-ninjas.com/v1/inflation?country=Austria";
const apiurl1 = "https://api.api-ninjas.com/v1/inflation?country=Belgium";
const apiurl2 = "https://api.api-ninjas.com/v1/inflation?country=Canada";
const apiurl3 = "https://api.api-ninjas.com/v1/inflation?country=Chile";
const apiurl4 = "https://api.api-ninjas.com/v1/inflation?country=Estonia";
const apiurl5 = "https://api.api-ninjas.com/v1/inflation?country=Germany";
const apiurl6 = "https://api.api-ninjas.com/v1/inflation?country=Hungary";
const apiurl7 = "https://api.api-ninjas.com/v1/inflation?country=Iceland";
const apiurl8 = "https://api.api-ninjas.com/v1/inflation?country=Ireland";
const apiurl9 = "https://api.api-ninjas.com/v1/inflation?country=Luxembourg";
const apiurl10 = "https://api.api-ninjas.com/v1/inflation?country=Norway";
const apiurl11 = "https://api.api-ninjas.com/v1/inflation?country=Portugal";
const apiurl12 = "https://api.api-ninjas.com/v1/inflation?country=Russia";
const apiurl13 = "https://api.api-ninjas.com/v1/inflation?country=Slovakia";
const apiurl14 = "https://api.api-ninjas.com/v1/inflation?country=Sweden";
const apiurl15 = "https://api.api-ninjas.com/v1/inflation?country=Switzerland";
const apiurl16 = "https://api.api-ninjas.com/v1/inflation?country=The Netherlands";

async function getCountry0() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl0, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl0.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


async function getCountry1() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl1, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl1.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry2() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl2, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl2.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry3() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl3, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl3.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry4() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl4, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl4.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry5() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl5, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl5.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry6() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl6, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl6.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry7() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl7, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl7.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry8() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl8, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl8.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry9() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl9, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl9.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry10() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl10, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl10.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry11() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl11, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl11.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry12() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl12, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl12.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry13() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl13, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl13.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry14() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl14, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl14.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry15() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl15, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl15.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getCountry16() {
  try {
    // Start fade-out
    infosec1.style.opacity = 0;

    const response = await fetch(apiurl16, options);
    const data = await response.json();

    // Construct information string
    const infoString = `Country: ${data[0].country}\n` +
      `Type: ${data[0].type}\n` +
      `Period: ${data[0].period}\n` +
      `Monthly Rate: ${data[0].monthly_rate_pct}\n` +
      `Yearly Rate: ${data[0].yearly_rate_pct}`;

    // Update content and fade in
    infoEl16.innerText = infoString;
    infosec1.style.opacity = 1;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

btnEl0.addEventListener("click", getCountry0);
btnEl1.addEventListener("click", getCountry1);
btnEl2.addEventListener("click", getCountry2);
btnEl3.addEventListener("click", getCountry3);
btnEl4.addEventListener("click", getCountry4);
btnEl5.addEventListener("click", getCountry5);
btnEl6.addEventListener("click", getCountry6);
btnEl7.addEventListener("click", getCountry7);
btnEl8.addEventListener("click", getCountry8);
btnEl9.addEventListener("click", getCountry9);
btnEl10.addEventListener("click", getCountry10);
btnEl11.addEventListener("click", getCountry11);
btnEl12.addEventListener("click", getCountry12);
btnEl13.addEventListener("click", getCountry13);
btnEl14.addEventListener("click", getCountry14);
btnEl15.addEventListener("click", getCountry15);
btnEl16.addEventListener("click", getCountry16);