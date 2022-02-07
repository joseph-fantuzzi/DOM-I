const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

//Caching the DOM

const aTags = document.querySelectorAll("nav a");
const services_a = document.querySelector("a:nth-of-type(1)");
const product_a = document.querySelector("a:nth-of-type(2)");
const vision_a = document.querySelector("a:nth-of-type(3)");
const features_a = document.querySelector("a:nth-of-type(4)");
const about_a = document.querySelector("a:nth-of-type(5)");
const contact_a = document.querySelector("a:nth-of-type(6)");

//Manipulation

aTags.forEach((tag) => tag.classList.add("italic"));

services_a.textContent = "Services";
product_a.textContent = "Product";
vision_a.textContent = "Vision";
features_a.textContent = "Features";
about_a.textContent = "About";
contact_a.textContent = "Contact";

const headerImg = document.querySelector("header img");
headerImg.src = "http://localhost:9000/img/logo.png";

const ctaText_h1 = document.querySelector(".cta-text h1");
ctaText_h1.textContent = "DOM Is Awesome";

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = "Get Started";

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "http://localhost:9000/img/cta.png";
