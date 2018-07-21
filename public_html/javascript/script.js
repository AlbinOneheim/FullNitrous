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

setupTextPopup();
setupCollapse();
setupMoreText();