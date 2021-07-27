# Stability Mechanism



## Reserve

We will use a protocol reserve as our primary stability mechanism.

- **DSU** can always be minted from the reserve for 1 **USDC**
- **DSU** can always be burned in the reserve for `RR*USDC`, where `RR` is the current reserve ratio capped at `1.00` 

#### Reserve Ratio

The reserve ratio is the ratio of the `USDC`-denominated value of the reserve over the currently issued **DSU**. During normal operation this ratio will equal or exceed `100%`.

In extenuating circumstances like an exploit or a bug the ratio may drop below `100%` . In this case the redemption price is pro-rated such that redeeming earlier does not guarantee an optimal exit result. This prevents bank runs in times of uncertainty to allow the protocol time to recover if possible.

#### ESS as a backstop

In addition to acting as a seignorage share and governance token, **ESS** can backstop the reserve for the protocol.‌

At any time, governance may vote to mint and sell **ESS** to raise `RR` if it drops below its expected operating value.

## Future Mechanics

The initial launch of the protocol has no ancillary stability mechanisms which might reduce the reserve ratio below 1. However in the future mechanisms may be suggested, modelled and proposed to the DAO. 

### Safely Experimenting

To enable a safe experimentation environment once we’ve bootstrapped, governance can artificially lower the redemption price using an `EXIT_TAX` to create a non-zero *hard price range*. This enables safe efficacy testing for various ancillary stability mechanisms while the system is still over-collateralized and can easily rollback.