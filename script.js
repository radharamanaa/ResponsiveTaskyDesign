let i = 0;
let colorArray = ["#DC136C", "#353A47", "#885A5A", "#C45AB3", "#631A86"];
const dateElements = document.getElementsByClassName("date");
Array.from(dateElements).forEach((item) => {
  item.innerHTML = new Date().toDateString();
});
Array.from(document.getElementsByClassName("category")).forEach(
  (item) => (item.style.backgroundColor = colorArray[i++ % colorArray.length])
);


