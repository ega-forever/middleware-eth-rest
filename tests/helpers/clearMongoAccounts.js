const accountModel = require('../../models/accountModel');
const blockModel = require('../../models/blockModel');


module.exports =  async function () {
    await accountModel.remove()
    await blockModel.remove()
};