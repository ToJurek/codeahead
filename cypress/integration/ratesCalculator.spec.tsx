import { ServiceCall } from "../support/service-call";
import { verifyUrlPresent } from "../support/router";

describe("Simple Currency Rates Response", () => {
  beforeEach(() => {
    const serviceCall = new ServiceCall();
    serviceCall.stubGetCurrencyRate();
  });

  it("should display currency rates", () => {
    cy.visit("/");
    cy.get("tr.MuiTableRow-root").should("have.length.above", 42);
  });

  it("should change base currency", () => {
    cy.get("select").select("CHF");
    cy.get("tr.MuiTableRow-root").should("have.length", 3);
    cy.get("tr.MuiTableRow-root").eq(1).should("contain", "EUR");
    cy.get("tr.MuiTableRow-root").eq(2).should("contain", "JPY");
  });

  it("should redirect to calculator page", () => {
    cy.get("span.MuiButton-label").eq(1).click();
    verifyUrlPresent("/calculator");
  });

  it("should display base currency", () => {
    cy.get("select").eq(0).should("contain", "CHF");
  });

  it("should display calculate result with available currency", () => {
    cy.get("input.MuiInputBase-input").eq(0).type("120");
    cy.get("select").eq(1).select("JPY");
    cy.get("input.MuiInputBase-input").eq(1).should("have.value", 36000);
  });

  it("should not calculate result with unavailable currency", () => {
    cy.get("select").eq(1).select("AUD");
    cy.get("input.Mui-disabled").should("have.value", "");
  });

  it("should change base currency on calculator page and not on main", () => {
    cy.get("select").eq(0).select("PLN");
    cy.get("span.MuiButton-label").eq(0).click();
    verifyUrlPresent("");
    cy.get("select").should("contain", "CHF");
  });

  it("should wait for data", () => {
    cy.get("select").select("AUD");
    cy.get("div#loading-spinner").should("be.visible");
    cy.wait(3000);
    cy.get("div#loading-spinner").should("not.be.visible");
  });

  it("should handle error", () => {
    cy.get("select").select("GBP");
    cy.get("div.makeStyles-paper-2").should("be.visible");
    cy.get("h2#server-modal-title").should("contain", "ERROR");
  });
});
