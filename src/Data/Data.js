// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
   
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";


// Recent Card Imports
import img1 from '../imgs/img4.png';
import img2 from "../imgs/img5.png";
import img3 from "../imgs/img6.png";

// Sidebar Data 
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    },
    {
        icon: UilPackage,
        heading: 'Products'
    },
    {
        icon: UilChart,
        heading: 'Analytics'
    },
];

// Analytics Cards Data
export const cardsData = [
    {
        title: "Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #bde0fe 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #ffafcc 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            backGround:
                "linear-gradient(180deg, #FFC47F 0%, #FF947F 100%",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
];

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Isaac Babbeyo ",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: img2,
        name: "Nokubonga Musimwa ",
        noti: "received a new samsung wireless charger",
        time: "30 minutes ago",
    },
    {
        img: img3,
        name: "Theodore Obonye ",
        noti: "has ordered a macbook pro M1 chip and received it in 48hours",
        time: "2 hours ago",
    },
];
