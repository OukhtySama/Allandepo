//  1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme. 

let tableau = [8, 4, 5, 6, 7, 8]
total = 0

function sumTab(tableau) {
    for (let index = 0; index < tableau.length; index++) {
        total += tableau[index]
        
    }
    console.log(total)
}
sumTab(tableau)