# Coupon Mechanics

### What is a coupon?

Coupon is the method used to shrink the money supply. Simply, the protocol offers an incentive for users to voluntarily burn their ESD, and in return an amount of coupons, the amount of ESD burned multiplied by the premium, are issued in place of the burned ESD.  When the money supply grows again the coupon holder may redeem their coupon for ESD at a one-to-one ratio. The risk associated is that if that coupon is not redeemed within a certain amount of time, (90 epochs under current protocol) that burned ESD is gone.

### What are the current mechanics?

The coupon premium is based on the ratio of debt vs supply within the protocol. As the debt ratio increases the premium will increase along a curve. The current maximum for debt is 35% of the total supply and the maximum premium is 45%.

For clarification purposes, each epoch that passes with the TWAP under $1 the debt will grow, and in turn, the premium will too. Under the status quo, the debt increase maxes out at 3% per epoch, for a total maximum 35%. If the TWAP price is over 1 at the advancement of an epoch then coupons will be redeemable, and the debt is reverted back to 0, and with it the premium.

By burning the ESD for coupons the supply is shrinking and in it’s place coupons are created. These coupons will be redeemable if/when ESD’s goes back up over $1. 

**Example:**
Let’s say you own 100 ESD. The TWAP drops to .96 during an epoch, and stays there at the advancement between two epochs. We’ve now entered a debt cycle. DAO and LP rewards are not distributed. Five epochs later, the TWAP has stayed at .96 the entire time. At this point there would be a ~15% premium available as an incentive to burn your ESD. (Remember, 3% is the maximum debt increase per epoch and that maximum is reached if the TWAP price is at or below .97. The debt builds on itself each epoch that passes in a debt cycle and increases the premium.) You decide to burn your 100 ESD and in it’s place you would be given 115 coupons that would have to be claimed within 90 epochs.

### Do Coupons Expire?

Currently, 90 epochs after coupons are created they expire, rendering them unredeemable.
