const contact = () => {
  const content = document.getElementById("content");
  content.textContent = "";

  const header = document.createElement("h1");
  header.textContent = "CONTACT US";
  content.appendChild(header);

  const contactInfo = document.createElement("div");
  contactInfo.textContent = "Contact us at contact@equivocado.com or call (555) 123-4567";
  content.appendChild(contactInfo);

};


export default contact;
