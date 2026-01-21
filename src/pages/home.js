const home = () => {
  const content = document.getElementById("content");
  content.textContent = "";

  const header = document.createElement("h1");
  header.textContent = "EquiVocado";
  content.appendChild(header);

  const introText = document.createElement("div");
  introText.textContent = "The best avocados in town!";
  content.appendChild(introText);

  const hourInfo = document.createElement("div");
  hourInfo.textContent = "Open daily from 8 AM to 8 PM";
  content.appendChild(hourInfo);

  const locInfo = document.createElement("div");
  locInfo.textContent = "Located at 123 Green St, Avocadoville";
  content.appendChild(locInfo); 

  const homeDiv = document.createElement("div");
  content.appendChild(homeDiv);

};


export default home;
