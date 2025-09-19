import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
export interface data {
  headerImg: string;
  headerFill: string;
  icons: IconDefinition[];
  headerBottom: {
    title: string;
    sub?: string[];
  }[];
  login: string;
  register: string;
  span: string;
}

export interface HeaderDataNew {
  sub: { label: string; icon: IconDefinition; path?: string }[];
}
