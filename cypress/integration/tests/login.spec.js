/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://pet-go-9200b.web.app/login");
  });

  it(".type() - type into login inputs", () => {
    cy.get("[data-cy=email]")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slow.typing@email.com", { delay: 100 })
      .should("have.value", "slow.typing@email.com");

    cy.get("[data-cy=password]")
      .type("password")
      .should("have.value", "password")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("slowpassword", { delay: 100 })
      .should("have.value", "slowpassword");
  });

  it(".clear() - clears login inputs", () => {
    // https://on.cypress.io/clear
    cy.get("[data-cy=email]")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
      .clear()
      .should("have.value", "");

    cy.get("[data-cy=password]")
      .type("password")
      .should("have.value", "password")
      .clear()
      .should("have.value", "");
  });

  it("cy.hash() - get the current URL hash", () => {
    // https://on.cypress.io/hash
    cy.hash().should("be.empty");
  });

  it("cy.location() - get window.location", () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq("https://pet-go-9200b.web.app/login");
    });
  });

  it("cy.url() - get the current URL", () => {
    // https://on.cypress.io/url
    cy.url().should("eq", "https://pet-go-9200b.web.app/login");
  });

  it(".click() - click into register button", () => {
    cy.get("[data-cy=email]")
    .type("sa@gmail.com")
    cy.get("[data-cy=password]")
    .type("ssssss")
    cy.get("[data-cy=change-to-login]").click()
    cy.get("[data-cy=login-button]").click()
    cy.location().should((location) => {
      console.log(location.href)
      // expect(location.href).to.eq("https://pet-go-9200b.web.app/search");
    });

  });
});
