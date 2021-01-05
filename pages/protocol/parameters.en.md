# Protocol Parameters

Below is a list of all of the implemented parameters for the ESD protocol as of EIP-10's passing:

## Basics

- Epoch Length: **28,800 Seconds** (8 Hours)
- Advance() incentive: **100 ESD**
- DAO Lockup: **15 Epochs**
- LP Lockup: **5 Epochs**

## Supply Mechanics

### Oracle

- Source: [Uniswap USDC/ESD pair](https://info.uniswap.org/pair/0x88ff79eB2Bc5850F27315415da8685282C7610F9)
- Method: [Uniswap V2 Time Weighted Average Price (TWAP)](https://uniswap.org/docs/v2/core-concepts/oracles/)
- Oracle Minimum: **10,000 USDC**
- Period: **1 Epoch** (8 Hours)

### Supply/Debt Expansion

**TWAP above 1 USDC where totalCoupons = totalRedeemable**

- Maximum Supply Expansion: **3%**
- Expansion Percentage: `twapPrice - 1 * 100` or 3% (whichever is lower) 
- Expansion Distribution:
  - DAO: **77.5%**
  - Redeemable: **0%**
  - Uniswap ESD/USDC LPs: **20%**
  - Treasury: **2.5%**

**TWAP above 1 USDC where totalCoupons > totalRedeemable**

- Maximum Supply  Expansion: **6%**
- Expansion Percentage: `twapPrice - 1 * 100` or 6% (whichever is lower) 
- Expansion Distribution:
  - DAO: **0%**
  - Redeemable: **77.5%**
  - Uniswap ESD/USDC LPs: **20%**
  - Treasury: **2.5%**

**TWAP below 1 USDC**

- Maximum Supply Expansion: **0%**
- Maximum Debt Expansion: **3%**
- Expansion Percentage: `1 - twapPrice * 100` or 3% (whichever is lower) 
- Expansion Distribution:
  - DAO: **0%**
  - Redeemable: **0%**
  - Uniswap ESD/USDC LPs: **0%**
  - Treasury: **0%**

### Coupons

- Max debt ratio: **20%**
- Max coupon premium: **56%**
- Premium curve: [source](https://github.com/emptysetsquad/dollar/pull/12)

![](/curve-new.png)

## Governance

### Protocol Governance

- Platform: [**ESD DAO**](https://app.emptyset.finance/#/governance/)
- On-Chain: **Yes**
- Voting Length: **9 Epochs**
- Proposal expiry: **3 Epochs** (If not committed after successful vote)
- Proposal Threshold: **0.5%** of ESD bonded in the DAO
- Voting Quorum: **20%**
- Super Majority: **66%**
- Emergency Delay: **6 Epochs**

### Treasury Governance

- Platform: [**Snapshot Page**](https://fund.emptyset.finance/)
- On-Chain: **No**
- Voting Period: **~3 Days** (Not enforced)
- Proposal Threshold: **100,000 ESD** bonded in the DAO or LP
- Voting Quorum: **None**

## Contracts

### ESD Token

- Address: [0x36f3fd68e7325a35eb768f1aedaae9ea0689d723](https://etherscan.io/address/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723)
- Symbol: ESD
- Decimals: 18
- Standard: ERC-20

### ESD DAO

- Address: [0x443d2f2755db5942601fa062cc248aaa153313d3](https://etherscan.io/address/0x443d2f2755db5942601fa062cc248aaa153313d3) (Proxy Contract)
- Symbol: ESDS
- Standard: None, it's an internal state.

### Treasury

- Address: [0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22](https://etherscan.io/address/0x443d2f2755db5942601fa062cc248aaa153313d3)
- Type: Gnosis Safe (Multi-signature)
- Signers: 7 
- Threshold: 4 of 7 signatures

### Uniswap ESD/USDC Pair

- Address: [0x88ff79eB2Bc5850F27315415da8685282C7610F9](https://etherscan.io/address/0x88ff79eB2Bc5850F27315415da8685282C7610F9)

### ESD/USDC Rewards

- Address: [0x4082D11E506e3250009A991061ACd2176077C88f](https://etherscan.io/address/0x4082d11e506e3250009a991061acd2176077c88f)

