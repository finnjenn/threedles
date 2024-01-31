const bannerTemplate = document.createElement("template");
bannerTemplate.innerHTML = `
<link rel="stylesheet" href="styles/reset.css" />
<link rel="stylesheet" href="styles/styles.css" />
<link rel="stylesheet" href="../styles/reset.css" />
<link rel="stylesheet" href="../styles/styles.css" />
<div class="banner">Free Shipping on Orders $50+! (U.S. ONLY)</div>`;

class Banner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(bannerTemplate.content);
  }
}
customElements.define("banner-component", Banner);
