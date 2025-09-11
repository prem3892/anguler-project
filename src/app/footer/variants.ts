import { faAppleAlt, faDatabase, faDiceSix, faEnvelope, faLocationDot, faPaintBrush, faPhone, faThList, faTruckFast, faTShirt, faUmbrella, } from "@fortawesome/free-solid-svg-icons";
import { data } from "./types";
// import { faApplePay } from "@fortawesome/free-brands-svg-icons";

export const footerData: data = {
    newsletterText1: "Sign Up to Our Newsletter and Get",
    newsletterText2: "20% OFF + Free shipping*",
    updatesIcon: faTruckFast,
    locationIcon: faLocationDot,
    phoneIcon: faPhone,
    EmailIcon: faEnvelope,
    list1: ["Home", "About Us", "Contact Us", "Blog", "FAQs", "Privacy Policy", "Terms & Conditions"],
    list2: ["Our Fabrics", "Commercial Sales", "Customer Reviews", "Return Policy", "So far we've covered", "Gift Cards", "COVID-19 Measures"],
    list3: ["Shipping & Returns", "Track Your Order", "My Account", "Wishlist", "My Cart", "Find a Store", "Become a Dealer"],
    payments: [faAppleAlt, faDiceSix, faTruckFast, faUmbrella, faPaintBrush, faDatabase],
    socialIcons:[ faTruckFast, faEnvelope, faTShirt, faThList, faTShirt]
}