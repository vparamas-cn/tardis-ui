export const menulist =[
    {
        name:"Dashboard",
        image:require("../../assets/images/Dashboard.svg"),
        selection:false,
        notify:true
    },
    {
        name:"File Manager",
        image:require("../../assets/images/File.svg"),
        selection:false,
        notify:false
    },
    {
        name:"Admin",
        image:require("../../assets/images/Admin.svg"),
        selection:false,
        notify:false
    },
    {
        name:"Maintennace",
        image:require("../../assets/images/Maintennace.svg"),
        selection:false,
        notify:false,
        path:"/Maintennace"
    },
    {
        name:"Configurations",
        image:require("../../assets/images/Settings.svg"),
        selection:false,
        notify:false
    },
    {
        name:"Trend Chart",
        image:require("../../assets/images/Chart.svg"),
        selection:false,
        notify:false
    },
    {
        name:"User Manual",
        image:require("../../assets/images/Manual.svg"),
        selection:true,
        notify:false
    },
    {
        name:"Support Link",
        image:require("../../assets/images/Support.svg"),
        selection:false,
        notify:false,
        path:"/Support-Link"
    }
];

export const TableHeader = {
   "Maintennace" :["","VARIOUS SOURCES","LOG DATE","FAILURE REASONS","COMMENTS","ACTIONS"]
}

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

   export const pagename = () =>{
        var url = window.location.pathname;
        if(url.indexOf("Maintennace") > -1)
            return "Maintennace"
        else if(url.indexOf("Support-Link") > -1)   
             return "Support Link"    
    }