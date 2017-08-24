(()=>{
 let h = document.createElement("h1");
 let p = document.createElement("p");
 let bg = "#000000";
 let f = ``;
 let reverse_bg = "";
 window.extra = {h,p,f, reverse_bg};
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
  f += `<br/>background-color: ${bg}`;
  reverse_bg = bg.split("").reverse().join("");
  // p.innerHTML = f;
  p.innerHTML = reverse_bg;
  console.log("color:", bg, " - R:",reverse_bg);
  p.style.color = reverse_bg;
  h.style.color = reverse_bg;
  document.body.style.backgroundColor = bg;
 });
})();
