function validateForm() {
    var x = document.forms["registration"]["checkbox"].value;
    if (x == "") {
        alert("Pour pouvoir acheter une seance vous devez accepter le reglementaire de la salle.");
        return false;
    }
}