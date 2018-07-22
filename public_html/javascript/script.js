function setupCollapse()
{
  var toggleCollapse = function()
  {
    var content = this.parentNode.parentNode.querySelector(".content");
    if(content.classList.contains("hidden"))
    {
      content.classList.remove("hidden");
    }
    else
    {
      content.classList.add("hidden");
    }
  }

  var elements = document.querySelectorAll(".collapse .face span");
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

setupTextPopup();
setupCollapse();
setupMoreText();
setupPfpMeme();
fakeType(document.querySelector(".right h1"), 
         document.querySelector(".right p"), 
         "Full_Nitrous", 
         "Honestly, managing memory is better than jerking off.\n\n-anime pic cunt");