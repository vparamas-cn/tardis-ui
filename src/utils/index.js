export const filterdata = (data, params) => {
    let result = data;
    for (var y of Object.keys(params)) {
        if (Array.isArray(params[y])) {
            
                result = result.filter(function (e) {
                    return params[y].indexOf(e[y]) > -1;
                })
        }
        else {
            result = result.filter(function (e) {
                return e[y] === params[y];
            })
        }
    }

    return result;
}

export const paginationFilter = (dataSource) => {
    let { totalElements, size, data, filter, page } = dataSource;
    var resultdata = data;
    var isFilter =false;
    if (Object.keys(filter).length > 0) {
        resultdata = filterdata(resultdata, filter);
        isFilter =true;
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
    x.className = `show " ${status==="success"?"greenclr":"redclr"}`;
    x.innerHTML = data.substring(0,40)
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

export const showHide = (selectedrow, arrowimg, data) => {
    var trd = document.getElementById(selectedrow);
    var isopen =false;
    if (trd.className.indexOf("hidden_row") > -1) {
      trd.classList.remove("hidden_row");
      isopen =true;
    }
    else {
      trd.classList.add("hidden_row");
      isopen =false;
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

  export const ActionUpdate = (response , data, type,cb) =>{
    if(type == "Update")
    {
        if(response.status === 200){
            if(response.data.errors)
            {
              alert("error",response.data.errors[0].message);
            }
            else{
              alert("success","Updated Successfully!!");
              data.type="update"
              cb();
            }
        }
        else{
        alert("error","Failed to fetch!");
        }
    }
    else if (type == "Delete"){
        if(response.status === 200){
            if(response.data.errors)
            {
              alert("error",response.data.errors[0].message);
              
            }
            else{
              alert("success","Deleted Successfully!!");
              data.type="delete"
              cb();
            }
          }
          else{
            alert("error","Failed to fetch!");
          }
    }
    else if (type == "Add")
    {
        if(response.status === 200){
            if(response.data.errors)
            {
              alert("error",response.data.errors[0].message);
              
            }
            else{
              alert("success","Added Successfully!!");
              data.type="add"
              cb();
            }
          }
          else{
            alert("error","Failed to fetch!");
          }
    }
  }