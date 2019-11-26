var etudiants = {
              HE100 : { nom : "Talu", prenom : "Jean"},
              HE101 : { nom : "Fraichi", prenom : "Sara"},
              HE102 : { nom : "Fraichi", prenom : "Béa"},
              HE103 : { nom : "Zarella", prenom : "Maude"}
              };

function comparerEtudiantsNoms(matriculeEtudiant1, matriculeEtudiant2) {
    return etudiants[matriculeEtudiant1].nom
           .localeCompare(etudiants[matriculeEtudiant2].nom);

}

function comparerEtudiants(matricule1, matricule2) {
    if (etudiants[matricule1].nom > etudiants[matricule2].nom)  return 1;
    if (etudiants[matricule2].nom > etudiants[matricule1].nom) return -1;

    if (etudiants[matricule1].prenom > etudiants[matricule2].prenom)  return 1;
    if (etudiants[matricule2].prenom > etudiants[matricule1].prenom) return -1;

    return 0;
}

let indexEtudiantsTriesNoms = Object.keys(etudiants).sort(comparerEtudiants);

//alert(etudiantsTriesNoms);

let lignesHtml = "";
for (let k of indexEtudiantsTriesNoms) {

   lignesHtml += "<tr>" + 
                    "<td>" + k + "</td>" + 
                    "<td>" + etudiants[k].nom + "</td>" + 
                    "<td>" + etudiants[k].prenom + "</td>" + 
                  "</tr>"; 
}

document.getElementById("bodyEtudiants").innerHTML = lignesHtml;
//alert(lignesHtml);
