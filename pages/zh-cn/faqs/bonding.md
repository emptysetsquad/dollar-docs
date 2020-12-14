# 綁定 ESD 代幣

### 什麼是捆定(Bonding)?

綁定/捆定是一種鎖定你的 ESD 帶幣的代幣治理方式。藉由鎖定你的 ESD 代幣在 DAO 治理當中、你可以獲得投票的的權重、以及獲得更多的**ESD 代幣**收益。

### 什麼是暫定狀態(Staging)?

當你進入 DAO 系統時、你的代幣必須等待一定的期間，我們姑且叫做暫定狀態。這個狀態的設計，是為了提供協調當你的代幣為“可變動的(fluid)"狀態時所設計的。
我知道你不太明白這個狀態設計的意思。不過沒關係，我們繼續往下看。

### 我該如何捆定(bonding)我手中的 ESD 代幣?

你可以點擊 Bond 按鈕，將你手中的 ESD 代幣狀態改為捆定(Bonding)。

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
