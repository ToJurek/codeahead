export function verifyUrlPresent(url: string): void {
  cy.url().should("contain", url);
}

export function verifyUrlEquals(url: string): void {
  cy.url().should("equal", url);
}
