// ***********
// * Importing Site Map Image
// ***********
import siteMapFilePath from "./Robinson_Exercise_Plot_Stand_Map_Landscape_Aerial.jpg";

// ***********
// * Importing resources dropdown assets
// ***********

import envReport from "./resources-assets/Robinson_Exercise_Environmental_and_Soil_Report.pdf";
import topoImage from "./resources-assets/Robinson_Exercise_Plot_Stand_Map_Landscape_Topo.jpg";

// *****************************
// * Importing images for all plots and it's views
// *****************************

import plot1 from "./images/plot1/Robinson_Plot1_Cove_Center_Photosphere_Final.jpg";
import plot2 from "./images/plot2/Robinson_Plot2_Cove_Center_Photosphere_Final.jpg";
import plot3 from "./images/plot3/Robinson_Plot3_White_Oak_Midstory_Center_Photosphere_Final.jpg";
import plot4 from "./images/plot4/Robinson_Plot4_White_Oak_Midstory_Center_Photosphere_Final.jpg";
import plot5 from "./images/plot5/Robinson_Plot5_Scarlet_Oak_Pitch_Pine_Center_Photosphere_Final.jpg";
import plot6 from "./images/plot6/Robinson_Plot6_Scarlet_Oak_Pitch_Pine_Center_Photosphere_Final.jpg";
import plot7 from "./images/plot7/Robinson_Plot7_Upland_Xeric_Center_Photosphere_Final.jpg";
import plot8 from "./images/plot8/Robinson_Plot8_Xeric_Upland_Center_Photosphere_Final.jpg";

// *****
// * Exporting Project Name
// *****
export const projectName = "Robinson";

// ***********
// * Table header
// ***********
export const tableHeader = [
  "Tree #",
  "Species",
  "DBH",
  "Status",
  "Logs(16ft)",
  "Bolts(4ft)",
  "Crown Class",
  "Crown Ratio%",
];

// *****************************
// * Table data for all plots
// *****************************
const plot1_data = [
  {
    treeNumber: "1",
    species: "Yellow Poplar",
    dbh: "18.2",
    status: "Acceptable Growing Stock",
    logs: "3",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "2",
    species: "Mockernut Hickory",
    dbh: "18.2",
    status: "Unacceptable Growing Stock",
    logs: "-",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "15",
  },
  {
    treeNumber: "3",
    species: "Yellow Poplar",
    dbh: "11",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "8",
    crownClass: "Codominant",
    crownRatio: "20",
  },
  {
    treeNumber: "4",
    species: "UNKNOWN",
    dbh: "11.4",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "8",
    crownClass: "Codominant",
    crownRatio: "25",
  },
  {
    treeNumber: "5",
    species: "UNKNOWN",
    dbh: "7",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Intermediate",
    crownRatio: "20",
  },
  {
    treeNumber: "6",
    species: "Sugar Maple",
    dbh: "5.3",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Suppressed",
    crownRatio: "20",
  },
  {
    treeNumber: "7",
    species: "Red Maple",
    dbh: "10.4",
    status: "Unacceptable Growing Stock",
    logs: "-",
    bolts: "-",
    crownClass: "Intermediate",
    crownRatio: "25",
  },
  {
    treeNumber: "8",
    species: "UNKNOWN",
    dbh: "11",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "25",
  },
];

const plot2_data = [
  {
    treeNumber: "1",
    species: "Pignut Hickory",
    dbh: "16.8",
    status: "Acceptable Growing Stock",
    logs: "1.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "25",
  },
  {
    treeNumber: "2",
    species: "Pignut Hickory",
    dbh: "7.8",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "6",
    crownClass: "Intermediate",
    crownRatio: "20",
  },
  {
    treeNumber: "3",
    species: "Sugar Maple",
    dbh: "7.4",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "5",
    crownClass: "Intermediate",
    crownRatio: "20",
  },
  {
    treeNumber: "4",
    species: "Yellow Poplar",
    dbh: "24.4",
    status: "Acceptable Growing Stock",
    logs: "3",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "25",
  },
  {
    treeNumber: "5",
    species: "American Beech",
    dbh: "6.4",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "20",
  },
  {
    treeNumber: "6",
    species: "American Beech",
    dbh: "8.7",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Intermediate",
    crownRatio: "45",
  },
  {
    treeNumber: "7",
    species: "White Oak",
    dbh: "8.5",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "5",
    crownClass: "Intermediate",
    crownRatio: "30",
  },
];

const plot3_data = [
  {
    treeNumber: "1",
    species: "White Oak",
    dbh: "16.1",
    status: "Acceptable Growing Stock",
    logs: "2",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "2",
    species: "White Oak",
    dbh: "17",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "3",
    species: "White Oak",
    dbh: "24",
    status: "Acceptable Growing Stock",
    logs: "1.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "45",
  },
  {
    treeNumber: "4",
    species: "Yellow Poplar",
    dbh: "5.6",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "2",
    crownClass: "Intermediate",
    crownRatio: "25",
  },
  {
    treeNumber: "5",
    species: "Sugar Maple",
    dbh: "4.6",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "1",
    crownClass: "Suppressed",
    crownRatio: "25",
  },
  {
    treeNumber: "6",
    species: "Black Gum",
    dbh: "6.3",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "20",
  },
];

const plot4_data = [
  {
    treeNumber: "1",
    species: "Yellow Poplar",
    dbh: "11.7",
    status: "Unacceptable Growing Stock",
    logs: "-",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "2",
    species: "Yellow Poplar",
    dbh: "12.5",
    status: "Unacceptable Growing Stock",
    logs: "-",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "3",
    species: "Yellow Poplar",
    dbh: "14.4",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "4",
    species: "Yellow Poplar",
    dbh: "15.2",
    status: "Acceptable Growing Stock",
    logs: "3",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "5",
    species: "Sugar Maple",
    dbh: "6.1",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "2",
    crownClass: "Intermediate",
    crownRatio: "50",
  },
  {
    treeNumber: "6",
    species: "Yellow Poplar",
    dbh: "16.2",
    status: "Acceptable Growing Stock",
    logs: "2",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "7",
    species: "Black Gum",
    dbh: "7",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Intermediate",
    crownRatio: "45",
  },
];

const plot5_data = [
  {
    treeNumber: "1",
    species: "Chestnut Oak",
    dbh: "18.9",
    status: "Acceptable Growing Stock",
    logs: "1.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "40",
  },
  {
    treeNumber: "2",
    species: "Pitch Pine",
    dbh: "17.7",
    status: "Acceptable Growing Stock",
    logs: "1.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "3",
    species: "Scarlet Oak",
    dbh: "19.9",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "45",
  },
  {
    treeNumber: "4",
    species: "Scarlet Oak",
    dbh: "13.6",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "45",
  },
  {
    treeNumber: "5",
    species: "Pitch Pine",
    dbh: "14.1",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "20",
  },
  {
    treeNumber: "6",
    species: "Chestnut Oak",
    dbh: "6.2",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "2",
    crownClass: "Intermediate",
    crownRatio: "40",
  },
  {
    treeNumber: "7",
    species: "Pitch Pine",
    dbh: "17.6",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "40",
  },
];

const plot6_data = [
  {
    treeNumber: "1",
    species: "Scarlet Oak",
    dbh: "12.9",
    status: "Acceptable Growing Stock",
    logs: "1.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "45",
  },
  {
    treeNumber: "2",
    species: "Scarlet Oak",
    dbh: "8.1",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "45",
  },
  {
    treeNumber: "3",
    species: "Sugar Maple",
    dbh: "8.4",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Intermediate",
    crownRatio: "50",
  },
  {
    treeNumber: "4",
    species: "Scarlet Oak",
    dbh: "12.5",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "40",
  },
  {
    treeNumber: "5",
    species: "Scarlet Oak",
    dbh: "15.6",
    status: "Acceptable Growing Stock",
    logs: "2",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "50",
  },
  {
    treeNumber: "6",
    species: "Chestnut Oak",
    dbh: "8.2",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "35",
  },
  {
    treeNumber: "7",
    species: "Sugar Maple",
    dbh: "7.6",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "40",
  },
  {
    treeNumber: "8",
    species: "Pitch Pine",
    dbh: "13.6",
    status: "Acceptable Growing Stock",
    logs: "1.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "30",
  },
];

const plot7_data = [
  {
    treeNumber: "1",
    species: "Chestnut Oak",
    dbh: "7.8",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Intermediate",
    crownRatio: "40",
  },
  {
    treeNumber: "2",
    species: "Sugar Maple",
    dbh: "5.2",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "1",
    crownClass: "Suppressed",
    crownRatio: "30",
  },
  {
    treeNumber: "3",
    species: "Chestnut Oak",
    dbh: "12.3",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "45",
  },
  {
    treeNumber: "4",
    species: "Chestnut Oak",
    dbh: "5.9",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "2",
    crownClass: "Intermediate",
    crownRatio: "30",
  },
  {
    treeNumber: "5",
    species: "Chestnut Oak",
    dbh: "11.5",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Codominant",
    crownRatio: "50",
  },
  {
    treeNumber: "6",
    species: "Pitch Pine",
    dbh: "10.5",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "45",
  },
  {
    treeNumber: "7",
    species: "Pitch Pine",
    dbh: "13",
    status: "Acceptable Growing Stock",
    logs: "2.5",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "30",
  },
  {
    treeNumber: "8",
    species: "Chestnut Oak",
    dbh: "6.2",
    status: "Unacceptable Growing Stock",
    logs: "-",
    bolts: "-",
    crownClass: "Intermediate",
    crownRatio: "40",
  },
  {
    treeNumber: "9",
    species: "Chestnut Oak",
    dbh: "8",
    status: "Unacceptable Growing Stock",
    logs: "-",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "10",
    species: "Chestnut Oak",
    dbh: "14.2",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "50",
  },
];

const plot8_data = [
  {
    treeNumber: "1",
    species: "Scarlet Oak",
    dbh: "7.5",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "2",
    crownClass: "Intermediate",
    crownRatio: "35",
  },
  {
    treeNumber: "2",
    species: "Chestnut Oak",
    dbh: "13.4",
    status: "Acceptable Growing Stock",
    logs: "1",
    bolts: "-",
    crownClass: "Codominant",
    crownRatio: "50",
  },
  {
    treeNumber: "3",
    species: "Pignut Hickory",
    dbh: "6.1",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Codominant",
    crownRatio: "35",
  },
  {
    treeNumber: "4",
    species: "Chestnut Oak",
    dbh: "10.9",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "7",
    crownClass: "Codominant",
    crownRatio: "40",
  },
  {
    treeNumber: "5",
    species: "Chestnut Oak",
    dbh: "10.9",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "6",
    crownClass: "Codominant",
    crownRatio: "40",
  },
  {
    treeNumber: "6",
    species: "Sugar Maple",
    dbh: "4.7",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "3",
    crownClass: "Intermediate",
    crownRatio: "45",
  },
  {
    treeNumber: "7",
    species: "Chestnut Oak",
    dbh: "10.4",
    status: "Acceptable Growing Stock",
    logs: "-",
    bolts: "4",
    crownClass: "Codominant",
    crownRatio: "40",
  },
];

// *****************************
// * Plot specific data
// *****************************
export const Data = {
  1: {
    youtubeVideoUrl: "https://www.youtube.com/embed/lbxeSrU5M6Q",
    tableData: plot1_data,
    center: plot1,
  },
  2: {
    youtubeVideoUrl: "https://www.youtube.com/embed/2_jjiOSsY_M",
    tableData: plot2_data,
    center: plot2,
  },
  3: {
    youtubeVideoUrl: "https://www.youtube.com/embed/Ws7GgvxDZic",
    tableData: plot3_data,
    center: plot3,
  },
  4: {
    youtubeVideoUrl: "https://www.youtube.com/embed/il2bOZTaecQ",
    tableData: plot4_data,
    center: plot4,
  },
  5: {
    youtubeVideoUrl: "https://www.youtube.com/embed/zDSl5O2pG-Y",
    tableData: plot5_data,
    center: plot5,
  },
  6: {
    youtubeVideoUrl: "https://www.youtube.com/embed/pfJAR1R-iGI",
    tableData: plot6_data,
    center: plot6,
  },
  7: {
    youtubeVideoUrl: "https://www.youtube.com/embed/zVnpcc-fGj4",
    tableData: plot7_data,
    center: plot7,
  },
  8: {
    youtubeVideoUrl: "https://www.youtube.com/embed/h1v39sQDj-I",
    tableData: plot8_data,
    center: plot8,
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
    id: 4,
    title: "Topo Image",
    file: topoImage,
  },
];

// ***********
// * Exporting Site Map Image
// ***********
export const siteMapImage = siteMapFilePath;
