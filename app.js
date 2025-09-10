function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}

function createSlug(word) {
    const wordLower = word.toLowerCase()
    return (wordLower)
}




module.exports = {
    getInitials,
    createSlug
}