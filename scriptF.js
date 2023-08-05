
function ajouter(){
    document.getElementById("container").style.display="none";
    document.getElementById("ajout").style.display="block";
}
function rech(){
    document.getElementById("recherche").style.display="block";
    document.getElementById("container").style.display="none";
}
function retour(){
    document.getElementById("container").style.display="block";
    document.getElementById("ajout").style.display="none";
}
function retour2(){
    document.getElementById("recherche").style.display="none";
    document.getElementById("container").style.display="block";
    document.getElementById("rech").value="";
}
var Contacts=[];
function Enregistrer(){
    var nom = document.getElementById("nom").value;
    var tel =document.getElementById("tel").value;
    var mail= document.getElementById("mail").value;
    var group= document.getElementById("group").value;
    var contact={nom: nom, tel: tel, mail: mail, group: group};
    Contacts.push(contact);
    retour();
    afficher();
    nettoyage();
}
function afficher(){
    var tbody = document.querySelector("#tableau tbody");
    tbody.innerHTML="";

    for(var i = 0; i < Contacts.length; i++){
        var row = document.createElement("tr");
        var cellNom = document.createElement("td");
        cellNom.appendChild(document.createTextNode(Contacts[i].nom));
        row.appendChild(cellNom);
        var celltel = document.createElement("td");
        celltel.appendChild(document.createTextNode(Contacts[i].tel));
        row.appendChild(celltel);
        var cellmail = document.createElement("td");
        cellmail.appendChild(document.createTextNode(Contacts[i].mail))
        row.appendChild(cellmail);
        var cellgroup = document.createElement("td");
        cellgroup.appendChild(document.createTextNode(Contacts[i].group));
        row.appendChild(cellgroup);
        tbody.appendChild(row);
    }
    retour();
}
function nettoyage(){
    document.getElementById("nom").value="";
    document.getElementById("tel").value="";
    document.getElementById("mail").value="";
    document.getElementById("group").value="";
}
function recherche(){
    var recherch = document.getElementById("rech").value.toLowerCase();
    var resultats = Contacts.filter(function(contact){
        return contact.nom.toLowerCase().includes(recherch);
    });
    var tablebody = document.querySelector("#datatable tbody");
    tablebody.innerHTML="";
    for(var i = 0; i < resultats.length; i++){
        var row = document.createElement("tr");
        var cellNom = document.createElement("td");
        cellNom.appendChild(document.createTextNode(resultats[i].nom));
        row.appendChild(cellNom);
        var celltel = document.createElement("td");
        celltel.appendChild(document.createTextNode(resultats[i].tel));
        row.appendChild(celltel);
        var cellmail = document.createElement("td");
        cellmail.appendChild(document.createTextNode(resultats[i].mail))
        row.appendChild(cellmail);
        var cellgroup = document.createElement("td");
        cellgroup.appendChild(document.createTextNode(resultats[i].group));
        row.appendChild(cellgroup);
        tablebody.appendChild(row);
    }
}
/*  autre fonction pouvant remplacer la recherche  
    resultats.forEach(function(item){
        var newrow = tablebody.insertRow();
        var cell1 = newrow.insertCell(0);
        var cell2 = newrow.insertCell(1);
        var cell3 = newrow.insertCell(2);
        var cell4 = newrow.insertCell(3);
        cell1.innerHTML=item.nom;
        cell2.innerHTML=item.tel;
        cell3.innerHTML=item.mail;
        cell4.innerHTML=item.group;
    }) 
*/
