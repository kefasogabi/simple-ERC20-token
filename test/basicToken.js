const BasicToken = artifacts.require("BasicToken");

function tokens(n){
    return web3.utils.toWei(n, 'ether');
 }

contract("BasicToken", function (accounts) {
    describe('Token creation', () => {
        let instance;

        before( async () =>{
            instance = await BasicToken.deployed();
            
            await BasicToken.new("KCOIN", "KC", tokens("100"));
            
        });

        it('has a name', async () => {
            let name = await daiToken.name()
            assert.equal(name, 'KDOT', "Incorrect name");
        })
        
    });
})