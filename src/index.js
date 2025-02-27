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

//Header Section

const aTags = document.querySelectorAll("nav a");
const services_a = document.querySelector("a:nth-of-type(1)");
const product_a = document.querySelector("a:nth-of-type(2)");
const vision_a = document.querySelector("a:nth-of-type(3)");
const features_a = document.querySelector("a:nth-of-type(4)");
const about_a = document.querySelector("a:nth-of-type(5)");
const contact_a = document.querySelector("a:nth-of-type(6)");

aTags.forEach((tag) => tag.classList.add("italic"));

services_a.textContent = siteContent.nav["nav-item-1"];
product_a.textContent = siteContent.nav["nav-item-2"];
vision_a.textContent = siteContent.nav["nav-item-3"];
features_a.textContent = siteContent.nav["nav-item-4"];
about_a.textContent = siteContent.nav["nav-item-5"];
contact_a.textContent = siteContent.nav["nav-item-6"];

const headerImg = document.querySelector("header img");
headerImg.src = siteContent.images["logo-img"];

const ctaText_h1 = document.querySelector(".cta-text h1");
ctaText_h1.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

//Main Content

const features_h4 = document.querySelector(".main-content .top-content .text-content:nth-of-type(1) h4");
features_h4.textContent = siteContent["main-content"]["features-h4"];

const features_p = document.querySelector(".main-content .top-content .text-content:nth-of-type(1) p");
features_p.textContent = siteContent["main-content"]["features-content"];

const about_h4 = document.querySelector(".main-content .top-content .text-content:nth-of-type(2) h4");
about_h4.textContent = siteContent["main-content"]["about-h4"];

const about_p = document.querySelector(".main-content .top-content .text-content:nth-of-type(2) p");
about_p.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent.images["accent-img"];

const services_h4 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) h4");
services_h4.textContent = siteContent["main-content"]["services-h4"];

const services_p = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(1) p");
services_p.textContent = siteContent["main-content"]["services-content"];

const product_h4 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) h4");
product_h4.textContent = siteContent["main-content"]["product-h4"];

const product_p = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(2) p");
product_p.textContent = siteContent["main-content"]["product-content"];

const vision_h4 = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) h4");
vision_h4.textContent = siteContent["main-content"]["vision-h4"];

const vision_p = document.querySelector(".main-content .bottom-content .text-content:nth-of-type(3) p");
vision_p.textContent = siteContent["main-content"]["vision-content"];

//Contact Section

const contact_h4 = document.querySelector(".contact h4");
contact_h4.textContent = siteContent.contact["contact-h4"];

const address_p = document.querySelector(".contact p:nth-of-type(1)");
address_p.textContent = siteContent.contact.address;

const phoneNumber_p = document.querySelector(".contact p:nth-of-type(2)");
phoneNumber_p.textContent = siteContent.contact.phone;

const email_p = document.querySelector(".contact p:nth-of-type(3)");
email_p.textContent = siteContent.contact.email;

//Footer Section

const footerText_a = document.querySelector("footer a");
footerText_a.textContent = siteContent.footer.copyright;
footerText_a.classList.add("bold");
