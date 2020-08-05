import axios from 'axios'
import {apiUrl} from '../assets/constant'

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
      return {status:400}
    });
  }
  catch (e) {
    return {status:400}
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
        if (typeof e[y] === "object") {
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
  if (totalPage < page) {
    page = 1
  }
  let sizecheck = page * size;
  let pagecheck = (sizecheck - size)
  resultdata = resultdata.slice(pagecheck, sizecheck);
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
  x.innerHTML = data.substring(0, 60)
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

export const showHide = (selectedrow, arrowimg, data) => {
  var trd = document.getElementById(selectedrow);
  var isopen = false;
  if (trd.className.indexOf("hidden_row") > -1) {
    trd.classList.remove("hidden_row");
    isopen = true;
  }
  else {
    trd.classList.add("hidden_row");
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
  return isopen
}

export const ActionUpdate = (response, data, type, cb) => {
  if (type === "Update") {
    if (response.status === 200) {
      if (response.data.errors) {
        alert("error", response.data.errors[0].message);
      }
      else {
        alert("success", "Updated Successfully!!");
        const newObj = Object.assign({selected: false}, data);
        newObj.type = "update"
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
        const newObj = Object.assign({selected: false}, data);
        newObj.type = "delete"
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
        const newObj = Object.assign({selected: false}, data);
        newObj.type = "add"
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

