# ESD Protocol Changelog

Below is a list of updates to the Empty Set Dollar protocol since its inception. These changes follow the on-chain governance procedures and are unrelated to TIPs or the ESD treasury. Dates and times in UTC.

## 0. Protocol Launch

The implementation of the protocol followed the [Whitepaper](https://github.com/emptysetsquad/dollar/blob/master/d%C3%B8llar.pdf) that was released on the same day.

## 1. LP Incentivisation & Pool2

Epoch 86, 2020-09-22

### Changes
- Adds `ESDS` Transfer events when bonding and unbonding.
- Updates LP incentivization pool cut from 5% to 20%.
- New LP incentivization pool with:
  - Minor unbonding issue fix
  - Additional `emergencyPause()` and `emergencyWithdraw()` methods

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/1)
- Implementation: [0xBe3c2149729a7c001FEfc5b9c1EF829d242dE0CC](https://etherscan.io/address/0xBe3c2149729a7c001FEfc5b9c1EF829d242dE0CC)
- [DAO Vote](https://app.emptyset.finance/#/governance/candidate/0xBe3c2149729a7c001FEfc5b9c1EF829d242dE0CC)
- Commit: [0x2dbbe0c4aba09a1c842d80a07b97a874cc654aba73151ff086470c64ab9041bf](https://etherscan.io/tx/0x2dbbe0c4aba09a1c842d80a07b97a874cc654aba73151ff086470c64ab9041bf)


## 2. Epoch Speedup
Epoch 105, 2020-10-08

### Changes
- Shorten epoch period from `24 hours` to `8 hours`, starting at epoch `106`.
- Adds `emergencyCommit` method to governance.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/2)
- Implementation: [0xBe3c2149729a7c001FEfc5b9c1EF829d242dE0CC](https://etherscan.io/address/0xcbaBfc142D6c3D4B3E83744132785A25ef967cC4)
- [DAO Vote](https://app.emptyset.finance/#/governance/candidate/0xcbaBfc142D6c3D4B3E83744132785A25ef967cC4)
- Commit: [0xc31b48b8fbeb05ebafc4d12cc4001e91b316dead629764570508a465d2029028](https://etherscan.io/tx/0xc31b48b8fbeb05ebafc4d12cc4001e91b316dead629764570508a465d2029028)


## 3. Raise Debt Cap to 35%
2020-10-10

### Changes
- Raises debt cap from `30%` to `35%`.
- Resets debt ratio to `30%` if debt ratio is higher at time of commit.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/3)
- Implementation: [0x2519F663f9eEEF84D85e607D63C39C1B6fe885A4](https://etherscan.io/address/0x2519F663f9eEEF84D85e607D63C39C1B6fe885A4)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0x2519F663f9eEEF84D85e607D63C39C1B6fe885A4)
- Commit: [0x3c4334c482168a991c972c1f76f55e0d0e64267130a52a4dfd8ce071ff8c6765](https://etherscan.io/tx/0x3c4334c482168a991c972c1f76f55e0d0e64267130a52a4dfd8ce071ff8c6765)


## 4/5. Fix Quorum Computation
Epoch 115, 2020-10-12

### Changes
- Resolves bug that allows proposal and commitment with less `ESDS` than expected.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/4)
- Implementation: [0xd2d6737d3f4Ad0504C669AD9364C4a7318Fb2092](https://etherscan.io/address/0xd2d6737d3f4Ad0504C669AD9364C4a7318Fb2092)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0xd2d6737d3f4Ad0504C669AD9364C4a7318Fb2092)
- Commit: [0xca87e061a9211c44bf0e04f932c83ae70924f2d2e31cc3881cdf8a8ce047671d](https://etherscan.io/tx/0xca87e061a9211c44bf0e04f932c83ae70924f2d2e31cc3881cdf8a8ce047671d)


## 6. Relax Balance Check
Epoch 127, 2020-10-16
### Changes
- Relaxes the balance checks in the `DAO` and `Pool` contracts which were either redundant or could in some cases fire even with correct state.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/5)
- Implementation: [0x86e499d46Fe5ACb67292504ff22828d18e8ea347](https://etherscan.io/address/0x86e499d46Fe5ACb67292504ff22828d18e8ea347)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0x86e499d46Fe5ACb67292504ff22828d18e8ea347)
- Commit:  [0x0c260a20d61987da57be549d1d28f6816f3660c338a32c40ce1f33d21c334484](https://etherscan.io/tx/0x0c260a20d61987da57be549d1d28f6816f3660c338a32c40ce1f33d21c334484)


## 7. Supply Change Limit to 3%
Epoch 164, 2020-10-28

### Changes
- Reduces Supply Change Limit from `10%` to `3%`.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/6)
- Implementation: [0xdAf2593AaF8EF040E279c806aaB8deDFE534d421](https://etherscan.io/address/0xdAf2593AaF8EF040E279c806aaB8deDFE534d421)
- Discussion on [Discord](https://discord.com/channels/752342816033603624/770042128570777613/770042192575725589)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0xdAf2593AaF8EF040E279c806aaB8deDFE534d421)
- Commit: [0xc8b5d2fbdf434e1eee7a2b51b1266d0a94390365c07d128a742235b36733c1cb](https://etherscan.io/tx/0xc8b5d2fbdf434e1eee7a2b51b1266d0a94390365c07d128a742235b36733c1cb)

## 8. EIP-1: Improvements to ESD Coupon Redemption
Epoch 183, 2020-11-03
### Changes
- Wipe debt on first expansion
- Require 2 epoch wait before coupons becomes redeemable

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/7)
- Implementation: [0x2BB93FBDfA5c9dcdB157b90524978727c871AF3C](https://etherscan.io/address/0x2BB93FBDfA5c9dcdB157b90524978727c871AF3C)
- [Forum discussion](https://www.emptyset.xyz/t/eip-1-improvements-to-esd-coupon-redemption/32)
- [Discord discussion](https://discord.com/channels/752342816033603624/772368943826468905/772369024755564545)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0x2BB93FBDfA5c9dcdB157b90524978727c871AF3C)
- Commit: [0x588563a6303697dab56e7a157c69a8e450290a09caa547affd5750a435617f0a](https://etherscan.io/tx/0x588563a6303697dab56e7a157c69a8e450290a09caa547affd5750a435617f0a)


## 9. EIP-3: Removing sequencing from expansion rewards, 2020-11-13
Epoch 213, 2020-11-13
### Changes
- Increase the expansion rate to 6% while there are coupons that have not been credited for redemption.
- Updates the expansion phase such that when there are coupons to be redeemed, a minimum of 20% of the expansion will be used as rewards for the LP pool.
- Epoch locks for DAO and LP will be increased from 1 epoch to 15 and 5 epochs, respectively.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/9)
- Implementation: [4202ffe860a2b77225d446bafb8e346e054da361](https://etherscan.io/address/4202ffe860a2b77225d446bafb8e346e054da361)
- [Forum discussion](https://www.emptyset.xyz/t/eip-3-removing-sequencing-from-expansion-rewards/58)
- [Discord discussion](https://discord.com/channels/752342816033603624/775857442868559874/775857764580327445)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/4202ffe860a2b77225d446bafb8e346e054da361)
- Commit: [0xb7cfab4efa5e425f8e2d39687f9c8a97ec57ebee40c8dac192d9cda8bcad70d8](https://etherscan.io/tx/0xb7cfab4efa5e425f8e2d39687f9c8a97ec57ebee40c8dac192d9cda8bcad70d8)


## 10. EIP-8 Reduce Governance Thresholds
Epoch 249, 2020-11-25

### Changes
- Lowers the governance proposal threshold from `1%` to `0.5%`.
- Lowers the governance quorum threshold from `33%` to `20%`.


### Tracking
- [Pull request:](https://github.com/emptysetsquad/dollar/pull/10) Note that this PR was not fully applied in the implementation as someone proposed a simplified version of the contract. The QoL improvements were proposed later (see #11 below).
- Implementation: [fd6d0c38211f29f6668a3e6886ca7dced0162208](https://etherscan.io/address/fd6d0c38211f29f6668a3e6886ca7dced0162208)
- Commit: [0x567a137fed165b5b2ce6a1777b4bea0b3c09cb24d9b10852bf837de7e6b65c5e](https://etherscan.io/tx/0x567a137fed165b5b2ce6a1777b4bea0b3c09cb24d9b10852bf837de7e6b65c5e) 
- [Forum discussion](https://www.emptyset.xyz/t/eip-8-quorum-and-proposal-threshold-reductions/)
- [Discord discussion](https://discord.com/channels/752342816033603624/780110721924464710/780112731364655136)

### 11. Quality of life improvements, 2020-12-02

### Changes
- Removes `Pool 1` migration reward payout.
- Refactors proposal threshold into `Constants.sol`.
- Fully decouples debt repayment from the `increaseSupply` method.
- Adds getters for `lockedUntil` and `fluidUntil` user data.
- Standardizes events for incentivization rewards.

### Tracking
- Commit: [0xcb9a816e674d6bb25fc5beb8d974c29750f1db26e4bc3690048f9865167c3881](https://etherscan.io/tx/0xcb9a816e674d6bb25fc5beb8d974c29750f1db26e4bc3690048f9865167c3881)
- Implementation: [0xdC99214431bEb52877Cde88C81155D29f61D6e09](https://etherscan.io/address/0xdC99214431bEb52877Cde88C81155D29f61D6e09)


## 12. EIP-10: Protocol Funding (Treasury)
Epoch 288, 2020-12-08

### Changes
- Rewards `500,000 ESD` to treasury on commit.
  - Treasury address: [0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22](https://etherscan.io/address/0x460661bd4A5364A3ABCc9cfc4a8cE7038d05Ea22)
- Adds a 2.5% expansion reward for treasury
  - 77.5/2.5/20 DAO/Treasury/LP during regular expansion
  - 77.5/2.5/20 Coupon/Treasury/LP during coupon expansion

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/11)
- Implementation: [0xFDad22E653C103Ef4310e4D68E88c8Dc4705F2D1](https://etherscan.io/address/0xFDad22E653C103Ef4310e4D68E88c8Dc4705F2D1)
- [Forum discussion](https://www.emptyset.xyz/t/eip-10-protocol-funding/90)
- [Discord discussion](https://discord.com/channels/752342816033603624/784924805178064896/784924907293114388)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0xFDad22E653C103Ef4310e4D68E88c8Dc4705F2D1)
- Commit: [0x8ef9afd96a7fb46177ee2e1a495aefa46cfa331b9c1f44de96ee45a363a253e4](https://etherscan.io/tx/0x8ef9afd96a7fb46177ee2e1a495aefa46cfa331b9c1f44de96ee45a363a253e4)

## 13. EIP-9: Update Coupon Curve
Epoch 213, 2020-12-23
### Changes
- Steepens the coupon premium curve from: `1/(3(1-R)^2)-1/3` to `1/((1-R)^2)-1`.
- Lowers debt cap from `35%` to `15%`, corresponding to `45.6%` and `38.4%` premiums respectively.
- One time 60% reduction in protocol `debt` upon commit to avoid and premium jumps.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/12)
- Implementation: [0x4202Ffe860A2B77225d446bAfb8e346e054dA361](https://etherscan.io/address/0x4202Ffe860A2B77225d446bAfb8e346e054dA361)
- [Forum discussion](https://www.emptyset.xyz/t/eip-9-coupon-premium-curve-evolution/87)
- [Discord discussion](https://discord.com/channels/752342816033603624/790920127428165632/805397433714343947)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0x4202Ffe860A2B77225d446bAfb8e346e054dA361)
- Commit: [0x374f85804f571b5c2cac24ec6fe4917592ebed94c29084bd6462eaf0e900739f](https://etherscan.io/tx/0x374f85804f571b5c2cac24ec6fe4917592ebed94c29084bd6462eaf0e900739f)



### 14. Increase Debt Cap to 20%
Epoch 357, 2020-12-31

### Changes
- Raises debt cap from `15%` to `20%`, corresponding to `38.4%` and `56.2%` premiums respectively

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/13)
- Implementation: [0xf7752941cb46785a51b23859deb36fdf1e18af4d](https://etherscan.io/address/0xf7752941cb46785a51b23859deb36fdf1e18af4d)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0xf7752941cb46785a51b23859deb36fdf1e18af4d)
- Commit: [0x0953221cb0d5428764113a0f477975ed9b685b6588ff5c9b0fa51e63d5adfc7a](https://etherscan.io/tx/0x0953221cb0d5428764113a0f477975ed9b685b6588ff5c9b0fa51e63d5adfc7a)


### 15. EIP-16, Split Coupon Underlying
Epoch 399, 2021-01-14

### Changes
- Reduce the risk of coupons by splitting their principle with their premium reward, treating them differently upon expiration.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/17)
- Implementation: [0x9ac39b3e72f3bc07520355a9be5398656c8bc514](https://etherscan.io/address/0x9ac39b3e72f3bc07520355a9be5398656c8bc514)
- [Forum discussion](https://www.emptyset.xyz/t/eip-16-split-coupons-into-1-deposit-2-yield-so-that-expiration-only-applies-to-the-2-yield-1-deposit-is-returned-at-expiration/181)
- [Discord discussion](https://discord.com/channels/752342816033603624/798218029724991498/798218850659205190)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0x9ac39b3e72f3bc07520355a9be5398656c8bc514)
- Commit: [0x860c35d474929e3432c17670b430ea1649f5920a37d5e2622d7337cf6bab8e0b](https://etherscan.io/tx/0x860c35d474929e3432c17670b430ea1649f5920a37d5e2622d7337cf6bab8e0b)

### 16. EIP-18, Pro-Rated Premium
Epoch 417, 2021-01-20

### Changes
- On redeem the premium portion of the user’s coupon will be pro-rated by the time their ESD was locked.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/18)
- Implementation: [0xeF9c0C8cb6d7C5d36cB9EA0d6a1a4FCa4E21aA20](https://etherscan.io/address/0xeF9c0C8cb6d7C5d36cB9EA0d6a1a4FCa4E21aA20)
- [Forum discussion](https://www.emptyset.xyz/t/eip-18-pro-rated-premium/208)
- [Discord discussion](https://discord.com/channels/752342816033603624/800618230066053120/800618723475587112)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0xeF9c0C8cb6d7C5d36cB9EA0d6a1a4FCa4E21aA20)
- Commit: [0x3cf3b91e8eb21efbca9f58d94ee94dbd31a3e5b5cd436c4728f767b75ce092e6](https://etherscan.io/tx/0x3cf3b91e8eb21efbca9f58d94ee94dbd31a3e5b5cd436c4728f767b75ce092e6)

### 17. EIP-22, Stability Reward

Epoch 432, 2021-01-25

### Changes
- Adds on always-on floating reward rate to the DAO to incentivize bonding during contraction periods.

### Tracking
- [Pull request](https://github.com/emptysetsquad/dollar/pull/19)
- Implementation: [0xdA7780d1bccCF32AC50dA8956F9aCEAd5A507576](https://etherscan.io/address/0xdA7780d1bccCF32AC50dA8956F9aCEAd5A507576)
- [Forum discussion](https://www.emptyset.xyz/t/eip-22-dao-rewards/234)
- [DAO vote](https://app.emptyset.finance/#/governance/candidate/0xdA7780d1bccCF32AC50dA8956F9aCEAd5A507576)
- Commit: [0x62d1fe0cd436b8b8074c48632a9c83d20c595b2d3a39fffdf205e0038fc3816d](https://etherscan.io/tx/0x62d1fe0cd436b8b8074c48632a9c83d20c595b2d3a39fffdf205e0038fc3816d)
