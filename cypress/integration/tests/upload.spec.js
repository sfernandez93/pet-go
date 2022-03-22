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

  it("check inputs, selector and checkboxes", () => {
    cy.get("[data-cy=first-name]")
      .type("Prueba")
      .should("have.value", "Prueba")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("Prueba", { delay: 100 })
      .should("have.value", "Prueba");

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
      .type("edad")
      .should("have.value", "")
      .type("0")
      .should("have.value", "0")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}");

    cy.get("[data-cy=email-address]")
      .type("prueba@email.com")
      .should("have.value", "prueba@email.com")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("prueba@email.com", { delay: 100 })
      .should("have.value", "prueba@email.com");

    cy.get("[data-cy=phone]")
      .type("666666666")
      .should("have.value", "666666666")
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")
      .type("{alt}{option}")
      .type("{shift}")
      .type("666666666", { delay: 100 })
      .should("have.value", "666666666");

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

    cy.get("[data-cy=region]").should("have.value", "");
    cy.get("[data-cy=region]").select("079e93cf-1fd1-4506-a125-c9c140ad5faa");
    cy.get("[data-cy=region]").should(
      "have.value",
      "079e93cf-1fd1-4506-a125-c9c140ad5faa"
    );

    cy.get("[data-cy=is_disabled]")
      .not("[disabled]")
      .check()
      .should("be.checked")
      .uncheck()
      .should("not.be.checked")
      .check()
      .should("be.checked");
  });

  it("check submit button", () => {
    cy.get("[data-cy=first-name]").type("Prueba");

    cy.get("[data-cy=race]").type("Bichón Maltés");

    cy.get("[data-cy=age]").type("0");

    cy.get("[data-cy=email-address]").type("prueba@email.com");

    cy.get("[data-cy=phone]").type("666666666");

    cy.get("[data-cy=org-name]").type("Organización protectora de animales");

    cy.get("[data-cy=city]").type("Madrid");

    cy.get("[data-cy=about]").type("Descripción de prueba");

    cy.get("[data-cy=region]").select("079e93cf-1fd1-4506-a125-c9c140ad5faa");

    cy.fixture(
      "f5eaa850ab45c3d6eab259c154a934fe.jpg"
    ).then((fileContent) => {
      cy.get("[data-cy=fileUpload]").attachFile({
        fileContent: fileContent.toString(),
        fileName:
          "f5eaa850ab45c3d6eab259c154a934fe.jpg",
        mimeType: "image/png",
      });
    });
    cy.get("[data-cy=uploadButton]").click();
    cy.wait(2000);
    cy.url().should("eq", "https://pet-go-9200b.web.app/search");
  });

  it("check submit button incomplete data", () => {
    cy.get("[data-cy=uploadButton]").click();
    cy.wait(2000);
    cy.url().should("eq", "https://pet-go-9200b.web.app/upload");
  });
});
