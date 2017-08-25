(()=>{
    stillMaking();
    socialMedia();
})();

function stillMaking(){
    let h = document.createElement("h1");
    let p = document.createElement("p");
    let parent = document.createElement("div");
    parent.classList.add("parent");
    parent.appendChild(h);
    parent.appendChild(p);
    let bg = "#000000";
    let f = ``;
    let reverse_bg = "#fff";
    window.extra = { h, p, f, reverse_bg };
    h.innerHTML = `
 hey there, i'm still building this site
 <br/>psssst, move your cursor over the screen
 `;

    p.innerHTML = `x: unknown, y: unknown <br/>background-color: white <br/> font color: black`;

    document.body.appendChild(parent);
    document.addEventListener("mousemove", e => {
        window.extra.bg = bg;
        let x = e.clientX,
            y = e.clientY;
        bg = `#${x}${y}`;
        if (bg.length < 7)
            bg += "000000";
        while (bg.length > 7)
            bg = bg.slice(0, -1);
        f = `x: ${e.clientX}, y: ${e.clientY}`;
        f += `<br/>background-color: ${bg}`;
        f += `<br/> font color: #fff`;
        p.innerHTML = f;
        p.style.color = reverse_bg;
        h.style.color = reverse_bg;
        document.body.style.backgroundColor = bg;
        let TX = (x / 5),
            TY = (y / 5);
        parent.style = `transform: translate(${TX}px, ${TY}px);`;

    });
}

function socialMedia(){
    let parent = document.createElement("div");
    parent.classList.add("social-parent");
    let socialMedia = {
        'facebook' : 'https://fb.com/karamkarim.py',
        'instagram': 'https://www.instagram.com/_._php_._/',
        'github'   : 'https://github.com/blackghost3'
    };
    let spans = [];
    for(let link in socialMedia){
        let e = document.createElement('span');
        e.classList.add('media-item');
        e.textContent = link;
        e.dataset.href = socialMedia[link];
    }
    for(let item in spans)
        parent.appendChild(item);
    document.body.appendChild(parent);
}