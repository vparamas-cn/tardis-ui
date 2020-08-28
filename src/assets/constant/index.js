export const menulist = [
  {
    name: "Dashboard",
    image: require("../../assets/images/Dashboard.svg"),
    selection: false,
    notify: true,
    path: "/dashboard"
  },
  {
    name: "Admin",
    image: require("../../assets/images/Admin.svg"),
    selection: false,
    notify: false,
    //path: "/admin"
  },
  {
    name: "Maintennace",
    image: require("../../assets/images/Maintennace.svg"),
    selection: false,
    notify: false,
    //path: "/maintennace"
  },
  {
    name: "Configurations",
    image: require("../../assets/images/Settings.svg"),
    selection: false,
    notify: false,
    path: "/configurations"
  },
  {
    name: "Trend Chart",
    image: require("../../assets/images/Chart.svg"),
    selection: false,
    notify: false,
    path: "/trend-chart"
  },
  {
    name: "Support Link",
    image: require("../../assets/images/Support.svg"),
    selection: false,
    notify: false,
    path: "/support-link"
  }
];

export const TableHeader = {
  Maintennace: [
    "",
    "VARIOUS SOURCES",
    "LOG DATE",
    "FAILURE REASONS",
    "COMMENTS",
    "ACTIONS"
  ],
  SourceConfig: [
    "",
    "SOURCES",
    "DESCRIPTION",
    "ALIAS",
    "TYPE",
    "ISACTIVE",
    "NUM_PREV_DAYS",
    "DASH_TRIGGER_ID",
    "AVAILABLITY_SCHEDULE",
    "ACTIONS"
  ],
  SourceMapConfig: ["", "SOURCES", "CHILD SOURCES", "ISOPTIONAL", "ACTIONS"],
  SlackIntegration: ["", "SOURCES", "ALERT LEVEL", "ISACTIVE" ,"SLACK CHANNEL", "ACTIONS"],
  Admin: ["", "EMAIL", "PERMISSION LEVEL", "PERMISSION ENTITY", "STATUS", "ACTIONS"],
  SourceDetailed: ["", "GROUP NAME", "WEEKLY STATUS", "LAST RUN", "STATICTICS", "REPORT"]
};

export const SearchBar = [
  "Maintennace",
  "Configurations",
  "Source Configuration",
  "Source Map Configuration",
  "Slack Integration",
  "Manage Permissions",
  "File Manager",
  "Chart"
];

export const array = [
  {
    startangle: 0.85 * Math.PI,
    endangle: 0.995 * Math.PI,
    color: "#ffffff"
  },
  {
    startangle: 0.995 * Math.PI,
    endangle: 1.0125 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.0125 * Math.PI,
    endangle: 1.1575 * Math.PI,
    color: "#ffffff"
  },
  {
    startangle: 1.1575 * Math.PI,
    endangle: 1.175 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.175 * Math.PI,
    endangle: 1.32 * Math.PI,
    color: "#4a97ff"
  },
  {
    startangle: 1.32 * Math.PI,
    endangle: 1.3375 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.3375 * Math.PI,
    endangle: 1.4825 * Math.PI,
    color: "#4a97ff"
  },
  {
    startangle: 1.4825 * Math.PI,
    endangle: 1.5 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.5 * Math.PI,
    endangle: 1.645 * Math.PI,
    color: "#4a97ff"
  },
  {
    startangle: 1.645 * Math.PI,
    endangle: 1.6625 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.6625 * Math.PI,
    endangle: 1.8093 * Math.PI,
    color: "#4a97ff"
  },
  {
    startangle: 1.8093 * Math.PI,
    endangle: 1.825 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.825 * Math.PI,
    endangle: 1.97 * Math.PI,
    color: "#4a97ff"
  },
  {
    startangle: 1.97 * Math.PI,
    endangle: 1.9875 * Math.PI,
    color: "#3976EB"
  },
  {
    startangle: 1.9875 * Math.PI,
    endangle: 0.1475 * Math.PI,
    color: "#4a97ff"
  },
  {
    startangle: 1.1475 * Math.PI,
    endangle: 0.165 * Math.PI,
    color: "#3976EB"
  }
];


export const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s",
    width: "500px",
    borderWidth: "5px 0px 0px 0px",
    borderTopStyle: "solid",
    borderTopColor: "#3976eb",
    borderRadius: "0px",
    padding: "40px",
    overflow: "initial"
  },
  overlay: {
    backgroundColor: "rgb(21 21 21 / 75%)",
    zIndex: 101000,
    overflowY: "auto"
  }
};



export const apiUrl = "https://tardis-api.k8s.us-east-1--nonproduction.containers.aws.conde.io/api/graphql"

export const sourcetype = ["Process", "Data", "Datasource", "Group", "Datasource Group", "Dashboard"];