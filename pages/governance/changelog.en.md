# ESD Protocol Changelog

Below is a list of updates to the Empty Set Dollar protocol since its inception. These changes follow the on-chain governance procedures and are unrelated to TIPs or the ESD treasury.

### 0. Protocol Launch

The implementation of the protocol followed the [Whitepaper](https://github.com/emptysetsquad/dollar/blob/master/d%C3%B8llar.pdf) that was released on the same day. 

### 1. LP Incentivisation & Pool2  

- Adds `ESDS` Transfer events when bonding and unbonding.
- Updates LP incentivization pool cut from 5% to 20%.

- New LP incentivization pool with:
  - Minor unbonding issue fix
  - Additional `emergencyPause()` and `emergencyWithdraw()` methods

See more [here](https://github.com/emptysetsquad/dollar/pull/1)

### 2. Epoch Speedup

- Shorten epoch period from `24 hours` to `8 hours`, starting at epoch `106`.
- Adds `emergencyCommit` method to governance.

See more [here](https://github.com/emptysetsquad/dollar/pull/2)

### 3. Raise Debt Cap to 35%

- Raises debt cap from `30%` to `35%`.
- Resets debt ratio to `30%` if debt ratio is higher at time of commit.

See more [here](https://github.com/emptysetsquad/dollar/pull/3)

### 4/5. Fix Quorum Computation

- Resolves bug that allows proposal and commitment with less `ESDS` than expected.

See more [here](https://github.com/emptysetsquad/dollar/pull/4)

### 6. Relax Balance Check

- Relaxes the balance checks in the `DAO` and `Pool` contracts which were either redundant or could in some cases fire even with correct state.

See more [here](https://github.com/emptysetsquad/dollar/pull/5)

### 7. Supply Change Limit to 3%

- Reduces Supply Change Limit from `10%` to `3%`.

### 8. Improvements to ESD Coupon Redemption

- Wipe debt on first expansion
- Require 2 epoch wait before coupons becomes redeemable

See more [here](https://github.com/emptysetsquad/dollar/pull/7)

### 9. Removing sequencing from expansion rewards

- Increase the expansion rate to 6% while there are coupons that have not been credited for redemption.
- Updates the expansion phase such that when there are coupons to be redeemed, a minimum of 20% of the expansion will be used as rewards for the LP pool.
- Epoch locks for DAO and LP will be increased from 1 epoch to 15 and 5 epochs, respectively.

See more [here](https://github.com/emptysetsquad/dollar/pull/9)

### 10. Reduce Governance Thresholds & QoL improvements

- Lowers the governance proposal threshold from `1%` to `0.5%`.
- Lowers the governance quorum threshold from `33%` to `20%`.
- **QoL additions**
  - Removes `Pool 1` migration reward payout.
  - Refactors proposal threshold into `Constants.sol`.
  - Fully decouples debt repayment from the `increaseSupply` method.
  - Adds getters for `lockedUntil` and `fluidUntil` user data.
  - Standardizes events for incentivization rewards.

### 11. Add Treasury

- Rewards `500,000 ESD` to treasury on commit.
  - Treasury address: [0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22](https://etherscan.io/address/0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22)
- Adds a 2.5% expansion reward for treasury
  - 77.5/2.5/20 DAO/Treasury/LP during regular expansion
  - 77.5/2.5/20 Coupon/Treasury/LP during coupon expansion

See more [here](https://github.com/emptysetsquad/dollar/pull/11)

### 12. Update Coupon Curve

- Steepens the coupon premium curve from: `1/(3(1-R)^2)-1/3` to `1/((1-R)^2)-1`.
- Lowers debt cap from `35%` to `15%`, corresponding to `45.6%` and `38.4%` premiums respectively.
- One time 60% reduction in protocol `debt` upon commit to avoid and premium jumps.

See more [here](https://github.com/emptysetsquad/dollar/pull/12)

### 13. Increase Debt Cap to 20%

- Raises debt cap from `15%` to `20%`, corresponding to `38.4%` and `56.2%` premiums respectively

See more [here](https://github.com/emptysetsquad/dollar/pull/13)

### 14. Split Coupon Underlying

- Reduce the risk of coupons by splitting their principle with their premium reward, treating them differently upon expiration.

See more [here](https://github.com/emptysetsquad/dollar/pull/17)

