const { getInitials, createSlug, average, isPalindrome } = require("./app");

//  snack 1 
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Alberto Cadorin")).toBe("A.C.")
})


//   snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("PIETRA")).toBe("pietra")
})



// snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([5, 15])).toBe(10)
    expect(average([5, 15, 20, 40, 30])).toBe(22)
})

// snack 4 
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("titolo di un libro")).toBe("titolo-di-un-libro")
})

// snack 5 
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("ciao")).toBeFalsy()
})

// snack 6 
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow(Error)
    expect(() => createSlug(null)).toThrow(Error)
})