/* Menu mobile + méga-menu — sans dépendance */
(function () {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-principale");

  if (burger && nav) {
    burger.addEventListener("click", function () {
      var ouvert = nav.classList.toggle("ouvert");
      burger.setAttribute("aria-expanded", ouvert ? "true" : "false");
      burger.setAttribute("aria-label", ouvert ? "Fermer le menu" : "Ouvrir le menu");
    });
  }

  // Sous-menus (méga-menu inclus) : ouverture au clic (mobile + clavier)
  document.querySelectorAll(".nav-declencheur").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var li = btn.closest(".a-sous-menu");
      var etaitOuvert = li.classList.contains("ouvert");
      // Ferme les autres sous-menus
      document.querySelectorAll(".a-sous-menu.ouvert").forEach(function (autre) {
        autre.classList.remove("ouvert");
        var b = autre.querySelector(".nav-declencheur");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!etaitOuvert) {
        li.classList.add("ouvert");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Clic en dehors : ferme tout
  document.addEventListener("click", function () {
    document.querySelectorAll(".a-sous-menu.ouvert").forEach(function (li) {
      li.classList.remove("ouvert");
      var b = li.querySelector(".nav-declencheur");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  });

  // Échap : ferme tout
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".a-sous-menu.ouvert").forEach(function (li) {
        li.classList.remove("ouvert");
      });
      if (nav) nav.classList.remove("ouvert");
      if (burger) burger.setAttribute("aria-expanded", "false");
    }
  });
})();
