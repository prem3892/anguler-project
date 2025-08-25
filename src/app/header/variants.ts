import { data, HeaderDataNew } from "./types";
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';



export const HeaderData: data={
    headerImg: "./images/logo.png",
    headerFill: "search",
    headerRight: ["Order Tracking" , "My Account", "Wishlist", "My Cart"],
    icons: ["icon1", "2", "3"],
    headerBottom: [
    { title: "Patio Furniture Covers", sub: ["Outdoor Chair Covers ", "Table Covers", "Sofa Covers", "Chair Covers", "Table Covers", "Sofa Covers"] },
    { title: "Services", sub: ["Installation", "Repair", "Chair Covers", "Table Covers", "Sofa Covers"] },
    { title: "Solar Shades", sub: ["Indoor", "Outdoor", "Chair Covers", "Table Covers", "Sofa Covers"] },
    { title: "Custom Covers", sub: ["Chair Covers", "Table Covers", "Sofa Covers", "Chair Covers", "Table Covers", "Sofa Covers"] },
    { title: "Tarps & Curtains", sub: ["Clear Tarps", "Industrial Curtains", "Chair Covers", "Table Covers", "Sofa Covers"] },
    { title: "Marine Covers", sub: ["Boat Covers", "Jet Ski Covers", "Chair Covers", "Table Covers", "Sofa Covers"] },
    { title: "Car Covers", sub: ["Sedan", "SUV", "Truck", "Chair Covers", "Table Covers", "Sofa Covers"] }
  ]
} 

export const headerDataNew:HeaderDataNew={
sub:[{label:"helo world", icon:faAngleDoubleLeft}]
}
