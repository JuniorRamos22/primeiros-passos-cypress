class menudPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModulo"]'
        }

        return selectors
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    
    accessorPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }
}

export default menudPage
