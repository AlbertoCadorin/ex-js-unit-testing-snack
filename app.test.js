const { getInitials, createSlug, average } = require("./app");

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

