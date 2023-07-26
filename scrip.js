var contacts = [];

function ajouterContact() {
 var nom = document.getElementById("nom").value;
 var prenom = document.getElementById("prenom").value;
 var telephone = document.getElementById("telephone").value;
 if (nom=="" || prenom=="" || telephone==""){
  alert("certains champs sont vides")
  // document.getElementById("nom").style.marginLeft="500px"
 }else{
  var contact = {nom: nom, prenom: prenom, telephone: telephone};
 contacts.push(contact);
 
 afficherContacts();
 }

 
}

function rechercherContact() {
 var recherche = prompt("Entrez un nom ou prénom à rechercher :");

 var resultats = contacts.filter(function(contact) {
  return contact.nom.toLowerCase().includes(recherche.toLowerCase()) ||
   contact.prenom.toLowerCase().includes(recherche.toLowerCase());
 });

 if (resultats.length > 0) {
  var message = "Résultats de la recherche :\n\n";
  for (var i = 0; i < resultats.length; i++) {
   message += resultats[i].nom + " " + resultats[i].prenom + " - " + resultats[i].telephone + "\n";
  }
  alert(message);
 } else {
  alert("Aucun résultat trouvé.");
 }
}

function afficherContacts() {
 var tbody = document.querySelector("#tableau tbody");
 tbody.innerHTML = "";

 for (var i = 0; i < contacts.length; i++) {
  var row = document.createElement("tr");
  var cellNom = document.createElement("td");
  cellNom.appendChild(document.createTextNode(contacts[i].nom));
  row.appendChild(cellNom);
  var cellPrenom = document.createElement("td");
  cellPrenom.appendChild(document.createTextNode(contacts[i].prenom));
  row.appendChild(cellPrenom);
  var cellTelephone = document.createElement("td");
  cellTelephone.appendChild(document.createTextNode(contacts[i].telephone));
  row.appendChild(cellTelephone);
  tbody.appendChild(row);
 }
}
var a=1
function fuire(){
  var bout=document.getElementById("bout")
  if (a==1){
    bout.style.marginLeft="200px"
    a=0
  }else{
    bout.style.marginRight="200px"
  }
}
function desole(){
alert("ceci etait juste une petite blague j'espere \n qu'elle vous aura surpris(e) ")
}