import PinataPartyContract from 0xf8d6e0586b0a20c7

transaction {
  let receiverRef: &{PinataPartyContract.NFTReceiver}
  let minterRef: &PinataPartyContract.NFTMinter

  prepare(acct: AuthAccount) {
      self.receiverRef = acct.getCapability<&{PinataPartyContract.NFTReceiver}>(/public/NFTReceiver)
          .borrow()
          ?? panic("Could not borrow receiver reference")        
      
      self.minterRef = acct.borrow<&PinataPartyContract.NFTMinter>(from: /storage/NFTMinter)
          ?? panic("could not borrow minter reference")
  }

  execute {
      let metadata : {String : String} = {
          "name": "Need for Speed Heat: Keys to the Map",
          "soldBuy": "2441",
          "forSale": "5223", 
          "topSale": "$645", 
          "lowestAsk": "$5", 
          "price": "0.50", 
          "view": "143,566", 
          "date": "19 Aug 2021", 
          "uri": "ipfs://QmNuB9pMmeEChhR29XobvNXqhqSbvZoVb4yh4pWdJoGdD4"
      }
      let newNFT <- self.minterRef.mintNFT()
  
      self.receiverRef.deposit(token: <-newNFT, metadata: metadata)

      log("NFT Minted and deposited to Account Collection")
  }
}