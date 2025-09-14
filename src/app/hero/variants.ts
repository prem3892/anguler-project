import { faArrowsToCircle, faLayerGroup, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import { data } from "./types";

export const heroData: data ={
    video: './images/HOMEPAGE_1.mp4',
    h1: "We have got you covered no matter what!",
    button: "Shop Custom Covers now",
    vector: [
       {icon: faArrowsToCircle, text: "Snug fit"},
       {icon: faLayerGroup, text: "Multiple fabric options"},
       {icon: faUmbrella, text: "Weatherproof"},
    ]
}