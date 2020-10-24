# Frequently Asked Questions about ESD

## Empty Set Døllar

### What is EmptySet Dollar and how is it different from other stablecoins?

A community member has written an article comparing and contrasting various approaches to stable coins. The TL:DR is:

> ESD is a stablecoin built to be the reserve currency of decentralised finance. ESD’s carefully balanced approach sidesteps the centralisation risk of USDC, USDT, & TUSD, avoids AMPL & BASED’s death spirals, the 100+ percent collateralisation requirements of sUSD & DAI, and, most importantly, it integrates perfectly with existing DeFi protocols.
>
> The ESD protocol expands on the pioneering work of Basis.io, which voluntarily shut down before launch due to regulatory pressure on the team. ESD has launched with an anonymous team to minimise pressure it may face down the road and the protocol includes a novel new mechanism in place of Basis’ seigniorage shares.

See the article here: https://medium.com/@lewisfreiberg/empty-set-dollar-esd-a0abbfc5ecdb

### Who created ESD?

The team is anonymous.  Some view this as an advantage (no one for governments to pressure), some view this as a risk.  

### If ESD is a stablecoin, is it always worth $1?


No. The goal, at maturity, is to see the stablecoin stay very close to \$1.  However, it is expected in the early days of the project, it will be more volatile. Some volatility is natural -- the whole design of the protocol is to adjust the money supply when the price diverges -- consequently, it is not a surprise that it would diverge. And the fact that it was designed with a maximum award in one epoch of 1.1, indicates the designer felt like prices above $1.10 were to be expected.  So high volatility in the early days of the project is not necessarily a sign the protocol is not working.  However, over time it is expected for the volatility to subside and ESD to maintain its peg against the desired asset.

In a [medium](https://medium.com/@0xans/ess-a-brief-intro-towards-novel-elastic-stablecoin-implementation-607e86654a9f) post by an early community member of ESD he/she explains the mechanism.

### How does an investment in ESD grow in value if the goal is to hold a peg at $1?

ESD uses a seigniorage model to grow the money supply.  This means, if the market demands more ESD (more buyers than sellers of ESD), more of the coin (ESD) will be minted to meet that demand and bring the price back down to $1.  That extra minted money supply is distributed to the current holders of ESD (who have taken steps to lock their holdings to the protocol, as detailed below.)  Keep in mind, if the reverse happens -- demand goes down -- the protocol has to reduce the supply of ESD, having an opposite effect.

The most successful stablecoins have money supplies more than 100x the size of the current ESD money supply, so if in fact it did succeed, the amount of new supply distributed to holders of the token will be very large relative to the current holdings.

### How does ESD become a sustainably useful token?

For ESD to become a sustainably useful stablecoin like USDT or DAI, it must begin to be accepted as currency by DeFi and other applications on the ethereum protocol. As of now this is not true, and thus any rise in value is inherently speculating that this will eventually occur.

## Token Mechanics

### What is an epoch?

The length of time between adjustment to the money supply. Every epoch, currently 8 hours, the protocol assesses whether the money supply ought to grow or shrink, and then issues rewards or debt to make that happen. As an investor, at the end of every epoch you receive rewards if it expands.

### What is a coupon?

Coupon is the method used to shrink the money supply. Simply, the protocol offers an incentive for users to voluntarily burn their ESD in return for a coupon that can be redeemed when the money supply grows again, to regain their ESD along with a bonus for having bought the debt.

## Speculating on ESD

### Should I buy ESD?

Do your own research.

### How do I buy ESD?

Currently the only place to buy ESD is the Uniswap ESD-USDC pool. For your safety, please access this pool by going to the Trade page of the ESD DAO site and clicking the trade button, which will take you to the pool: [here](https://emptyset.finance/#/trade/)

Because ESD has not been whitelisted at Uniswap, you have to approve the unknown token.Please understand, in these early days of ESD, the price can be very volatile. In recent bull runs, the price of ESD has gone up over \$1.50 per USDC, even though over time it should converge to $1. So pay attention to what price you are paying when you buy it. On the other hand, in these bull periods, returns can often hit 8% compounding per 8 hours, which if it held into the future could offset any premium paid. The future is inherently uncertain so you have to use your own judgment here.

### Do I gain rewards just for buying ESD?

If you buy ESD on Uniswap but do nothing else, no. Your ESD is in a state called “circulating” and it just sits inert.

### What methods exist for compounding an ESD investment?

There are three methods to invest in the growth of the ESD money supply:

1. Take your ESD and bond it to the DAO (recommended for beginners)
2. Take your ESD and provide liquidity to the Uniswap LP pool, and bond those tokens to the DAO to earn liquidity rewards. 
3. Buy ESD debt coupons during periods the protocol goes into debt, and redeem them later when it goes into surplus

### How do the various compounding options compare in their rate of return?

The relative return to bonding to the DAO, and investing in the Uniswap LP, vary somewhat. 80% of created new supply is awarded to those who bond to the DAO, and 20% to people who provide liquidity to the LP. Depending on how much capital is provided to the Uniswap LP, those returns can vary dramatically. Also, being a liquidity provider has its own risks including impermanent loss. 

A community member has created this information site: [ESD Tools](https://esd.tools/) which in the black box at the top makes an estimate of the relative returns to each for the current epoch. Whales can move large sums in and out of the LP pool on Uniswap in between epochs and dramatically move the returns to LP investment. 

Further, the returns can change right up to the end of the epoch. So LP returns sometimes pay a premium to DAO, sometimes pay less, but are more volatile.

### As a beginner, which method should I use to compound my investment?

Bonding your ESD to the DAO is very likely the best way to go. It is simple, and you can “set it and forget it” -- it will just compound.

Investing in the liquidity pool is more complicated -- you have to provide at uniswap, risk impermanent loss, stake the uniswap token at the DAO. Most importantly, this investment does not automatically compound -- each epoch you are granted rewards but they will just float, circulating, unless you take action every 8 hours to compound them (either re-providing them into the liquidity pool, or claiming them and staking them to the DAO). For these reasons, when getting started, bonding to the DAO is a good place.

Coupon investing has hard to calculate risks -- you have to have a view on when the protocol will come out of debt, and if the protocol goes a month without coming out of contraction, you could lose your coupons -- so as a beginner coupons may not be for you.

### What are the exact steps to buy ESD from Uniswap and bond to the DAO?

1. Go to the Wallet page on the DAO site:  http://emptyset.finance/#/wallet/ 
2. Click on Trade button to go to UniSwap
3. Connect to Uniswap, and approve the tokens for trading

![](/Users/lewi/Documents/ethereum/dollar-docs/_media/uniswap-usdcesd.png)

4. Enter an amount of USDC into Uniswap, approve the transaction and buy ESD. 
5. Pay attention to the price and slippage as the market's liquidity changes hourly.
6. Come back to the ESD DAO wallet page: http://emptyset.finance/#/wallet/
7. Click unlock to allow the DAO to interact with your ESD

![Unlocking the DAO](/Users/lewi/Documents/ethereum/dollar-docs/_media/empty-dao.png)

8. Enter the number of ESD into the Staged Deposit box -- or click max -- then click the Deposit button and approve the transaction, wait for that transaction to complete on the Ethereum network.

![Staging via the DAO website](/Users/lewi/Documents/ethereum/dollar-docs/_media/stage.png)

8. Click Max to load the box next to the “bond” button and click bond. When that transaction clears, your ESD will be bonded to the DAO and begin earning rewards at the end of the epoch. 

![](/Users/lewi/Documents/ethereum/dollar-docs/_media/bond.png)

>  **Note**: that once you initiate a bond during an epoch, you will not be able to deposit/withdraw thereafter during that epoch (until the next epoch resets), per below on Frozen/Fluid state.