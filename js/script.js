// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then((res) => {  // then means after^^
//     return res.json();
// })
// .then((data) => {
//     console.log(data);
// });

// async function getData(url) {
//     const response = await fetch(url); // await means wait^^
//     const data = await response.json();
//     return data;

// }

// getData(`https://jsonplaceholder.typicode.com/posts`).then((data) => {
//     console.log(data);

//     postsEl.innerHTML ="<div class='box'> " +
//      "<h1>" + data[0].title + "</h1><h2>User id:" + data[0].userId + "</h2><p>" + data[0].body + "</p></div>";
// });


// console.log(getData(`https://jsonplaceholder.typicode.com/posts`));

const postsEl = document.getElementById("posts");

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

getData("https://jsonplaceholder.typicode.com/posts/").then((data) => {
  console.log(data);
for(key in data){
  postsEl.innerHTML +="<div class='box'> " + "<h1>" + data[key].title + "</h1><h2>User id:" + data[key].userId + "</h2><p>" + data[key].body + "</p></div>";
}
});

let post = 0;


