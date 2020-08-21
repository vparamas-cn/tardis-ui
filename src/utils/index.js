import axios from 'axios'
import moment from 'moment'
import { apiUrl } from '../assets/constant'

export const fetch = (params) => {
  try {
    return axios({
      url: apiUrl,
      method: 'post',
      data: {
        query: params
      }
    }).then(response => {
      return response
    })
      .catch(error => {
        return { status: 400 }
      });
  }
  catch (e) {
    return { status: 400 }
  }
}

export const isDev = () => {
  const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  return development;
}

export const pagename = () => {
  var url = window.location.pathname;
  if (url.indexOf("maintennace") > -1) return "Maintennace";
  else if (url.indexOf("support-link") > -1) return "Support Link";
  else if (url.indexOf("configurations") > -1) return "Configurations";
  else if (url.indexOf("admin") > -1) return "Admin";
  else if (url.indexOf("file-manager") > -1) return "File Manager";
  else if (url.indexOf("trend-chart") > -1) return "Trend Chart";
  else if (url.indexOf("dashboard") > -1) return "Dashboard";
};

export const filterdata = (data, params) => {
  let result = data;
  for (var y of Object.keys(params)) {
    if (Array.isArray(params[y])) {
      result = result.filter(function (e) {
        if (typeof e[y] === "object" && e[y] !== null) {
          return params[y].indexOf(e[y]["source"]) > -1;
        }
        else {
          return params[y].indexOf(e[y]) > -1;
        }
      })
    }
    else {
      result = result.filter(function (e) {

        if (typeof params[y] === "boolean") {
          if (params[y])
            return e[y] === params[y];
          else
            return e[y] !== true;
        }
        else if (typeof e[y] === "object" && e[y] != null) {
          return e[y][y] === params[y];
        }
        else {
          return e[y] === params[y];
        }
      })
    }
  }
  return result;
}
export const paginationFilter = (dataSource) => {
  let { totalElements, size, data, filter, page } = dataSource;
  var resultdata = data;
  var isFilter = false;
  if (Object.keys(filter).length > 0) {
    resultdata = filterdata(resultdata, filter);
    isFilter = true;
  }
  let totalEle = isFilter ? resultdata.length : totalElements;
  let totalPage = Math.ceil(totalEle / size);
  if (totalPage < page || totalPage === 1) {
    page = 1
  }

  let pageBound;
  if (totalPage > 5) {
    pageBound = { current: 5, upperbound: 5, lowerbound: 0 }
  }
  else {
    pageBound = { current: totalPage, upperbound: totalPage, lowerbound: 0 }
  }
  return {
    filterData: resultdata,
    filter: filter,
    page: page,
    size: size,
    totalPage: totalPage,
    totalElements: totalElements,
    pageBound: pageBound
  }
}

export const alert = (status, data) => {
  var x = document.getElementById("snackbar");
  x.className = `show " ${status === "success" ? "greenclr" : "redclr"}`;
  x.innerHTML = data.substring(0, 120)
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
export const vaildateEmail = (email) => {
  const expression = /\S+@\S+/
  return expression.test(String(email).toLowerCase())
}
export const vaildatePhoneNo = (phone) =>{
  const phoneno = /^\d{10}$/;
  return phone.match(phoneno)
}
export const getDates = (startDate, stopDate) => {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(moment(currentDate).format("MMM DD"))
    currentDate = currentDate.add(1, "days");
  }
  return dateArray;
}
export const checkDates = (header,item) =>{
  return header === moment(item).format("MMM DD")
}
export const showHide = (data, page) => {
  let selectedrow = `hidden_row${data.id}`;
  let arrowimg = `downimage${data.id}`;
  let edittd = document.getElementById(`edittd-${data.id}`);
  let closetd = document.getElementById(`closetd-${data.id}`);
  var trd = document.getElementById(selectedrow);
  var isopen = false;
  if (trd.className.indexOf("hidden_row") > -1) {
    trd.classList.remove("hidden_row");
    edittd.style.display = "none";
    closetd.style.display = "block";
    isopen = true;
  }
  else {
    trd.classList.add("hidden_row");
    edittd.style.display = "block";
    closetd.style.display = "none";
    isopen = false;
  }

  var imageid = document.getElementById(arrowimg);
  if (imageid.className.indexOf("downarr") > -1) {
    imageid.classList.remove("downarr");
    imageid.classList.add("uparr");
  } else {
    imageid.classList.add("downarr");
    imageid.classList.remove("uparr");
  }
  if (isopen)
    for (var x of Object.keys(data)) {
      try {
        let name = `${x}-${data.id}`;
        if (page === "source")
          document.getElementById(name).value = x === "type" ? data[x].type : data[x];
        else if (page === "sourceMap" || page === "slack")
          document.getElementById(name).value = typeof data[x] == "object" && data[x] != null ? data[x].source : data[x] == null ? false : data[x];
      }
      catch (e) { }
    }
}

export const fullscreen = () => {
  var mainscreen = document.getElementById("maincontent");
  var aside = document.getElementById("asidebar");
  if (mainscreen.className.indexOf("fullscreen") > -1) {
    mainscreen.classList.remove("fullscreen");
    mainscreen.classList.add("originalscreen");
    setTimeout(()=>{aside.style.display = "none";},500) 
    aside.classList.remove("sideopen");
    aside.classList.add("sideclose");
    document.body.style.overflowY  ="auto";
    
  } else {
    mainscreen.classList.add("fullscreen");
    aside.style.display = "block";
    aside.classList.remove("displaynone")
    aside.classList.remove("sideclose");
    aside.classList.add("sideopen");
    mainscreen.classList.remove("originalscreen");
    document.body.style.overflowY  ="hidden";
  }
};

export const ActionUpdate = (response, data, type, cb) => {
  if (type === "Update") {
    if (response.status === 200) {
      if (response.data.errors) {
        alert("error", response.data.errors[0].message);
      }
      else {
        alert("success", "Updated Successfully!!");
        const newObj = Object.assign(response.data.data);
        newObj.actiontype = "update"
        cb(newObj);
      }
    }
    else {
      alert("error", "Failed to fetch!");
    }
  }
  else if (type === "Delete") {
    if (response.status === 200) {
      if (response.data.errors) {
        alert("error", response.data.errors[0].message);

      }
      else {
        alert("success", "Deleted Successfully!!");
        const newObj = Object.assign({ selected: false }, data);
        newObj.actiontype = "delete"
        cb(newObj);
      }
    }
    else {
      alert("error", "Failed to fetch!");
    }
  }
  else if (type === "Add") {
    if (response.status === 200) {
      if (response.data.errors) {
        alert("error", response.data.errors[0].message);

      }
      else {
        alert("success", "Added Successfully!!");
        const newObj = Object.assign(response.data.data);
        cb(newObj);
      }
    }
    else {
      alert("error", "Failed to fetch!");
    }
  }
}

export const filterType = (data) => {
  let result = [];
  data.filter((e, i) => { return e.isgroup === true }).forEach((e) => {
    result.push(e.type)
  })
  return result;
}

