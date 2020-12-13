const catThumbnails = document.querySelectorAll(".c-figure");

for (const cat of catThumbnails) {
  cat.addEventListener("click", (e) => {
    console.log(e.target.id);
    window.location.href = `/${e.target.id}.html`;
  });
}
