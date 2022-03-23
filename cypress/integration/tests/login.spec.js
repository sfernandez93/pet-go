/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://pet-go-9200b.web.app/login");
  });

  it("type into login inputs", () => {
    cy.get("[data-cy=emailLogin]")
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

    cy.get("[data-cy=passwordLogin]")
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

  it("clears login inputs", () => {
    cy.get("[data-cy=emailLogin]")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
      .clear()
      .should("have.value", "");

    cy.get("[data-cy=passwordLogin]")
      .type("password")
      .should("have.value", "password")
      .clear()
      .should("have.value", "");
  });

  it("get the current URL hash", () => {
    cy.hash().should("be.empty");
  });

  it("get window.location", () => {
    cy.location().should((location) => {
      expect(location.hash).to.be.empty;
      expect(location.href).to.eq("https://pet-go-9200b.web.app/login");
    });
  });

  it("get the current URL", () => {
    cy.url().should("eq", "https://pet-go-9200b.web.app/login");
  });

  it("login with email and password", () => {
    cy.get("[data-cy=emailLogin]").type("prueba@gmail.com");
    cy.get("[data-cy=passwordLogin]").type("prueba");
    cy.get("[data-cy=changeToLogin]").click();
    cy.get("[data-cy=loginButton]").click();
    cy.wait(2000);
    cy.url().should("eq", "https://pet-go-9200b.web.app/search");
  });

  it("login with error password", () => {
    cy.get("[data-cy=emailLogin]").type("prueba@gmail.com");
    cy.get("[data-cy=passwordLogin]").type("errorpassword");
    cy.get("[data-cy=changeToLogin]").click();

    cy.get("[data-cy=loginButton]")
      .click()
      .then(() => {
        cy.url().should("eq", "https://pet-go-9200b.web.app/login");
      });
  });

  it("register with invalid password", () => {
    cy.get("[data-cy=emailLogin]").type("prueba2@gmail.com");
    cy.get("[data-cy=passwordLogin]").type("error");

    cy.get("[data-cy=loginButton]")
      .click()
      .then(() => {
        cy.url().should("eq", "https://pet-go-9200b.web.app/login");
      });
  });

  it("register with existent email", () => {
    cy.get("[data-cy=emailLogin]").type("prueba@gmail.com");
    cy.get("[data-cy=passwordLogin]").type("prueba");

    cy.get("[data-cy=loginButton]")
      .click()
      .then(() => {
        cy.url().should("eq", "https://pet-go-9200b.web.app/login");
      });
  });
});
