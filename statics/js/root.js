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
    if(!navs) return;
    for (const nav of navs)
        nav.addEventListener("click", this.navigateNavClicks.bind(this));
  }

  navigateNavClicks(e){
    for (let i =0; i < this.elems.nav.length; i++)
        this.elems.nav[i].classList.remove("active");
    let targetName = e.target.getAttribute("js-nav-click"),
        target = document.querySelector(`#${targetName}`);
      if (!target.classList.contains("active") && target in this.dontShow === false)
              target.classList.add("active");
      if(target in this.dontShow && target.dataset.js-fallback != ""){
        // fall back if target won't show
        let fallback = document.querySelector(`${target.dataset}`);
        fallback.classList.add("active");
      }

      if(target in this.elems.nav === false)
              this.elems.nav.push(target);
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

  hashChange(){
    if ("onhashchange" in window)
      window.addEventListener("hashchange", this.hashCheck.bind(this), false);
  }

  hashCheck(){
    if(window.location.hash == "#cv")
      this.toCV();
  }

  ignoreView(id){
    this.dontShow.push(document.querySelector(`#${id}`));
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
