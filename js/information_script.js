function openTab(tabId) {
  // Ukryj wszystkie treści zakładek
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Znajdź aktywną zakładkę i usuń jej klasę active
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  
  // Pokaż wybraną zakładkę
  document.getElementById("content-" + tabId).style.display = "block";
  
  // Dodaj klasę active do wybranej zakładki
  document.getElementById(tabId).classList.add("active");
}

function openTab(tabId) {
    // Ukryj wszystkie treści zakładek
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
    }
    
    // Znajdź aktywną zakładkę i usuń jej klasę active
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove("active");
    }
    
    // Pokaż wybraną zakładkę
    document.getElementById("content-" + tabId).style.display = "block";
    
    // Dodaj klasę active do wybranej zakładki
    document.getElementById(tabId).classList.add("active");
  
    // Ukryj domyślny tekst
    document.querySelector('.default-text').classList.add('hide-default');
  }
