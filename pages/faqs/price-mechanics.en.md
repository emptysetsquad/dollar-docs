# Price Mechanics

### If ESD is a stablecoin, is it always worth $1?

No. The goal, at maturity, is to see the stablecoin stay very close to \$1. However, it is expected in the early days of the project, it will be more volatile. Some volatility is natural -- the whole design of the protocol is to adjust the money supply when the price diverges -- consequently, it is not a surprise that it would diverge. However, over time it is expected for the volatility to subside and ESD to maintain its peg against the desired asset.

In a [medium](https://medium.com/@0xans/ess-a-brief-intro-towards-novel-elastic-stablecoin-implementation-607e86654a9f) post by an early community member of ESD he/she explains the mechanism.

### How ESD's supply grow in relation to token holders?

ESD uses a seigniorage model to grow the money supply. This means, if the market demands more ESD (more buyers than sellers of ESD), more of the coin (ESD) will be minted to meet that demand and bring the price back down to $1. That extra minted money supply is distributed to the current holders of ESD (who have taken steps to lock their holdings to the protocol, as detailed below.) Keep in mind, if the reverse happens -- demand goes down -- the protocol has to reduce the supply of ESD, having an opposite effect.

### What is an Epoch?

The length of time between adjustment to the money supply. Every epoch, currently 8 hours, the protocol assesses whether the money supply ought to grow or shrink, and then issues rewards or debt to make that happen. As an investor, at the end of every epoch you receive rewards if it expands.

### Should I advance an Epoch? What does this mean?

Epochs happen every eight hours. For technical reasons, someone needs to manually trigger the start of a new epoch. A number of users have written bots competing for the 100 ESD reward to be the first to trigger it, as a new user I would not worry about this technical detail.

Smart contract Address:
[https://etherscan.io/address/0x443d2f2755db5942601fa062cc248aaa153313d3](https://etherscan.io/address/0x443d2f2755db5942601fa062cc248aaa153313d3)

### Why do some epochs grant rewards and some epochs do not?

If there is excess demand for ESD, then the price will trend above \$1 on the Uniswap pool, and that signals the protocol to mint additional token supply. Conversely, if the demand shrinks, excess selling on Uniswap will push the price below $1, which triggers the protocol to generate debt and incentivise token holders to burn ESD to shrink the token supply.

If the money supply needs to be shrunk, no supply expansion will be made that epoch. If the money supply was shrunk in the past, those debts will either remain on the protocol, or get bought by users in the form of coupons. Both coupons and debt will be paid off in the future ahead of new rewards, so it is possible to receive no new rewards in a money supply expansion epoch if there are historical debts to be repaid first.
