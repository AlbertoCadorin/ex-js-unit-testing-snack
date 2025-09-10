const { getInitials, createSlug } = require("./app");

//  snack 1 
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Alberto Cadorin")).toBe("A.C.")
})


//   snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("PIETRA")).toBe("pietra")
})