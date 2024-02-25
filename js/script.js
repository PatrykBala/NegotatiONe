$(document).ready(function(){
    $("#menu").click(function(){
      $("li").toggleClass("hide");
        });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.footer-link');
    const movementSpeed = 3;
    
    const hoverLink = (event) => {
        let targetNode = event.target;

        const { left, top, width, height } = targetNode.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        let x = (centerX - event.pageX) / movementSpeed;
        let y = (centerY - event.pageY) / movementSpeed;
    
        targetNode.style.setProperty('--x', `${x}px`);
        targetNode.style.setProperty('--y', `${y}px`);
    }

    links.forEach(link => {
        link.addEventListener('mousemove', hoverLink);
    });
});


document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.getElementById("about-link");
  var aboutPopup = document.getElementById("about-popup");

  aboutLink.addEventListener("mouseover", function(event) {
      aboutPopup.style.display = "block";
  });

  aboutLink.addEventListener("mouseleave", function(event) {
      aboutPopup.style.display = "none";
  });

  var informationLink = document.getElementById("information-link");
  var informationPopup = document.getElementById("information-popup");

  informationLink.addEventListener("mouseover", function(event) {
      informationPopup.style.display = "block";
  });

  informationLink.addEventListener("mouseleave", function(event) {
      informationPopup.style.display = "none";
  });

  var registrationLink = document.getElementById("registration-link");
  var registrationPopup = document.getElementById("registration-popup");

  registrationLink.addEventListener("mouseover", function(event) {
      registrationPopup.style.display = "block";
  });

  registrationLink.addEventListener("mouseleave", function(event) {
      registrationPopup.style.display = "none";
  });
});
document.addEventListener("DOMContentLoaded", function() {
  var aboutLink = document.getElementById("information-link");
  var aboutPopup = document.getElementById("information-popup");

  aboutLink.addEventListener("mouseover", function(event) {
      aboutPopup.style.display = "block";
  });

  aboutLink.addEventListener("mouseleave", function(event) {
      aboutPopup.style.display = "none";
  });

  // Analogiczne nasłuchiwanie dla innych elementów menu
});


document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById("loginButton");
  var loginPopup = document.getElementById("loginPopup");
  var loginForm = document.getElementById("loginForm");
  var timer; // Zmienna do przechowywania identyfikatora timera
  var countdownTimer; // Zmienna do przechowywania identyfikatora timera odliczającego

  loginButton.addEventListener("click", function(event) {
      if (loginPopup.style.display === "block") {
          loginPopup.style.display = "none"; // Ukrywa popup, jeśli jest już widoczny
      } else {
          loginPopup.style.display = "block";
          resetTimer();
      }
  });

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      // Do something with username and password, like sending to server for authentication
      console.log("Username:", username);
      console.log("Password:", password);
      // Clear input fields
      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
      // Close popup
      loginPopup.style.display = "none";
      resetTimer();
  });

  // Funkcja, która resetuje timer
  function resetTimer() {
      clearTimeout(timer); // Usuwa istniejący timer, jeśli istnieje
      clearTimeout(countdownTimer); // Usuwa istniejący timer odliczający, jeśli istnieje

      // Ustawia timer na 20 sekund
      timer = setTimeout(function() {
          loginPopup.style.display = "none"; // Ukrywa popup po 20 sekundach
      }, 20000); // 20 sekund (20000 milisekund)

      // Rozpoczyna odliczanie czasu na oknie popup
      var timeLeft = 20; // Sekundy
      var popupCountdown = document.getElementById("popupCountdown");

      countdownTimer = setInterval(function() {
          popupCountdown.textContent = "Time left: " + timeLeft + "s";
          timeLeft--;
          if (timeLeft < 0) {
              clearInterval(countdownTimer);
              popupCountdown.textContent = ""; // Ukrywa odliczanie, gdy czas się skończy
          }
      }, 1000); // Aktualizuje co 1 sekundę
  }

  // Nasłuchuje zdarzenia, gdy mysz wchodzi na obszar okienka popup
  loginPopup.addEventListener("mouseover", function(event) {
      clearTimeout(timer); // Resetuje timer, gdy mysz wchodzi na obszar okienka
  });

  // Nasłuchuje zdarzenia, gdy mysz opuszcza obszar okienka popup
  loginPopup.addEventListener("mouseout", function(event) {
      resetTimer(); // Uruchamia timer, gdy mysz opuszcza obszar okienka
  });
});
