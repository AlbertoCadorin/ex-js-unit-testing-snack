// snack 1 ottiene le iniziali  di un nome completo
function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}
// snack 2 converte la parola in minuscolo  snack 4 sostituisce glii spazzi con "-"
function createSlug(word) {
    const wordLower = word.toLowerCase()
    const dashes = wordLower.replaceAll(" ", '-')
    return (dashes)
}
//  snack  3 average calcoa la media 
function average(num) {
    const sum = num.reduce((acc, curr) => acc + curr)
    const media = sum / num.length
    return media
}




module.exports = {
    getInitials,
    createSlug,
    average
}