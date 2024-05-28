const mainDiv = document.getElementById("products");

function fetchData(){
  fetch("https://fakestoreapi.com/products").then(function(res){
    return res.json()
  }).then(function(data){
    console.log(data)
    displayData(data)
  })
}
fetchData()
let c = 0;
function displayData(products) {
  products.forEach(function (prod) {
    const myDiv = document.createElement("div");
    myDiv.classList.add("prod");

    const image = document.createElement("img");
    image.src = prod.image;
    image.style.height = "250px";
    image.style.width = "200px";
    image.alt = prod.title;

    const title = document.createElement("h2");
    title.textContent = prod.title;

    const desc = document.createElement("h3");
    const fullDesc = prod.description;
    const halfDesc = fullDesc.substring(0, 95) + "...";

    desc.textContent = halfDesc;
    desc.classList.add("description");

    const readMoreLink = document.createElement("a");
    readMoreLink.href = "#";
    readMoreLink.textContent = "Read more";
    readMoreLink.classList.add("read-more");

    readMoreLink.addEventListener("click", function (event) {
      event.preventDefault();
      if (desc.textContent === halfDesc) {
        desc.textContent = fullDesc;
        readMoreLink.textContent = "Read less";
      } else {
        desc.textContent = halfDesc;
        readMoreLink.textContent = "Read more";
      }
    });

    const btn = document.createElement("button");
    btn.textContent = "Add To Cart";
    btn.addEventListener("click", change);

    myDiv.append(image, title, desc, readMoreLink, btn);
    mainDiv.appendChild(myDiv);
  });
}

displayData(products);
function change(e) {
  console.log(e.target.textContent);
  if (e.target.textContent == "Add To Cart") {
    c++;
    document.getElementById("count").textContent = c;
    e.target.textContent = "Remove From Cart";
  } else {
    c--;
    document.getElementById("count").textContent = c;
    e.target.textContent = "Add To Cart";
  }
}
change(e);
