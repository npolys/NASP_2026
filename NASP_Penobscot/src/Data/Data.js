// *****************************
// * Importing Site Map Image
// *****************************
import siteMapFilePath from "./Penobscot_Exercise_Plot_Stand_MapClose_Aerial.jpg";

// *****************************
// * Importing resources dropdown assets
// *****************************

import envReport from "./resources-assets/Penobscot_Exercise_Soil_and_Environmental_Report.pdf";
import aerialImage from "./resources-assets/Penobscot_Exercise_Plot_Stand_Map_Landscape_1_60k_Aerial.jpg";
import aerialImageMedium from "./resources-assets/Penobscot_Exercise_Plot_Stand_Map_Landscape_1_24k_Aerial.jpg";
import topoImage from "./resources-assets/Penobscot_Exercise_Plot_Stand_Map_Ladnscape_Aerial_1_45k_Aerial.jpg";

// *****************************
// * Importing images for all plots and it's views
// *****************************
import overheadImage11 from "./images-overhead/Plot11_125ft_Drone_Screenshot_Annotated.jpg";
import overheadImage13 from "./images-overhead/Plot13_125ft_Drone_Screenshot_Annotated.jpg";
import overheadImage15 from "./images-overhead/Plot15_125ft_Drone_Screenshot_Annotated.jpg";
import overheadImage41 from "./images-overhead/Plot41_125ft_Drone_Screenshot_Annotated.jpg";
import overheadImage43 from "./images-overhead/Plot43_125ft_Drone_Annotated_Screenshots.jpg";

import plot11_centerURL from "./images/plot11/Penboscot_Plot11_Center.jpg";
import plot11_southURL from "./images/plot11/Penboscot_Plot11_South.jpg";
import plot11_eastURL from "./images/plot11/Penboscot_Plot11_East.jpg";
import plot11_westURL from "./images/plot11/Penboscot_Plot11_West.jpg";
import plot11_northURL from "./images/plot11/Penboscot_Plot11_North.jpg";

import plot13_centerURL from "./images/plot13/Penboscot_Plot13_Center.jpg";
import plot13_southURL from "./images/plot13/Penobscot_Plot13_South.jpg";
import plot13_eastURL from "./images/plot13/Penboscot_Plot13_East.jpg";
import plot13_westURL from "./images/plot13/Penboscot_Plot13_West.jpg";
import plot13_northURL from "./images/plot13/Penobscot_Plot13_North.jpg";

import plot15_centerURL from "./images/plot15/Penobscot_Plot15_Center.jpg";
import plot15_southURL from "./images/plot15/Penobscot_Plot15_South.jpg";
import plot15_eastURL from "./images/plot15/Penobscot_Plot15_East.jpg";
import plot15_westURL from "./images/plot15/Penobscot_Plot15_West.jpg";
import plot15_northURL from "./images/plot15/Penobscot_Plot15_North.jpg";

import plot41_centerURL from "./images/plot41/Penobscot_Plot41_Center.jpg";
import plot41_southURL from "./images/plot41/Penobscot_Plot41_South.jpg";
import plot41_eastURL from "./images/plot41/Penobscot_Plot41_East.jpg";
import plot41_westURL from "./images/plot41/Penobscot_Plot41_West.jpg";
import plot41_northURL from "./images/plot41/Penobscot_Plot41_North.jpg";

import plot43_centerURL from "./images/plot43/Penobscot_Plot43_Center.jpg";
import plot43_southURL from "./images/plot43/Penobscot_Plot43_South.jpg";
import plot43_eastURL from "./images/plot43/Penobscot_Plot43_East.jpg";
import plot43_westURL from "./images/plot43/Penobscot_Plot43_West.jpg";
import plot43_northURL from "./images/plot43/Penobscot_Plot43_North.jpg";
// *****************************
// * Table header
// *****************************
export const tableHeader = ["Tree #", "Penobscot #", "Tree Species", "DBH"];

// *****************************
// * Table data for all plots
// *****************************
const plot11_data = [
  {
    treeNumber: "1",
    penobscotNumber: "20",
    species: "Eastern Hemlock",
    dbh: "7",
  },
  {
    treeNumber: "2",
    penobscotNumber: "21",
    species: "Eastern Hemlock",
    dbh: "5.4",
  },
  {
    treeNumber: "3",
    penobscotNumber: "22",
    species: "Eastren Hemlock",
    dbh: "6.3",
  },
  {
    treeNumber: "4",
    penobscotNumber: "113",
    species: "Balsam Fir",
    dbh: "8.5",
  },
  {
    treeNumber: "5",
    penobscotNumber: "322",
    species: "Eastern Hemlock",
    dbh: "9.3",
  },
  {
    treeNumber: "6",
    penobscotNumber: "522",
    species: "Red Pine",
    dbh: "7.2",
  },
  {
    treeNumber: "7",
    penobscotNumber: "517",
    species: "Balsam Fir",
    dbh: "7.2",
  },
  {
    treeNumber: "8",
    penobscotNumber: "616",
    species: "Balsam Fir",
    dbh: "7.8",
  },
  {
    treeNumber: "9",
    penobscotNumber: "710",
    species: "Eastern White Pine",
    dbh: "6.3",
  },
  {
    treeNumber: "10",
    penobscotNumber: "819",
    species: "Red Maple",
    dbh: "4.5",
  },
  {
    treeNumber: "11",
    penobscotNumber: "808",
    species: "Paper Birch",
    dbh: "5.6",
  },
  {
    treeNumber: "12",
    penobscotNumber: "911",
    species: "Balsam Fir",
    dbh: "4.5",
  },
  {
    treeNumber: "13",
    penobscotNumber: "904",
    species: "Eastern Hemlock",
    dbh: "5.7",
  },
  {
    treeNumber: "14",
    penobscotNumber: "923",
    species: "Eastern Hemlock",
    dbh: "4.6",
  },
];

const plot13_data = [
  {
    treeNumber: "1",
    penobscotNumber: "9",
    species: "Balsam Fir",
    dbh: "8.1",
  },
  {
    treeNumber: "2",
    penobscotNumber: "318",
    species: "Balsam Fir",
    dbh: "8.8",
  },
  {
    treeNumber: "3",
    penobscotNumber: "319",
    species: "Eastern Hemlock",
    dbh: "4.9",
  },
  {
    treeNumber: "4",
    penobscotNumber: "617",
    species: "Eastern White Cedar",
    dbh: "9.9",
  },
  {
    treeNumber: "5",
    penobscotNumber: "807",
    species: "Eastern White Cedar",
    dbh: "10.1",
  },
  {
    treeNumber: "6",
    penobscotNumber: "811",
    species: "Eastern Hemlock",
    dbh: "8.8",
  },
  {
    treeNumber: "7",
    penobscotNumber: "919",
    species: "Paper Birch",
    dbh: "7.6",
  },
  {
    treeNumber: "8",
    penobscotNumber: "923",
    species: "Eastern White Cedar",
    dbh: "8.7",
  },
  {
    treeNumber: "9",
    penobscotNumber: "927",
    species: "Balsam Fir",
    dbh: "8.6",
  },
];

const plot15_data = [
  {
    treeNumber: "1",
    penobscotNumber: "24",
    species: "Eastern Hemlock",
    dbh: "5",
  },
  {
    treeNumber: "2",
    penobscotNumber: "25",
    species: "Red Maple",
    dbh: "8.3",
  },
  {
    treeNumber: "3",
    penobscotNumber: "515",
    species: "Red Pine",
    dbh: "5.7",
  },
  {
    treeNumber: "4",
    penobscotNumber: "314",
    species: "Eastern Hemlock",
    dbh: "6.9",
  },
  {
    treeNumber: "5",
    penobscotNumber: "421",
    species: "Eastern Hemlock",
    dbh: "5.1",
  },
  {
    treeNumber: "6",
    penobscotNumber: "425",
    species: "Eastern Hemlock",
    dbh: "5.2",
  },
  {
    treeNumber: "7",
    penobscotNumber: "514",
    species: "Eastern Hemlock",
    dbh: "4.5",
  },
  {
    treeNumber: "8",
    penobscotNumber: "515",
    species: "Red Pine",
    dbh: "5.7",
  },
  {
    treeNumber: "9",
    penobscotNumber: "305",
    species: "Eastern Hemlock",
    dbh: "4.5",
  },
  {
    treeNumber: "10",
    penobscotNumber: "614",
    species: "Balsam Fir",
    dbh: "7.1",
  },
  {
    treeNumber: "11",
    penobscotNumber: "523",
    species: "Balsam Fir",
    dbh: "5.7",
  },
  {
    treeNumber: "12",
    penobscotNumber: "615",
    species: "Balsam Fir",
    dbh: "4.9",
  },
  {
    treeNumber: "13",
    penobscotNumber: "714",
    species: "Balsam Fir",
    dbh: "6.9",
  },
  {
    treeNumber: "14",
    penobscotNumber: "624",
    species: "Balsam Fir",
    dbh: "9.1",
  },
  {
    treeNumber: "15",
    penobscotNumber: "812",
    species: "Balsam Fir",
    dbh: "8.7",
  },
  {
    treeNumber: "16",
    penobscotNumber: "818",
    species: "Balsam Fir",
    dbh: "4.8",
  },
  {
    treeNumber: "17",
    penobscotNumber: "824",
    species: "Balsam Fir",
    dbh: "9",
  },
  {
    treeNumber: "18",
    penobscotNumber: "821",
    species: "Balsam Fir",
    dbh: "6",
  },
];

const plot41_data = [
  {
    treeNumber: "1",
    penobscotNumber: "14",
    species: "Eastern White Cedar",
    dbh: "10.9",
  },
  {
    treeNumber: "2",
    penobscotNumber: "220",
    species: "Eastern White Cedar",
    dbh: "10.6",
  },
  {
    treeNumber: "3",
    penobscotNumber: "319",
    species: "Balsam Fir",
    dbh: "5.6",
  },
  {
    treeNumber: "4",
    penobscotNumber: "420",
    species: "Eastern White Cedar",
    dbh: "6",
  },
  {
    treeNumber: "5",
    penobscotNumber: "518",
    species: "Eastern White Cedar",
    dbh: "7.8",
  },
  {
    treeNumber: "6",
    penobscotNumber: "519",
    species: "Balsam Fir",
    dbh: "7.3",
  },
  {
    treeNumber: "7",
    penobscotNumber: "601",
    species: "",
    dbh: "",
  },
  {
    treeNumber: "8",
    penobscotNumber: "721",
    species: "Eastern White Cedar",
    dbh: "10.1",
  },
  {
    treeNumber: "9",
    penobscotNumber: "814",
    species: "Eastern White Cedar",
    dbh: "7.8",
  },
  {
    treeNumber: "10",
    penobscotNumber: "813",
    species: "Eastern White Cedar",
    dbh: "8.6",
  },
];

const plot43_data = [
  {
    treeNumber: "1",
    penobscotNumber: "25",
    species: "Balsam Fir",
    dbh: "5.5",
  },
  {
    treeNumber: "2",
    penobscotNumber: "34",
    species: "Paper Birch",
    dbh: "4.5",
  },
  {
    treeNumber: "3",
    penobscotNumber: "120",
    species: "Eastern Hemlock",
    dbh: "9",
  },
  {
    treeNumber: "4",
    penobscotNumber: "410",
    species: "",
    dbh: "",
  },
  {
    treeNumber: "5",
    penobscotNumber: "404",
    species: "Red Maple",
    dbh: "7.5",
  },
  {
    treeNumber: "6",
    penobscotNumber: "519",
    species: "Balsam Fir",
    dbh: "6.6",
  },
  {
    treeNumber: "7",
    penobscotNumber: "521",
    species: "Balsam Fir",
    dbh: "6",
  },
  {
    treeNumber: "8",
    penobscotNumber: "617",
    species: "Balsam Fir",
    dbh: "6.6",
  },
  {
    treeNumber: "9",
    penobscotNumber: "622",
    species: "",
    dbh: "",
  },
  {
    treeNumber: "10",
    penobscotNumber: "717",
    species: "Balsam Fir",
    dbh: "7.1",
  },
  {
    treeNumber: "11",
    penobscotNumber: "817",
    species: "Balsam Fir",
    dbh: "8.3",
  },
  {
    treeNumber: "12",
    penobscotNumber: "810",
    species: "Eastern Hemlock",
    dbh: "4.8",
  },
  {
    treeNumber: "13",
    penobscotNumber: "824",
    species: "",
    dbh: "",
  },
];

// *****************************
// * Plot specific data
// *****************************
export const Data = {
  11: {
    youtubeVideoUrl: "",
    tableData: plot11_data,
    center: plot11_centerURL,
    south: plot11_southURL,
    east: plot11_eastURL,
    west: plot11_westURL,
    north: plot11_northURL,
    overheadImage: overheadImage11,
  },
  13: {
    youtubeVideoUrl: "",
    tableData: plot13_data,
    center: plot13_centerURL,
    south: plot13_southURL,
    east: plot13_eastURL,
    west: plot13_westURL,
    north: plot13_northURL,
    overheadImage: overheadImage13,
  },
  15: {
    youtubeVideoUrl: "",
    tableData: plot15_data,
    center: plot15_centerURL,
    south: plot15_southURL,
    east: plot15_eastURL,
    west: plot15_westURL,
    north: plot15_northURL,
    overheadImage: overheadImage15,
  },
  41: {
    youtubeVideoUrl: "",
    tableData: plot41_data,
    center: plot41_centerURL,
    south: plot41_southURL,
    east: plot41_eastURL,
    west: plot41_westURL,
    north: plot41_northURL,
    overheadImage: overheadImage41,
  },
  43: {
    youtubeVideoUrl: "",
    tableData: plot43_data,
    center: plot43_centerURL,
    south: plot43_southURL,
    east: plot43_eastURL,
    west: plot43_westURL,
    north: plot43_northURL,
    overheadImage: overheadImage43,
  },
};

// *****************************
// * Plot rotation data
// *****************************
export const plotRotation = {
  center: "0 -1 0 0",
  east: "0 -1 0 0",
  west: "0 -1 0 0",
  north: "0 -1 0 -3.14",
  south: "0 -1 0 0",
};

// *****************************
// * Header buttons data
// *****************************
export const navItems = [
  {
    id: 1,
    title: "View Plot",
  },
  {
    id: 2,
    title: "Resources",
  },
  {
    id: 3,
    title: "Mobile",
  },
];

// *****************************
// * View Plot dropdown data
// *****************************
export const directionDropdownItems = [
  {
    id: 0,
    title: "Center",
  },
  {
    id: 1,
    title: "East",
  },
  {
    id: 2,
    title: "West",
  },
  {
    id: 3,
    title: "North",
  },
  {
    id: 4,
    title: "South",
  },
];

// *****************************
// * Resources dropdown data
// *****************************
export const resourcesDropdownItems = [
  {
    id: 1,
    title: "Table",
  },
  {
    id: 2,
    title: "Env report",
    file: envReport,
  },
  {
    id: 3,
    title: "Aerial Image",
    file: aerialImage,
  },
  {
    id: 4,
    title: "Topo Image",
    file: topoImage,
  },
  {
    id: 5,
    title: "Aerial Image Medium",
    file: aerialImageMedium,
  },
];

// *****************************
// * Exporting Site Map Image
// *****************************
export const siteMapImage = siteMapFilePath;

// ***********
// * Exporting Project Name
// ***********
export const projectName = "Penobscot";
