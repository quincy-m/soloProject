var hiConsumption1 = {
    categoryTest: function(data) {
        this
        .click('@menuIcon')
        .click(data.selector)
        .pause(200)
        .expect.element('@categoryHeader').to.contain.text(data.category)
        this
        .click('@homePage')
        return this
    }
}

var hiConsumption2 = {
    searchBarTest: function(data) {
        this
        .click('@menuIcon')
        .setValue('@searchInput', [data.search, this.api.Keys.ENTER])
        .pause(200)
        .expect.element('@categoryHeader').to.contain.text(data.result)
        this
        .pause(200)
        .expect.element('@resultBox').to.contain.text(data.search)
        this
        .click('@homePage')
    }
}

var hiConsumption3 = {
    informationPoliciesTest: function(data) {
        this
        .click(data.policy)
        .pause(200)
        .expect.element('@policyHeader').to.contain.text(data.policyHeader)
        this
        .click('@homePage')
    }
}

var hiConsumption4 = {
    socialMediaTest: function(data) {
        this
        .waitForElementVisible(data.socialMedia)
        .click(data.socialMedia)
        this.api.windowHandles(results => {
            var originalWindow = results.value[0]
            var newWindow = results.value[1]
            this.api.switchWindow(newWindow)
            .verify.urlContains(data.verify)
            this.api.closeWindow()
            this.api.switchWindow(results.value[0])
        })
    }
}

module.exports = {
    url: 'https://hiconsumption.com/',
    commands: [hiConsumption1, hiConsumption2, hiConsumption3, hiConsumption4],
    elements: {
        menuIcon: {
            selector: '(//a[@class="nav_toggle"])[1]',
            locateStrategy: 'xpath' },
        categoryHeader: 'h3[class="hi_left_stripe_title"]',
        gearMenu: 'a[href="https://hiconsumption.com/category/gear/"]',
        techMenu: 'a[href="https://hiconsumption.com/category/gadgets/"]',
        ridesMenu: 'a[href="https://hiconsumption.com/category/vehicles/"]',
        styleMenu: 'a[href="https://hiconsumption.com/category/fashion/"]',
        livingMenu: 'a[href="https://hiconsumption.com/category/living/"]',
        foodMenu: 'a[href="https://hiconsumption.com/category/food/"]',
        buyersGuideMenu: 'a[href="https://hiconsumption.com/tag/buyers-guides/"]',
        everydayCarryMenu: 'a[href="https://hiconsumption.com/category/gear/everyday-carry/"]',
        entertainmentMenu: 'a[href="https://hiconsumption.com/category/entertainment/"]',
        groomingMenu: 'a[href="https://hiconsumption.com/category/grooming/"]',
        vicesMenu: 'a[href="https://hiconsumption.com/category/vices/"]',
        homePage: 'a[href="https://hiconsumption.com/"]',
        searchInput: 'input[id="site-search"]',
        resultBox: 'section[class="hi_featuresBlock hi_style2"]',
        about: 'li[id="menu-item-78764"]',
        advertise: 'li[id="menu-item-201006"]',
        contact:'li[id="menu-item-78765"]',
        jobs: 'li[id="menu-item-297789"]',
        privacy: 'li[id="menu-item-391884"]',
        terms: 'li[id="menu-item-391882"]',
        affiliateDisclosure: 'li[id="menu-item-391900"]',
        policyHeader: 'div[class="hi_small_cointerner"]',
        instagramIcon: {
            selector: '(//i[@class="fa fa-instagram"])[2]',
            locateStrategy: 'xpath' },
        facebookIcon: {
            selector: '(//i[@class="fa fa-facebook"])[2]',
            locateStrategy: 'xpath' },
        twitterIcon: {
            selector: '(//i[@class="fa fa-twitter"])[2]',
            locateStrategy: 'xpath' },
        }
    }