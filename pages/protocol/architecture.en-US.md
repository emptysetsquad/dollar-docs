# Architecture

## Overview

![](https://gblobscdn.gitbook.com/assets%2F-MXfCSdFVZnlcHSTQIhU%2F-MXkOwT_294bAithe_zr%2F-MXkR8gXeskvzVVkYkaU%2Fimage.png?alt=media&token=3385d8cd-bc17-4b00-98db-22543e9ffb86)

## Contracts

### GovernorAlpha

The protocol utilises Compound's GovernorAlpha contracts to control the various contracts owned by the protocol. It directly owns the **Timelock** contract which in-turn is able to execute the proposals after a time period.

### Timelock

The Timelock is used to delay the proposals that have passed. The GovernorAlpha contract passes proposals to be executed with the `queue()` command. After a time period `execute()` can be called to action the queued proposal.

### Proxy Admin

The ProxyAdmin is a upgradable proxy contract that administers the **Reserve's** proxy.

### Reserve

The Reserve owns the ERC-20 tokens of the protocol and custodies the reserve assets. The Reserve can mint both DSU and ESS, however ESS is only mintable by the **Timelock**. By calling the `mint()` anyone is able to provide USDC and receive DSU at a 1-to-1 rate.

### Stake (ESS)

The ESS token governs the protocol via the **GovernerAlpha** contract. The token can be used to vote on proposals and create proposals. The ERC-20 is owned by the **Reserve** which can mint more if the **GovernorAlpha** passes a vote to do so.

### Dollar (DSU)

The DSU token is the protocol's stablecoin. This token is owned by the **Reserve** which can mint and redeem DSU in exchange for reserve assets.

### Registry

The **Registry** maintains a list of all of the addresses and contracts owned by the **Timelock** contract, and by extension the **GovernorAlpha**. It is a central reference point used by the protocol to keep track of the updated contracts.

### Incentivizer

The Incentivizer is utilised to provide liquidity mining programs for various liquidity pools. This operates similar to a standard staking/rewards contract. Users can deposit LP tokens of a specific pool and receive an amount of **ESS** at a specific emission rate.

## Repository

The code for the Empty Set protocol is [here](https://github.com/emptysetsquad/emptyset).

## Audit

The protocol code was audited by [OpenZeppelin](https://openzeppelin.com/). You can find the audit on their website [here](https://blog.openzeppelin.com/report-04-01-2021/)

If you find a bug or security vulnerability in our contracts please send an email to emptysetsquad@protonmail.com
