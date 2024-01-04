const contactTemplate = document.createElement("template");
contactTemplate.innerHTML = `
<link rel="stylesheet" href="styles/reset.css" />
<link rel="stylesheet" href="styles/styles.css" />
<link rel="stylesheet" href="../styles/reset.css" />
<link rel="stylesheet" href="../styles/styles.css" />
<section class="contact">
    <h1>Contact</h1>
    <div id="contact-content-container">
        <a href="mailto:sales@threedles.com"><span>Email | sales@threedles.com</span></a>
    </div>
</section>`;

class Contact extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(contactTemplate.content);
  }
}
customElements.define("contact-component", Contact);

{
  /* <a href="tel:+7202368183"><span>Phone | (720) 236-8183</span></a> */
}
