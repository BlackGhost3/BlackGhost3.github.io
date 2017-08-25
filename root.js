(()=>{
    bootloader();
    stillMaking();
    socialMedia();
})();

function bootloader(){
    let style = document.createElement("style");
    style.innerHTML = `body{transition:background-color linear .1s;overflow:hidden;position:relative}.parent{display:flex;align-items:center;justify-content:center;width:100%;height:100vh;flex-direction:column;transition:all ease .2s;z-index:1}.social-parent{position:absolute;left:0;top:50%;transform:translateY(-45%);height:150px;width:100px;background-color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:2;cursor:pointer}.media-item{position:relative;width:100%;height:50px;border-bottom:1px solid #222;display:flex;align-items:center;justify-content:center}.media-item:last-child{border-bottom:none}`;
    document.head.appendChild(style);
}

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
 <br/>psssst, move your cursor
 `;

    p.innerHTML = `x: unknown, y: unknown <br/>background-color: white <br/> font color: black`;

    document.body.appendChild(parent);
    parent.addEventListener("mousemove", e => {
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
        spans.push(e);
        e.addEventListener("click",function(e){
            window.open(e.target.dataset.href, "_blank");
            e.preventDefault();
        });
    }
    console.log(spans);
    for(let item in spans){
        parent.appendChild(spans[item]);
        console.log(spans[item])
    }
    document.body.appendChild(parent);
}