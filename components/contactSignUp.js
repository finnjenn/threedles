const contactSignUpTemplate = document.createElement("template");
contactSignUpTemplate.innerHTML = `
<link rel="stylesheet" href="styles/reset.css" />
<link rel="stylesheet" href="styles/styles.css" />
<link rel="stylesheet" href="../styles/reset.css" />
<link rel="stylesheet" href="../styles/styles.css" />
<section id="group-contact-sign-up">
      <div id="sign-up" class="background-light">
        <h2>Sign Up For Threedles News</h2>
        <a target="_blank" href="signUp.html"><button id="sign-up-btn">Sign Up</button></a>
      </div>
      <div id="contact-container">
        <h2>Contact</h2>
        <p>
          <a href="mailto:sales@threedles.com">Email | sales@threedles.com</a>
        </p>
      </div>
    </section>`;

class ContactSignUp extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(contactSignUpTemplate.content);
  }
}
customElements.define("contact-sign-up-component", ContactSignUp);

{
  /* <a href="tel:+7202368183"><span>Phone | (720) 236-8183</span></a> */
}
