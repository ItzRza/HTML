// Span element
var lastadded = document.getElementById("last");

function add() {
    // Input değeri
    var field = document.getElementById("field").value.trim();

    if (field === "" | /\d/.test(field)) {
        alert("Please enter a value");
        return;
    }

    // Last added güncelle
    lastadded.textContent = "Last added: " + field;

    // Table'a ekle
    addToTable(field);

    // Input temizle
    document.getElementById("field").value = "";
}

function addToTable(word) {
    // İlk harfi al ve büyük yap
    var firstChar = word.charAt(0).toUpperCase();

    // Table'da bu harfe karşılık gelen <td> bul
    var row = document.querySelector(`#wordTable tr[data-letter="${firstChar}"] td:nth-child(2)`);

    if (row) {
        if (row.textContent === "") {
            row.textContent = word;
        } else {
            // Daha önce kelimeler varsa, virgülle ayır
            row.textContent += ", " + word;
        }
    } else {
        console.log("Table row for " + firstChar + " not found.");
    }
}
