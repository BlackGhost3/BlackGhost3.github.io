(()=>{
 let h = document.createElement("h1");
 let p = document.createElement("p");
 let bg = "#000000";
 let f = ``;
 h.innerHTML = `
 hey there, i'm still building this site
 <br/>psssst, move your cursor over the screen
 `;

 document.body.appendChild(h);
 document.body.appendChild(p);
 document.addEventListener("mousemove", e => {
  bg = `#${e.clientX}${e.clientY}`;
  if (bg.length < 7)
     bg += "000000";
  while (bg.length > 7)
    bg = bg.slice(0, -1);
  f = `x: ${e.clientX}, y: ${e.clientY}`;
  f += `\nbackground-color: ${bg}`;
  p.textContent = f;
  document.body.style.backgroundColor = bg;
 });
})();
