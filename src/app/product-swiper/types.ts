import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface data {
    h1: string;
    card: {
        img: string;
        title: string;
        icon: IconDefinition;
        price: string;
        color: string[];
    }[];
}