# On-Chain Protocol Governance

![](/dao.png)

This form of governance is used to upgrade the smart contracts that govern the ESD token. 

### Requirements & Settings

In order to ensure the governance process isn't gamed there are a number of required thresholds for a vote to meet before it can be implemented. These are the following parameters when voting on chain:

- **Proposal threshold:** 0.5% ownership of the DAO
- **Vote length:** A vote lasts for 9 Epochs
- **Minimum Quorum:** 20% of the DAO must vote on the proposal
- **Locking:** If you vote your tokens will be locked for the duration of the vote
- **Expiry:** Successful votes must be committed within 3 epochs.

### How to submit an on-chain proposal

Below are the steps most proposal go through to ensure that the community is informed about the changes and will consider the proposal:

1. Create a post on the [Empty Set Community Forum](https://www.emptyset.xyz/) following the structure of previous `EIP` posts on the forum.
2. Share the post with the discord and telegram communities
3. Implement the changes to the ESD code base and [create a pull request](https://github.com/emptysetsquad/dollar). (Make sure to have a few community members review the changes and post on the pull request before submitting)
   1. If you don't have the skills to do the changes your self, you can create a funding proposal via the treasury t contract developers.
4. Flatten the contract code so it can be submitted to Etherscan
5. Create the contract on the Ethereum network
6. Submit the flattened code to Etherscan to verify the contract.
7. Create a [Diff Checker](https://www.diffchecker.com/) link to compare the active contracts and the proposed contracts
8. Go to the [Governance](https://app.emptyset.finance/#/governance/) page on the DAO, enter the contract address and submit.
9. Inform the discord & telegram community of the new proposal and the diff checker link.

