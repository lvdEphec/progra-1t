// CREATION DYNAMIQUE DU CODE HTML D'UNE TABLE
// SE BASANT SUR LES DONNEES D'UN TABLEAU (ARRAY)
// AVEC TRI DES DONNEES SUR PLUSIEURS NIVEAUX

// voici un "tableau associatif" (dictionnaire) référencant des objets étudiants
// soit ici un objet contenant des objets
let etudiants = {
              HE100 : { nom : "Talu", prenom : "Jean"},
              HE101 : { nom : "Fraichi", prenom : "Sara"},
              HE102 : { nom : "Fraichi", prenom : "Béa"},
              HE103 : { nom : "Zarella", prenom : "Maude"}
              };


///////////////////////////////////////////////////////

window.addEventListener("load", initialiserPage);

// fonction permettant de comparer deux étudiants sur leurs noms puis leurs prénoms (si noms égaux), sur base de leurs matricules
// ici ne fonctionne pas bien pour les caractères accentués
function comparerEtudiantsNomsPrenoms(matricule1, matricule2) {
    if (etudiants[matricule1].nom.toLowerCase() > etudiants[matricule2].nom.toLowerCase()) return 1;
    if (etudiants[matricule2].nom.toLowerCase() > etudiants[matricule1].nom.toLowerCase()) return -1;

    if (etudiants[matricule1].prenom.toLowerCase() > etudiants[matricule2].prenom.toLowerCase()) return 1;
    if (etudiants[matricule2].prenom.toLowerCase() > etudiants[matricule1].prenom.toLowerCase()) return -1;

    return 0;
}

// fonction permettant de comparer deux étudiants sur leurs noms, sur base de leurs matricules
// utilisation de la méthode localeCompare pour comparer sur base de l'alphabet local (ok majuscule, accents, ...)
function comparerEtudiantsNoms(matricule1, matricule2) {
    return etudiants[matricule1].nom.localeCompare(etudiants[matricule2].nom);
}


function genererCodeHtmlTableEtudiants(index) {
  let lignesHtml = "";
  for (let k of index) { 
     lignesHtml += "<tr>" + 
                      "<td>" + k + "</td>" + 
                      "<td>" + etudiants[k].nom + "</td>" + 
                      "<td>" + etudiants[k].prenom + "</td>" + 
                    "</tr>"; 
  }
  return lignesHtml;
}

function initialiserPage() {
  
  // un index correspond ici à une liste triée de matricules, avec l'ordre dans lequel on désire parcourir les étudiants
  // avec Object.keys on récupère toutes les propriétés dans un aray, ici les matricules, pour les trier dans l'ordre désiré
  indexEtudiantsTriesNomsPrenoms = Object.keys(etudiants).sort(comparerEtudiantsNomsPrenoms);
  //indexEtudiantsTriesNoms = Object.keys(etudiants).sort(comparerEtudiantsNoms);
  
  // On fait bien attention ici à générer dynamiquement tout le code, 
  // avant de l'insérer en une seule fois dans la page (un seul accès au DOM)
  document.getElementById("bodyEtudiants").innerHTML = genererCodeHtmlTableEtudiants(indexEtudiantsTriesNomsPrenoms);

}


