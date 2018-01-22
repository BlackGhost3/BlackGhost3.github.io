'use strict';

class Karam {
  constructor(tools) {
    this.doc = document;
    this.locale = {
      ar : false,
      en : true,
      used : []
    }
    this.body = document.body;
    this.tools = null;
    this.elems = {
      nav : []
    };
    this.dontShow = [];
    if(tools instanceof Tools == false){
        throw new Error("tools must be instance of class Tools");
    }else {
      this.tools = tools;
    }

    let alertifyJs = document.createElement("script");
    alertifyJs.src = "/statics/alertifyjs/alertify.min.js";
    alertifyJs.charset = "UTF-8";
    document.body.appendChild(alertifyJs);

  }

  run(e){
    console.info("window loaded");
    this.removePreloader();
    this.navClicks();
    this.getLocale();
    this.translate();
    this.hashCheck();
    this.hashChange();
  }

  removePreloader(){
    document.getElementById("preloader").remove();
    document.getElementById("initial-load").remove();
    document.body.classList.remove("black");
    document.querySelector("#app").classList.remove("hidden");
  }

  navClicks(){
    let navs = document.querySelectorAll("[js-nav-click]");
    let targets = document.querySelectorAll(".view");
    // push them to class global variable
    targets.forEach((elem) => {
      if (this.elems.nav.indexOf(elem) == -1)
        this.elems.nav.push(elem);
    });
    if(!navs) return;
    for (let nav of navs)
        nav.addEventListener("click", this.navigateNavClicks.bind(this));
  }

  navigateNavClicks(e){
    console.log(this.elems.nav);
    for (let i =0; i < this.elems.nav.length; i++){
        this.elems.nav[i].classList.remove("active")
      }

    let targetName = e.target.getAttribute("js-nav-click"),
        target = document.querySelector(`#${targetName}`);
    if (target.classList.contains("active") == false && this.dontShow.indexOf(target.id) == -1)
          target.classList.add("active");

    if (this.dontShow.indexOf(target.id) != -1){
        // fall back if target won't show
        let fallback = document.querySelector(`${e.target.dataset.fallback}`);
        fallback.classList.add("active");
      }
  }

  getLocale(){
    if ("ar" in window.navigator.languages) {
      this.locale.ar = true;
    } else if("en" in window.navigator.languages){
      this.locale.en = true;
    }
    this.locale.used = window.navigator.languages;
  }

  translate(){
    // idk, I might add it in future
    // karamkarim.cf/json/translation.json
  }

  toCV(){
    window.location.href = "./cv/";
  }

  toRAT(){
    alertify.confirm("Redirect To Github", "Do you want to view noderat's source code ?", () => {
      location.href = "https://github.com/node-rat/NodeRAT";
    }, () => {
      alertify.alert("Redirection canceled");
    });
  }

  hashChange(){
    if ("onhashchange" in window)
      window.addEventListener("hashchange", this.hashCheck.bind(this), false);
  }

  hashCheck(){
      switch (window.location.hash) {
        case "#cv":
          this.toCV();
          break;
        case "#np":
          this.ignoreView("pricing");
          break;
        case "#rat":
          this.toRAT();
          break;
      }
  }

  ignoreView(id){
    this.dontShow.push(id);
  }
}

class Tools {

  randomVarChar(len = 10){
    let s = "1234567890!@#$%qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        r = [];
        for (var i = 0; i < len; i++) {
          r.push(s[this.randomInt(0, s.length)]);
        }
        return r.join("");
  }

  randomInt(min = 0, max = 900){
    return Math.floor( Math.random() * (min - max) + max );
  }


}


(() => {
  const tools = new Tools;
  const karam = new Karam(tools);
  window.onload = karam.run.bind(karam);
})();
