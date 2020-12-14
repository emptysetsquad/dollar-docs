# Bonding ESD Tokens

### What is Bonding?

Bonding is the act of locking your token in the Empty Set Dollar DAO. You lock your tokens in the DAO in order to gain benefits such as voting or rewards.

### What is Staging?

When entering the DAO, your tokens must pass through a staging phase. This state is used to control the deposit and withdrawal of tokens when your tokens are "fluid". See below to understand what "Frozen and Fluid" mean.

### How do I bond ESD tokens?

Bonding tokens requires a user follow these steps: 
1. Connect their wallet to https://app.empyset.finance. 
2. From the app, click on DAO. Your balance should appear. 
3. Deposit the tokens you wish to bond into the staged area and click the plus sign, and agree to the transaction. When those coins are staged they will be available to bond. 
4. Enter tokens that you wish to bond, and again agree to the transaction. Those coins will be bonded and they will require a 15 epoch exit lockup in order to go back to a frozen state.

Note: The process of bonding will incur transaction fees.

You can click **Bond** button to bond your own ESD token.
![](/how_to_bond.png)

### Why do some epochs grant rewards and some epochs do not?

If there is excess demand for ESD, then the price will trend above \$1 on the Uniswap pool, and that signals the protocol to mint additional token supply. Conversely, if the demand shrinks, excess selling on Uniswap will push the price below $1, which triggers the protocol to generate debt and incentivise token holders to burn ESD to shrink the token supply.

If the money supply needs to be shrunk, no supply expansion will be made that epoch. If the money supply was shrunk in the past, those debts will either remain on the protocol, or get bought by users in the form of coupons. Both coupons and debt will be paid off in the future ahead of new rewards, so it is possible to receive no new rewards in a money supply expansion epoch if there are historical debts to be repaid first.

### What do frozen and fluid states mean?

The best way to visualize this is with the flow below:

**Deposit/Withdraw ←→ Staged ←→ Bond/Unbond.**

- Any time, you use Bond or Unbond once, you go into a fluid state in that epoch
- Upon the next epoch, you will go back into the frozen state

**In fluid state:**

- You will not be able to withdraw or deposit
- You will be able to bond/unbond any number of times.

**In Frozen state:**

- You will be able to deposit and withdraw.

This means when you are bonded and want to withdraw, you will first unbond, spend the rest of the epoch in fluid state and upon next epoch when state changes to frozen, you will be able to withdraw.

For Deposit, you will be able to deposit and bond in the same epoch as when you deposit and stage you will still be in a frozen state, but as soon as you bond, you will be in a fluid state, so you cannot deposit again in that epoch, or withdraw.

Frozen and fluid states (also Locked) appear on the wallet page and the LP Reward Pool page of the DAO. This terminology is a bit confusing, but you are basically allowed to interact with the DAO by bonding or unbonding ESD or LP just once per epoch. Frozen and fluid tell you the state of your access to transacting with the DAO. “Frozen” enables you to transact. More state detail is discussed in the white paper.
