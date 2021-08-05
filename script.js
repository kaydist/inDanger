const flex = document.querySelector(".flex");
const content = document.querySelectorAll(".content");


flex.onclick = e => {
  const id = e.target.dataset.animal;
  if (id) {
    content.forEach(btn => {
      btn.classList.remove("content-active");
    });
    e.target.classList.add("content-active");


    //change number on click to the present number
    document.getElementById("present-number").textContent = id
}
    
}