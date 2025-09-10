// snack 1 ottiene le iniziali  di un nome completo
function getInitials(fullName) {
    const nameUp = fullName.toUpperCase()
    const [nome, cognome] = nameUp.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}
// snack 2 converte la parola in minuscolo,  snack 4 sostituisce glii spazzi con "-",  snack 6 
function createSlug(word) {
    if (!word) {
        throw new Error("titolo assente");

    }
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
// snack 5 controllare se una parola e palintroma 
function isPalindrome(str) {
    const strLower = str.toLowerCase()
    const palintrome = strLower.split('').reverse().join('')
    return strLower === palintrome
}



module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}