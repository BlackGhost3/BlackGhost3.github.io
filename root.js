(()=>{
 let h = document.createElement("h1");
 let p = document.createElement("p");
 let bg = "#000000";
 h.textContent = "hey there, i'm still building this site";
 document.body.appendChild(h);
 document.body.appendChild(p);
 document.addEventListener("mousemove", e => {
  bg = `#${e.clientX}${e.clientY}`;
  p.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
  document.body.style.backgroundColor = bg;
 });
})();
