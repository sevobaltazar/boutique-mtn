const boutonsAjouter = document.querySelectorAll(".ajouter-panier");
const panierListe = document.getElementById("panier-liste");
const totalAffichage = document.getElementById("total");
const panierCount = document.getElementById("panier-count");
const panierContainer = document.getElementById("panier-container");
const voirPanier = document.getElementById("voir-panier");

let panier = [];

boutonsAjouter.forEach(bouton => {
    bouton.addEventListener("click", () => {
        const carte = bouton.parentElement;
        const nom = carte.getAttribute("data-nom");
        const prix = parseFloat(carte.getAttribute("data-prix"));

        panier.push({ nom, prix });
        majPanier();
    });
});

voirPanier.addEventListener("click", (e) => {
    e.preventDefault();
    panierContainer.classList.toggle("cacher");
});

function majPanier() {
    panierListe.innerHTML = "";
    let total = 0;

    panier.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.nom} - ${item.prix.toLocaleString()} <small>FCFA</small>`;
        panierListe.appendChild(li);
        total += item.prix;
    });

    totalAffichage.innerHTML = `${total.toLocaleString()} <small>FCFA</small>`;
    panierCount.textContent = panier.length;
}
