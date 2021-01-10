# 協議參數

下面是關於當前協議正在運作時的一些參數。目前根據 EIP-10 通過的情形為主：

## 基礎資訊

- 紀元(Epoch) 時長: **28,800 秒/次** (約 8 小時調整一次)
- \*Advance() 函式運行獎勵: **100 ESD**
- DAO 鎖定週期: **15 Epochs**
- LP 鎖定週期: **5 Epochs**

\*註：Advance()函式為智能合約協議裡面，控制是否執行 Epoch 的觸發按鈕。因為智能合約不能主動進行 Epoch 且發放獎勵、或者增加債務，需要有個觸發紐、且需要人為觸發。不過當前已經有許多合約機器人會去主動執行。大多數人不必擔心此函式不會有人去操作。

## 增發機制

### 關於預言機：

- 來源: [Uniswap USDC/ESD pair](https://info.uniswap.org/pair/0x88ff79eB2Bc5850F27315415da8685282C7610F9)
- 方法: [Uniswap V2 Time Weighted Average Price (TWAP)](https://uniswap.org/docs/v2/core-concepts/oracles/)
- 預言機最低額度: **10,000 USDC**
- 時間週期: **1 Epoch** (8 Hours)

### 增發＆債務：

**當 TWAP 的價格超過了 1 USDC 、且市場上 「 總的 Coupon 等於 可兌換的 Coupon 總量」時**

- 最大的新代幣增發百分比： **3%**
- 新代幣增發百分比計算方式： `twapPrice - 1 * 100` or 3% (看哪一個較低)
- 增發時的分潤：
  - DAO: **77.5%**
  - 可將 Coupon 進行兌換的額度: **0%**
  - Uniswap ESD/USDC LPs: **20%**
  - 國庫（項目金庫）: **2.5%**

**當 TWAP 的價格超過了 1 USDC 、且市場上「 總的 Coupon 大於 可兌換的 Coupon 總量」時**

- 最大的新代幣增發百分比： **6%**
- 新代幣增發百分比計算方式： `twapPrice - 1 * 100` or 6% (看哪一個較低)
- 增發時的分潤：
  - DAO: **0%**
  - 可將 Coupon 進行兌換的額度: **77.5%**
  - Uniswap ESD/USDC LPs: **20%**
  - 國庫（項目金庫）: **2.5%**

**當 TWAP 低於 1 USDC 時**

- 最大的增發百分比： **0%**
- 最大的債務增量百分比： **3%**
- 債務所需增加百分比計算方式：: `1 - twapPrice * 100` or 3% (看哪一個較低)
- 增發時的分潤:
  - DAO: **0%**
  - 可將 Coupon 進行兌換的額度: **0%**
  - Uniswap ESD/USDC LPs: **0%**
  - 國庫（項目金庫）: **0%**

### 關於票券(Coupons)

- 債務最大上限比率: **20%**
- 票券最大的溢價比: **56%**
- 溢價的計算曲線: [source](https://github.com/emptysetsquad/dollar/pull/12)

![](/curve-new.png)

## 治理模式有兩類：智能合約協議的治理 、國庫預算相關的治理

### 智能合約協議的治理

- Platform: [**ESD DAO**](https://app.emptyset.finance/#/governance/)
- On-Chain: **Yes**
- Voting Length: **9 Epochs**
- Proposal expiry: **3 Epochs** (If not committed after successful vote)
- Proposal Threshold: **0.5%** of ESD bonded in the DAO
- Voting Quorum: **20%**
- Super Majority: **66%**
- Emergency Delay: **6 Epochs**

### 國庫預算相關的治理

- Platform: [**Snapshot Page**](https://fund.emptyset.finance/)
- On-Chain: **No**
- Voting Period: **~3 Days** (Not enforced)
- Proposal Threshold: **100,000 ESD** bonded in the DAO or LP
- Voting Quorum: **None**

## 智能合約相關的資訊：

### ESD 代幣

- Address: [0x36f3fd68e7325a35eb768f1aedaae9ea0689d723](https://etherscan.io/address/0x36f3fd68e7325a35eb768f1aedaae9ea0689d723)
- Symbol: ESD
- Decimals: 18
- Standard: ERC-20

### ESD DAO

- Address: [0x443d2f2755db5942601fa062cc248aaa153313d3](https://etherscan.io/address/0x443d2f2755db5942601fa062cc248aaa153313d3) (Proxy Contract)
- Symbol: ESDS
- Standard: None, it's an internal state.

### Treasury

- Address: [0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22](https://etherscan.io/address/0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22)
- Type: Gnosis Safe (Multi-signature)
- Signers: 7
- Threshold: 4 of 7 signatures

### Uniswap ESD/USDC Pair

- Address: [0x88ff79eB2Bc5850F27315415da8685282C7610F9](https://etherscan.io/address/0x88ff79eB2Bc5850F27315415da8685282C7610F9)

### ESD/USDC Rewards

- Address: [0x4082D11E506e3250009A991061ACd2176077C88f](https://etherscan.io/address/0x4082d11e506e3250009a991061acd2176077c88f)
