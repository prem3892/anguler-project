import { data, HeaderDataNew } from './types';
import {
  faHeart,
  faImage,
  faMicrophone,
  faPhone,
  faSearch,
  faTruckFast,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export const HeaderData: data = {
  headerImg: './images/logo.png',
  headerFill: 'search',
  icons: [faSearch, faImage, faMicrophone],
  headerBottom: [
    {
      title: 'Patio Furniture Covers',
      sub: [
        'Outdoor Chair Covers ',
        'Table Covers',
        'Sofa Covers',
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
      ],
    },
    {
      title: 'Services',
      sub: [
        'Installation',
        'Repair',
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
      ],
    },
    {
      title: 'Solar Shades',
      sub: ['Indoor', 'Outdoor', 'Chair Covers', 'Table Covers', 'Sofa Covers'],
    },
    {
      title: 'Custom Covers',
      sub: [
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
      ],
    },
    {
      title: 'Tarps & Curtains',
      sub: [
        'Clear Tarps',
        'Industrial Curtains',
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
      ],
    },
    {
      title: 'Marine Covers',
      sub: [
        'Boat Covers',
        'Jet Ski Covers',
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
      ],
    },
    {
      title: 'Car Covers',
      sub: [
        'Sedan',
        'SUV',
        'Truck',
        'Chair Covers',
        'Table Covers',
        'Sofa Covers',
      ],
    },
  ],
};

export const headerDataNew: HeaderDataNew = {
  sub: [
    { label: 'Order Tracking', icon: faTruckFast },
    { label: 'My Account', icon: faUser },
    { label: 'About Us', icon: faHeart, path: '/about' },
    { label: 'Contact Us', icon: faPhone, path: '/contact' },
  ],
};
