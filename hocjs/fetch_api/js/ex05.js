//Xử lý hết hạn khi có nhiều API gọi cùng 1 lúc

const requestRefresh = () => {
  return new Promise((resolve) => {
    console.log("Request Refresh");
    setTimeout(() => {
      resolve("New Token");
    }, 1000);
  });
};
let isExpired = true;
let token = "My Token";
let refreshTokenRequest = null;
const fetch = (resource, token) => {
  setTimeout(() => {
    console.log(`Request: ${resource} with ${token}`);
  }, 1000);
};
const request = async (resource) => {
  if (isExpired) {
    if (!refreshTokenRequest) {
      refreshTokenRequest = requestRefresh();
    }

    const newToken = await refreshTokenRequest;
    token = newToken;
    fetch(resource, token);
    return;
  }

  fetch(resource, token);
};

request("slider");
request("course");
request("posts");

/*
request 1 -> Chưa expire -> Get Data
request 2 -> expire -> request refresh -> get data
request 3 -> expire -> request refresh -> get data

Cần xử lý: 
request 1 -> Chưa expire -> ok
request 2 -> expire -> cấp lại access mới
                                        -> request 3
*/
