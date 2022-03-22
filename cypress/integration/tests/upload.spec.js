/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://pet-go-9200b.web.app/login");
    cy.get("[data-cy=emailLogin]").type("sa@gmail.com");
    cy.get("[data-cy=passwordLogin]").type("ssssss");
    cy.get("[data-cy=changeToLogin]").click();
    cy.get("[data-cy=loginButton]").click();
    cy.wait(2000);
    cy.get("[data-cy=uploadNavBar]").click();
  });

  it("type into upload inputs", () => {
    cy.get("[data-cy=first-name]")
      .type("Ron")
      .should("have.value", "Ron")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("Ron", { delay: 100 })
      .should("have.value", "Ron");

    cy.get("[data-cy=race]")
      .type("Bichón Maltés")
      .should("have.value", "Bichón Maltés")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("Bichón Maltés", { delay: 100 })
      .should("have.value", "Bichón Maltés");

    cy.get("[data-cy=age]")
      .type("0")
      .should("have.value", "0")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}");

    cy.get("[data-cy=age]")
      .type("edad")
      .should("have.value", "")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}");

    cy.get("[data-cy=email-adress]")
      .type("ron@email.com")
      .should("have.value", "ron@email.com")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("ron@email.com", { delay: 100 })
      .should("have.value", "ron@email.com");

    cy.get("[data-cy=org-name]")
      .type("Organización protectora de animales")
      .should("have.value", "Organización protectora de animales")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("Organización protectora de animales", { delay: 100 })
      .should("have.value", "Organización protectora de animales");

    cy.get("[data-cy=city]")
      .type("Madrid")
      .should("have.value", "Madrid")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("Madrid", { delay: 100 })
      .should("have.value", "Madrid");

    cy.get("[data-cy=about]")
      .type("Descripción de prueba")
      .should("have.value", "Descripción de prueba")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("Descripción de prueba", { delay: 100 })
      .should("have.value", "Descripción de prueba");
  });

  it("select an option in a <select> upload element", () => {
    // https://on.cypress.io/select

    // at first, no option should be selected
    cy.get("[data-cy=region]").should("have.value", "");

    // Select option(s) with matching text content
    cy.get("[data-cy=region]").select("079e93cf-1fd1-4506-a125-c9c140ad5faa");
    // confirm the apples were selected
    // note that each value starts with "fr-" in our HTML
    cy.get("[data-cy=region]").should(
      "have.value",
      "fr-079e93cf-1fd1-4506-a125-c9c140ad5faa"
    );

    // Select option(s) with matching value
    cy.get("[data-cy=region]")
      .select("fr-079e93cf-1fd1-4506-a125-c9c140ad5faa")
      // can attach an assertion right away to the element
      .should("have.value", "fr-079e93cf-1fd1-4506-a125-c9c140ad5faa");
  });

  it("check upload checkbox", () => {
    // https://on.cypress.io/check

    // By default, .check() will check all
    // matching checkbox or radio elements in succession, one after another
    cy.get("[data-cy=is_disabled]")
      .not("[disabled]")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");

    cy.get("[data-cy=is_active]")
      .not("[disabled]")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked");
  });
});
