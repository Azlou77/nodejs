/*Écrivez un script qui affiche la date et l'heure actuelles dans la console. 
Vous pouvez utiliser l'objet Date pour obtenir la date.*/

// Utiliser des objets Date
/* Une date est composée de plusieurs éléments : année, mois, jour, heure, minute*/
var displayYear = new Date().getFullYear();
var displayMonth = new Date().getMonth() + 1;
var displayDay = new Date().getDay();
var displayHour = new Date().getHours();
var displayMinute = new Date().getMinutes();


console.log("Date et heure actuelles : " + displayDay + "/" + displayMonth + "/" + displayYear + " " + displayHour + ":" + displayMinute);
