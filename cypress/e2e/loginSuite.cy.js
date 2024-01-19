describe("Login", () => {
  it("User should be able to login with valid credential", () => {
    cy.visit("http://kasirdemo.belajarqa.com/login");
    cy.xpath('//*[@name = "email"]').type("eviindah@student.telkomuniversity.ac.id");
    cy.xpath('//*[@name = "password"]').type("12345678");
    cy.xpath('//button[constaint(text(), "login")]"]').click();
  });
});
