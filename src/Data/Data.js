//import values from "./data.json";
import {
  UilEstate,
  UilBooks,
  UilVideo,
  UilFileCopyAlt,
  UilListUl,
  UilBookOpen,
  UilUsersAlt,
} from "@iconscout/react-unicons";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Summary Dashboard",
  },
  {
    icon: UilBooks,
    heading: "Attendance Tracking",
  },
  {
    icon: UilVideo,
    heading: "Behavioural Analytics",
  },
  {
    icon: UilFileCopyAlt,
    heading: "Academic Records",
  },
];

// Json Data reading

const json = {
  " NAME ": "PISENCE",
  ATTENDANCE: {
    " monday": {
      date: "21/7/23",
      fn: "present",
      an: "present",
    },
    tuesday: {
      date: "22/7/2423",
      fn: "absent",
      an: "present",
    },
    wednesday: {
      date: "23/7/25",
      fn: "present",
      an: "absent",
    },
    thursday: {
      date: "24/7/25",
      fn: "present",
      an: "present",
    },
    friday: {
      date: "25/7/25",
      fn: "absent",
      an: "present",
    },
  },

  homework: ["english", "science", "maths"],

  "Behavioral Analytics": ["good", "bad", "good", "bad", "good"],
};

const attendance = Object.entries(json["ATTENDANCE"]).map(([k, v]) => [
  +(v.fn === "present"),
  +(v.an === "present"),
]);
const fn = attendance.map((subArray) => subArray[0]);
const an = attendance.map((subArray) => subArray[1]);
console.log(an);

const homework = json["homework"];
const behavior = json["Behavioral Analytics"];

const countOfGood = behavior.reduce((count, value) => {
  return value === "good" ? count + 1 : count;
}, 0);

const countOfBad = behavior.reduce((count, value) => {
  return value === "bad" ? count + 1 : count;
}, 0);

const countenglish = homework.reduce((count, value) => {
  return value === "english" ? count + 1 : count;
}, 0);

const countscience = homework.reduce((count, value) => {
  return value === "science" ? count + 1 : count;
}, 0);

const countmaths = homework.reduce((count, value) => {
  return value === "maths" ? count + 1 : count;
}, 0);

const countsocial = homework.reduce((count, value) => {
  return value === "social" ? count + 1 : count;
}, 0);

const counttamil = homework.reduce((count, value) => {
  return value === "tamil" ? count + 1 : count;
}, 0);

// Card Data Structure

export const CardsData = [
  {
    title: "Attendance",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "7/10",
    png: UilListUl,
    type: "area",
    series: [
      {
        name: "Forenoon",
        data: fn,
      },
      {
        name: "Afternoon",
        data: an,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-07-21T00:00:00.000Z",
          "2023-07-22T01:30:00.000Z",
          "2023-07-23T02:30:00.000Z",
          "2023-07-24T03:30:00.000Z",
          "2023-07-25T04:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  },
  {
    title: "Homework",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 60,
    value: "3/5",
    png: UilBookOpen,
    type: "bar",
    series: [
      {
        name: "Number of Homeworks",
        data: [countenglish, countmaths, countscience, countsocial, counttamil],
      },
    ],

    options: {
      chart: {
        type: "bar",
        height: "200",
        width: "100%",
      },
      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      grid: {
        show: true,
      },
      xaxis: {
        categories: ["English", "Maths", "Science", "Social Studies", "Tamil"],
      },
    },
  },

  {
    title: "Behavior",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255, 202, 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "3/5",
    png: UilUsersAlt,
    type: "pie",
    series: [countOfGood, countOfBad],
    options: {
      labels: ["Good", "Bad"],
      plotOptions: {
        pie: {
          customScale: 0.6,
        },
      },
    },
  },
];
