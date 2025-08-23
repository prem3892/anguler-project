import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface data {
    headerImg: string;
    headerFill: string;
    headerRight: string[];
    headerBottom: {
    title: string;
    sub?: string[];
  }[];
}



export interface HeaderDataNew{
 sub: { label: string; icon: IconDefinition }[];
}
