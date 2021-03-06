export class BilingDetailsComponent {
    private get root():WebdriverIO.Element {
        return $('div#collapse-payment-address').parentElement()
    }

    fillBillingDetails(data: {
        firstName: string,
        lastName: string,
        email: string,
        telephone: string,
        address1: string,
        city: string,
        postCode: string,
        country: string,
        region: string
   })

    {
        this.root.$('#input-payment-firstname').setValue(data.firstName)
        this.root.$('#input-payment-lastname').setValue(data.lastName)
        this.root.$('#input-payment-email').setValue(data.email)
        this.root.$('#input-payment-telephone').setValue(data.telephone)
        this.root.$('#input-payment-address-1').setValue(data.address1)
        this.root.$('#input-payment-city').setValue(data.city)
        this.root.$('#input-payment-postcode').setValue(data.postCode)
        this.root.$('#input-payment-country').selectByVisibleText(data.country)
        browser.pause(1000)
        this.root.$('#input-payment-zone').selectByVisibleText(data.region)
    }

    fillCountryRegion(country: string, region: string) {
        this.root.$('#input-payment-country').selectByVisibleText(country)
        browser.pause(500)
        //expect($( this.root.$('#input-payment-zone'))).toBeClickable()
        this.root.$('#input-payment-zone').selectByVisibleText(region)
    }

    isInputReady(): boolean {
        return this.root.$('#input-payment-firstname').isDisplayed()

    }

    isCheckboxSelected(): boolean {
    return $('.checkbox input').isSelected()
    }

    // isAreaExpanded(): boolean {
    //     //return this.root.$('#collapse-payment-address[aria-expanded="true"]').isDisplayed()
    //     return this.root.$('.form-control').isDisplayed()
    // }


    selectCheckbox(){
        expect($('.checkbox input')).toBeVisible()
        if (!this.isCheckboxSelected()) {
            $('.checkbox input').click()
        }
        expect(this.isCheckboxSelected()).toBe(true)
    }

    unselectCheckbox(){
        if(this.isCheckboxSelected()){
            $('.checkbox input').click()
        }
        expect(this.isCheckboxSelected()).toBe(false)
    }

    continue() {
        const continueButton = this.root.$('input[type="button"][value="Continue"]')
        expect(continueButton).toBeClickable({message: 'Expected Continue button to be visible'})
        browser.pause(800)
        continueButton.click()

    }

}