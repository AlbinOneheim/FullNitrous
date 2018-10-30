function setupCollapse()
{
  var toggleCollapse = function()
  {
    var content = this.parentNode.querySelector(".content");
    if(content.classList.contains("hidden"))
    {
      content.classList.remove("hidden");
    }
    else
    {
      content.classList.add("hidden");
    }
  }

  var elements = document.querySelectorAll(".collapse .face");
  for(var i = 0; i < elements.length; i++)
  {
    elements[i].addEventListener("click", toggleCollapse, false);
  }
}

function setupMoreText()
{
  var toggleMoreText = function()
  {
    var extraText = this.parentNode.querySelector(".extra-text");
    if(extraText.classList.contains("hidden"))
    {
      extraText.classList.remove("hidden");
      this.innerHTML = "less...";
    }
    else
    {
      extraText.classList.add("hidden");
      this.innerHTML = "more...";
    }
  }

  var moreTextBtns = document.getElementsByClassName("more-text-btn");
  for(var i = 0; i < moreTextBtns.length; i++)
  {
    moreTextBtns[i].addEventListener("click", toggleMoreText, false);
  }
}

function setupTextPopup()
{
  var openPopup = function()
  {
    var data = this.dataset.popupText;
    var popupElement = document.querySelector(".popup");
    popupElement.querySelector(".content span").innerHTML = data;
    popupElement.classList.remove("inactive");
  }

  var closePopup = function()
  {
    var popupElement = document.querySelector(".popup");
    popupElement.classList.add("inactive");
  }

  var popupElements = document.getElementsByClassName("popup-link");
  for(var i = 0; i < popupElements.length; i++)
  {
    popupElements[i].addEventListener("click", openPopup, false);
  }
  var closePopupBtn = document.getElementById("close-popup");
  closePopupBtn.addEventListener("click", closePopup);
}

function setupPfpMeme()
{
  var flipPfp = function()
  {
    document.getElementById("back").classList.remove("flip");
    this.classList.add("flip");
  }

  var flipBack = function()
  {
    document.getElementById("pfp").classList.remove("flip");
    this.classList.add("flip");
  }

  var pfp = document.getElementById("pfp");
  var back = document.getElementById("back");
  pfp.addEventListener("click", flipPfp, false);
  back.addEventListener("click", flipBack, false);
}

function probabilityRNG() 
{
  var set = [100, 10, 40, 50, 150, 100, 300, 100, 100, 250, 100, 150, 150, 50, 20, 100, 90, 88, 34];
  var index = Math.floor(Math.random() * set.length);
  return set[index];
}

function fakeType(h1e, pe, h1, p)
{
  if(h1.length != 0)
  {
    h1e.innerHTML += h1[0];
    h1 = h1.slice(1);
    var time = probabilityRNG();
    setTimeout(fakeType.bind(null, h1e, pe, h1, p), time);
  }
  else if(p.length != 0)
  {
    if(p[0] == "\n")
    {
      pe.innerHTML += "<br>"
    }
    else
    {
      pe.innerHTML += p[0];
    }
    p = p.slice(1);
    var time = probabilityRNG();
    setTimeout(fakeType.bind(null, h1e, pe, h1, p), time);
  }
}

function setup_theme()
{
  var light_theme = true;
  var root = document.documentElement;
  function toggle_theme()
  {
    if(light_theme == true)
    {
      this.classList.remove("theme-light");
      light_theme = false;
      root.style.setProperty("--bg-color", "#1b1c20");
      root.style.setProperty("--fg-color", "whitesmoke");
      root.style.setProperty("--box-color", "rgb(33, 34, 37)");
      root.style.setProperty("--border-box-color", "black");
      root.style.setProperty("--link-color", "#008cff");
    }
    else
    {
      light_theme = true;
      this.classList.add("theme-light");
      root.style.setProperty("--bg-color", "white");
      root.style.setProperty("--fg-color", "black");
      root.style.setProperty("--box-color", "whitesmoke");
      root.style.setProperty("--border-box-color", "#cfcfcf");
      root.style.setProperty("--link-color", "blue");
    }
    return;
  }

  var theme_toggle = document.getElementById("theme-toggle");
  theme_toggle.addEventListener("click", toggle_theme, false);
}

function setup_phone_thing()
{
  function toggle_view_profile()
  {
    var profile = document.querySelector("header");
    if(profile.classList.contains("no-disp-900"))
    {
      profile.classList.remove("no-disp-900");
    }
    else
    {
      profile.classList.add("no-disp-900");
    }
  }
  var toggle_view_more = document.getElementById("toggle-view-profile");
  toggle_view_more.addEventListener("click", toggle_view_profile, false);
  return;
}

function setup_top_selector()
{
  function change_from_top()
  {
    var show = document.getElementById(this.dataset.id);
    var hide = document.querySelector(".display .previous");
    if(show != hide)
    {
      show.classList.remove("no-disp");
      show.classList.add("previous");
      
      hide.classList.add("no-disp");
      hide.classList.remove("previous");
    }
    return;
  }
  var selectors = document.getElementsByClassName("top-option");
  for(var i = 0; i < selectors.length; i++)
  {
    selectors[i].addEventListener("click", change_from_top, false);
  }
  return;
}

setup_top_selector();
setup_phone_thing();
setup_theme();
setupTextPopup();
setupCollapse();
setupMoreText();
setupPfpMeme();
fakeType(document.querySelector(".js-lol h1"), 
         document.querySelector(".js-lol p"), 
         "Full_Nitrous", 
         "Honestly, managing memory is better than jerking off.\n\n-anime pic cunt");