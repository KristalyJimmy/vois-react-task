import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';
import item4 from '../assets/item4.png';
import item5 from '../assets/item5.png';
import item6 from '../assets/item6.png';
import item7 from '../assets/item7.png';
import item8 from '../assets/item8.png';

const products = [
  {
    id: 1,
    name: "Poly Edge 550",
    price: 30,
    image: item1,
    description: "Professional-grade desk phone for hybrid work.",
    features: [
      { key: "Display", value: "3.5” color LCD" },
      { key: "Connectivity", value: "PoE, RJ9" },
      { key: "HD Voice", value: "Yes" }
    ]
  },
  {
    id: 2,
    name: "Poly Edge E320",
    price: 30,
    image: item2,
    description: "Entry-level desk phone with modern features.",
    features: [
      { key: "Lines", value: "2" },
      { key: "Ethernet", value: "10/100" },
      { key: "USB Port", value: "No" }
    ]
  },
  {
    id: 3,
    name: "Poly Edge B30",
    price: 210,
    image: item3,
    description: "Reliable business desk phone with HD voice.",
    features: [
      { key: "HD Voice", value: "Yes" },
      { key: "Power", value: "PoE" },
      { key: "Ethernet", value: "Gigabit" }
    ]
  },
  {
    id: 4,
    name: "Nokia 3210",
    price: 2010,
    image: item4,
    description: "Legendary phone. Unbreakable. Classic nostalgia.",
    features: [
      { key: "Battery Life", value: "7 days" },
      { key: "Snake Game", value: "Yes" },
      { key: "Connectivity", value: "2G" }
    ]
  },
  {
    id: 5,
    name: "Blackwire 52xx",
    price: 29,
    image: item5,
    description: "Wired headset with crystal-clear audio.",
    features: [
      { key: "Connection", value: "USB-A / USB-C" },
      { key: "Mic", value: "Noise-Cancelling" },
      { key: "Wearing Style", value: "Over-the-head" }
    ]
  },
  {
    id: 6,
    name: "Voyager 43xx",
    price: 29,
    image: item6,
    description: "Wireless headset for mobile and PC use.",
    features: [
      { key: "Bluetooth", value: "v5.2" },
      { key: "Range", value: "50m" },
      { key: "Battery", value: "24 hrs talk time" }
    ]
  },
  {
    id: 7,
    name: "Savi 72xx",
    price: 29,
    image: item7,
    description: "Advanced wireless headset for office professionals.",
    features: [
      { key: "Wireless Range", value: "180m" },
      { key: "Connectivity", value: "USB, RJ9" },
      { key: "Battery", value: "13 hrs talk time" }
    ]
  },
  {
    id: 8,
    name: "Voyager Free 60",
    price: 29,
    image: item8,
    description: "Truly wireless earbuds with premium sound.",
    features: [
      { key: "Bluetooth", value: "v5.3" },
      { key: "Battery", value: "16 hrs with case" },
      { key: "Noise Cancellation", value: "Active" }
    ]
  },
];

export default products;
