function Taydenna() {
    const tämäPäivä = new Date();
    var tämäVuosi = tämäPäivä.getFullYear();
    var spvm = document.getElementById("Spvm").value;
    syntymäPäivä = new Date(spvm);
    var syntymäVuosi = syntymäPäivä.getFullYear();
    var ikä = tämäVuosi - syntymäVuosi;

    const eNimi = document.getElementById("eNimi").value;
    const sNimi = document.getElementById("sNimi").value;
    var nimi = eNimi + " " + sNimi;

    var tulos = "Hei " + nimi + "! Olet " + ikä + " vuotias!"

    document.getElementById("tulos").innerHTML = tulos;
}