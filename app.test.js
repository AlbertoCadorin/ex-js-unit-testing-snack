const { getInitials } = require("./app");

//  snack 1 
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Alberto Cadorin")).toBe("A.C.")
})



