(()=>{
 let h = document.createElement("h1");
 let p = document.createElement("p");
 h.textContent = "hey there, i'm still building this site";
 document.body.appendChild(h);
 document.body.appendChild(p);
 document.addEventListener("mousemove", e => {
  p.textContent = `x: ${e.clientX}, y: ${e.clientY}`;
 });
})();
