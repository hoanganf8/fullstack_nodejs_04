// const pattern = /[^0-9a-z]+/;
// const str = "hoangan123";
// console.log(pattern.test(str));
/*
a >= 0 hoặc a <= 10
*/

// const pattern = /^(0|\+84)\d{9}$/;
// const phone = "+84388875179";
// console.log(pattern.test(phone));

//^(http|https):\/\/([a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.[a-z]{2,}(:\d{2,}|)(\/*|\/[^\s]+)$

// const content = `Lorem Ipsum https://fullstack.edu.vn is simply dummy text of the printing and typesetting industry. Lorem https://vnexpress.net Ipsum has been the industry's standard dummy text ever HTTPS://google.com since the 1500s, when an unknown printer took a galley of type and`;

// const pattern =
//   /(http|https):\/\/([a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.[a-z]{2,}(:\d{2,}|)(\/*|\/[^\s]+)/gi;

// const url = content.match(pattern);
// console.log(url);

// const str = `hoangan.web@gmail.com`;
// const pattern = /^([\w\.-]{3,})@([\w\.-]{1,}\.[a-z]{2,})$/;
// const result = str.match(pattern);
// console.log(result);

// const pattern =
//   /^(?:http|https):\/\/(?:[a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.([a-z]{2,})(?::\d{2,}|)(?:\/*|\/[^\s]+)$/i;
// const url = "https://fullstack.edu.vn/khoa-hoc/fullstack-nodejs";
// const result = url.match(pattern);
// console.log(result);

let content = `Lorem Ipsum https://fullstack.edu.vn is simply dummy text of the printing and typesetting industry. Lorem https://vnexpress.net Ipsum has been the industry's standard dummy text ever HTTPS://google.com since the 1500s, when an unknown printer took a galley of type and`;

const pattern =
  /((?:http|https):\/\/((?:[a-z0-9][a-z0-9-_\.]*\.|)[a-z0-9][a-z0-9-_\.]*\.[a-z]{2,}(?::\d{2,}|)(?:\/*|\/[^\s]+)))/gi;

// content = content.replace(pattern, "<button>Đăng nhập để xem link</button>");
content = content.replace(pattern, `<a href="$1" target="_blank">$2</a>`);

document.body.innerHTML = content;
