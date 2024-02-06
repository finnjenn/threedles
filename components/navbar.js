const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
  <link rel="stylesheet" href="styles/reset.css" />
  <link rel="stylesheet" href="styles/nav.css" />
  <link rel="stylesheet" href="../styles/reset.css" />
  <link rel="stylesheet" href="../styles/nav.css" />
  <style>
    nav,
    #dropdown {
      z-index: 9999;
    }
    #nav-toggle {
      z-index: 10000;
    }
  </style>

  <nav>
  <button id="nav-toggle" aria-controls="primary-nav" aria-expanded="false">
      <span class="sr-only">Menu</span>
  </button>
  <a href="index.html" id="logo-link">
        <img
          id="nav-logo"
          src="assets/threedlesLogoTransparent.png"
          alt="Threedles Logo"
        />
      </a>
      <ul id="primary-nav" data-mobile-nav-visible="false">
        <li><a class="nav-link" href="index.html">Home</a></li>
        <li><a class="nav-link" href="about.html">About</a></li>
        <li id="shop-item">
          <span class="nav-link"
            >Shop
            <img
              id="dropdown-img"
              src="assets/dropdown.webp"
              alt="Dropdown Arrow Icon"
          /></span>
          <ul id="dropdown">
            <li class="dropdown-item">
              <a class="dropdown-link" href="shopAll.html">Shop All</a>
            </li>
            <li class="dropdown-item">
              <a class="dropdown-link" href="holiday.html">Holiday</a>
            </li>
            <li class="dropdown-item">
              <a class="dropdown-link" href="beginner.html"
                >Beginner Friendly</a
              >
            </li>
            <li class="dropdown-item">
              <a class="dropdown-link" href="advanced.html">Advanced Designs</a>
            </li>
            <li class="dropdown-item">
              <a class="dropdown-link" href="3D.html">3D Pieces</a>
            </li>
          </ul>
        </li>
        <li><a class="nav-link" href="faq.html">FAQs</a></li>
        <li><a class="nav-link" href="videos.html">Videos</a></li>
        <li id="cart-item">
          <span class="sr-only">Cart</span>
          <a href="checkout.html" class="nav-link">
            <button id="cart-btn">
              <img
                src="assets/cart-line-icon.png"
                alt="Cart Icon"
                id="cart-icon"
              />
            </button>
          </a>
        </li>
        <li>
          <a href="#contact"><button id="contact-btn">Contact</button></a>
        </li>
      </ul>
    </nav>
    `;
class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(navbarTemplate.content);
  }
}
customElements.define("navbar-component", Navbar);
