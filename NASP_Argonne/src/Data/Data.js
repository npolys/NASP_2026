// ***********
// * Importing Site Map Image
// ***********
import siteMapFilePath from "./Argonne_Exercise_Plot_Stand_Map_Close_Aerial.jpg";

// ***********
// * Importing resources dropdown assets
// ***********

import envReport from "./resources-assets/Argonne_Exercise_Environmental_and_Soil_Report.pdf";
import aerialImage from "./resources-assets/Argonne_Exercise_Plot_Stand_Map_Landscape_Aerial.jpg";
import topoImage from "./resources-assets/Argonne_Exercise_Plot_Stand_Map_Landscape_Topo.jpg";

// *****************************
// * Importing images for all plots and it's views
// *****************************

import plot1 from "./images/plot1/Argonne_M1P1_Plot1_Center_Photosphere_Final2.jpg";
import plot2 from "./images/plot2/Argonne_M1P2_Plot2_Center_Photosphere_Final2.jpg";
import plot3 from "./images/plot3/Argonne_M1P3_Plot3_Center_Photosphere_Final2.jpg";
import plot4 from "./images/plot4/Argonne_M1P4_Plot4_Center_Photosphere_Final2.jpg";

// *****************************
// * Table header
// *****************************
export const tableHeader = [
  "Tree #",
  "Species",
  "Diamter Breast Height",
  "Logs",
];

// *****************************
// * Table data for all plots
// *****************************
const plot1_data = [
  {
    treeNumber: "2",
    species: "Hard Maple",
    dbh: "1",
    logs: "1.5",
  },
  {
    treeNumber: "6",
    species: "Hard Maple",
    dbh: "12.6",
    logs: "0",
  },
  {
    treeNumber: "19",
    species: "Hard Maple",
    dbh: "20.2",
    logs: "1",
  },
  {
    treeNumber: "20",
    species: "Hard Maple",
    dbh: "11.6",
    logs: "1",
  },
  {
    treeNumber: "21",
    species: "Hard Maple",
    dbh: "13.5",
    logs: "3",
  },
  {
    treeNumber: "22",
    species: "Hard Maple",
    dbh: "16.4",
    logs: "1",
  },
  {
    treeNumber: "27",
    species: "Hard Maple",
    dbh: "8.7",
    logs: "0",
  },
  {
    treeNumber: "31",
    species: "Balsam Fir",
    dbh: "14.3",
    logs: "2.5",
  },
  {
    treeNumber: "39",
    species: "Hard Maple",
    dbh: "5.7",
    logs: "0",
  },
  {
    treeNumber: "44",
    species: "Hard Maple",
    dbh: "7.9",
    logs: "0",
  },
  {
    treeNumber: "51",
    species: "Hard Maple",
    dbh: "16.4",
    logs: "1",
  },
  {
    treeNumber: "62",
    species: "Hard Maple",
    dbh: "17",
    logs: "1.5",
  },
  {
    treeNumber: "78",
    species: "Hard Maple",
    dbh: "5",
    logs: "0",
  },
  {
    treeNumber: "90",
    species: "Hard Maple",
    dbh: "15.1",
    logs: "1",
  },
];

const plot2_data = [
  {
    treeNumber: "93",
    species: "Hard Maple",
    dbh: "11.2",
    logs: "1",
  },
  {
    treeNumber: "109",
    species: "Hard Maple",
    dbh: "7.1",
    logs: "0",
  },
  {
    treeNumber: "110",
    species: "Hard Maple",
    dbh: "15.5",
    logs: "1.5",
  },
  {
    treeNumber: "113",
    species: "Hard Maple",
    dbh: "12.9",
    logs: "2",
  },
  {
    treeNumber: "114",
    species: "Hard Maple",
    dbh: "10.8",
    logs: "2",
  },
  {
    treeNumber: "121",
    species: "Yellow Birch",
    dbh: "18.5",
    logs: "1.5",
  },
  {
    treeNumber: "124",
    species: "Hard Maple",
    dbh: "6.8",
    logs: "0",
  },
  {
    treeNumber: "132",
    species: "Hard Maple",
    dbh: "16.4",
    logs: "1",
  },
  {
    treeNumber: "138",
    species: "Hard Maple",
    dbh: "16.2",
    logs: "1.5",
  },
  {
    treeNumber: "146",
    species: "Hard Maple",
    dbh: "14",
    logs: "3",
  },
];

const plot3_data = [
  {
    treeNumber: "156",
    species: "Yellow Birch",
    dbh: "16.4",
    logs: "1.5",
  },
  {
    treeNumber: "161",
    species: "Hard Maple",
    dbh: "13.7",
    logs: "1",
  },
  {
    treeNumber: "174",
    species: "Hard Maple",
    dbh: "10.4",
    logs: "2",
  },
  {
    treeNumber: "176",
    species: "Hard Maple",
    dbh: "10.5",
    logs: "1",
  },
  {
    treeNumber: "179",
    species: "Yellow Birch",
    dbh: "17",
    logs: "1",
  },
  {
    treeNumber: "194",
    species: "Hard Maple",
    dbh: "14",
    logs: "1.5",
  },
  {
    treeNumber: "215",
    species: "Yellow Birch",
    dbh: "23.6",
    logs: "1",
  },
  {
    treeNumber: "202",
    species: "Hard Maple",
    dbh: "9.5",
    logs: "0",
  },
  {
    treeNumber: "205",
    species: "Balsam Fir",
    dbh: "6.6",
    logs: "0",
  },
  {
    treeNumber: "223",
    species: "Hard Maple",
    dbh: "8",
    logs: "0",
  },
  {
    treeNumber: "240",
    species: "Hard Maple",
    dbh: "6.6",
    logs: "0",
  },
];

const plot4_data = [
  {
    treeNumber: "259",
    species: "Hard Maple",
    dbh: "10.2",
    logs: "0",
  },
  {
    treeNumber: "260",
    species: "Hard Maple",
    dbh: "11.6",
    logs: "1",
  },
  {
    treeNumber: "266",
    species: "Hemlock",
    dbh: "21.8",
    logs: "1.5",
  },
  {
    treeNumber: "268",
    species: "Hard Maple",
    dbh: "4.9",
    logs: "0",
  },
  {
    treeNumber: "269",
    species: "Hard Maple",
    dbh: "5.7",
    logs: "0",
  },
  {
    treeNumber: "283",
    species: "Hard Maple",
    dbh: "13.6",
    logs: "1",
  },
  {
    treeNumber: "284",
    species: "Hard Maple",
    dbh: "9.3",
    logs: "0",
  },
  {
    treeNumber: "297",
    species: "Hard Maple",
    dbh: "5",
    logs: "0",
  },
  {
    treeNumber: "208",
    species: "Hard Maple",
    dbh: "8",
    logs: "0",
  },
  {
    treeNumber: "316",
    species: "Hard Maple",
    dbh: "19.2",
    logs: "1",
  },
  {
    treeNumber: "333",
    species: "Hard Maple",
    dbh: "12.5",
    logs: "1",
  },
  {
    treeNumber: "334",
    species: "Hard Maple",
    dbh: "17.8",
    logs: "1",
  },
];

// *****************************
// * Plot specific data
// *****************************
export const Data = {
  1: {
    youtubeVideoUrl: "https://www.youtube.com/embed/qU58BY8J5N0",
    tableData: plot1_data,
    center: plot1,
  },
  2: {
    youtubeVideoUrl: "https://www.youtube.com/embed/St_onAuiLVE",
    tableData: plot2_data,
    center: plot2,
  },
  3: {
    youtubeVideoUrl: "https://www.youtube.com/embed/Gb52-iI898c",
    tableData: plot3_data,
    center: plot3,
  },
  4: {
    youtubeVideoUrl: "https://www.youtube.com/embed/Q8sh1Fv7NrQ",
    tableData: plot4_data,
    center: plot4,
  },
};

// *****************************
// * Plot rotation data
// *****************************
export const plotRotation = {
  center: "0 -1 0 0",
  east: "0 -1 0 3.1415",
  west: "0 -1 0 3.1415",
  north: "0 -1 0 3.1415",
  south: "0 -1 0 3.1415",
};

// *****************************
// * Header buttons data
// *****************************
export const navItems = [
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
];

// ***********
// * Exporting Site Map Image
// ***********
export const siteMapImage = siteMapFilePath;

// ***********
// * Exporting Project Name
// ***********
export const projectName = "Argonne";
