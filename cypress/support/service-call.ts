export class ServiceCall {
  stubGetCurrencyRate(): void {
    cy.intercept("GET", "**/v1/live/*", (req) => {
      if (req.query.base === "CHF") {
        req.reply({ fixture: "simpleResponseCHF" });
      } else if (req.query.base === "AUD") {
        req.reply({ delay: 3000, fixture: "simpleResponse" });
      } else if (req.query.base === "GBP") {
        req.reply({ statusCode: 403 });
      }else {
        req.reply({ fixture: "simpleResponse" });
      }
    });
  }
}
