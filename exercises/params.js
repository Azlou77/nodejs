
/* The process.argv property returns an array containing  the command-line 
   arguments passed when the Node.js process was launched */

/* Écrivez un script qui accepte une liste de noms en tant qu'arguments de ligne de commande, puis affiche un message de salutation à chaque personne par nom. Vous pouvez utiliser le tableau process.argv pour accéder aux arguments de ligne de commande passés à votre script. */
/* const names = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello, ${name}!`);
} */

// Utiliser process.argv
// Récupérer les arguments de ligne de commande (à l'exclusion du nom du script)
const args = process.argv.slice(2);
// Fonction pour saluer les personnes
function saluerPersonnes(noms) {
    noms.forEach((nom) => {
        console.log(`Bonjour, ${nom} !`);
    });
}

// Appeler la fonction pour saluer les personnes
saluerPersonnes(args);
