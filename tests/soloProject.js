var hiConsumption1 = require('../testAssets/soloProjectAssets1')
var hiConsumption2 = require('../testAssets/soloProjectAssets2')
var hiConsumption3 = require('../testAssets/soloProjectAssets3')
var hiConsumption4 = require('../testAssets/soloProjectAssets4')
var solo = {}
module.exports = {
    beforeEach: browser => {
        solo = browser.page.soloProjectPage(),
        solo.navigate()
    },
    after: browser => {
        solo.end()
    },
    'Category Test': browser => {
        hiConsumption1.forEach(hello => {
            solo.categoryTest(hello)
        })
    },
    'Search Bar Test': browser => {
        hiConsumption2.forEach(hello => {
            solo.searchBarTest(hello)
        })
    },
    'Information Policies Test': browser => {
        hiConsumption3.forEach(hello => {
            solo.informationPoliciesTest(hello)
        })
    },
    'Social Media Test': browser => {
        hiConsumption4.forEach(hello => {
            solo.socialMediaTest(hello)
        })
    }
}