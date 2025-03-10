class myInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemCombobox: ".oxd-select-dropdown > :nth-child(3)",
            dateCloseButton: ".--close",
            submitButoon: ".orangehrm-left-space"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
        cy.get(this.selectorList().genericField).eq(2).clear().type(nickName)
    }
    
    fillEmployeeDetails(employeeId, OtherId, driversLicenseDate, sinNuber) {
        cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(driversLicenseDate)
        cy.get(this.selectorList().genericField).eq(6).clear().type('2025-03-10')
        cy.get(this.selectorList().dateCloseButton).click()
        cy.get(this.selectorList().genericField).eq(8).clear().type(sinNuber)
    }


    saveForm() {
        cy.get(this.selectorList().submitButoon).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorList().secondItemCombobox).click()
        cy.get(this.selectorList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorList().thirdItemCombobox).click()
    }
}

export default myInfoPage
