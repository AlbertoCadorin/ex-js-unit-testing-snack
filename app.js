function getInitials(fullName) {
    const [nome, cognome] = fullName.split(" ");
    return `${nome.charAt(0)}.${cognome.charAt(0)}.`
}




module.exports = {
    getInitials
}