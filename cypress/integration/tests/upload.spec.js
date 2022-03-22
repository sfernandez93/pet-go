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
        .type("{shift}")

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

    });
  
  });
  