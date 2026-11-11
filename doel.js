const knoppen = document.querySelectorAll(".buttond");

knoppen.forEach(function (knop) {
    knop.addEventListener("click", function () {

        knoppen.forEach(function (item) {
            item.style.backgroundColor = "white";
            item.style.color = "#111111";
        });

        knop.style.backgroundColor = "#FFD719";
        knop.style.color = "#111111";

    });
});


const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const keuze = confirm("Wil je een e-mail sturen via Gmail? Klik Annuleren voor Outlook.");

    const email = "servicecenter@amnesty.nl";

    if (keuze) {
        window.open(
            "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(email),
            "_blank"
        );
    } else {
        window.open(
            "https://outlook.office.com/mail/deeplink/compose?to=" + encodeURIComponent(email),
            "_blank"
        );
    }
});