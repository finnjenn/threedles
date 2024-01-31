const descHeaderTemplate = document.createElement("template");
descHeaderTemplate.innerHTML = `
<link rel="stylesheet" href="../styles/reset.css" />
<link rel="stylesheet" href="../styles/viewProduct.css" />
<h2>Description by Kurdy Biggs</h2>`;

class DescHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(descHeaderTemplate.content);
  }
}
customElements.define("desc-header", DescHeader);
