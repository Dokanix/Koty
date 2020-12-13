const catThumbnails = document.querySelectorAll(".c-figure");

for (const cat of catThumbnails) {
  cat.addEventListener("click", (e) => {
    let url = window.location.href;
    url = url.split("/");
    url.pop();
    url = url.join("/");
    window.location = `${url}/${e.target.id}.html`;
  });
}
