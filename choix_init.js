if (localStorage.length == 0)
{
    location = "init.html"
}
//s'il y a un enregistrement dans le local storage, on propose soit de lancer la partie, soit d'en importer une autre (inclue la supression de l'autre)
else {
    location = "init2.html"
}