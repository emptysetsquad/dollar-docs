# ESD常见问题

<hr/>

## Empty Set Døllar

### 什么是 Empty Set Dollar? 

ESD 是一个自我稳定的去中心化稳定币

###  ESD与其他稳定币有什么不同?

社区成员写了一篇文章，比较并对比了各种稳定币。TL:DR如下

> ESD是一种稳定币，被构建为去中心化金融的储备货币。ESD精心平衡了避免了USDC，USDT和TUSD的中心化风险，避免了AMPL＆BASED的死亡螺旋，避免了sUSD和DAI超过100％抵押要求，最重要的是，它可与现有的DeFi协议完美结合。
>
> ESD协议是在Basis.io的基础上扩展的，Basis.io因监管的压力下在启动之前自愿性关闭了。ESD以匿名团队形式启动，以最大程度地降低可能面临的压力，该协议包括一种新的新机制来代替Basis的铸币税份额。

阅读文章:[ https://medium.com/@lewisfreiberg/empty-set-dollar-esd-a0abbfc5ecdb](https://medium.com/@lewisfreiberg/empty-set-dollar-esd-a0abbfc5ecdb)

### 谁创造了 ESD?

团队是匿名的。
如果你想与他们联系，可以发送邮件至: 
emptysetsquad@protonmail.com

### 假设ESD是稳定币，那么它总是值1美元吗?

不。目标是，使稳定币保持在非常接近1美元的水平。但是，预计在项目初期，它会比较有波动性。有些波动是自然的-该协议的整个设计是在价格差异时调整货币供应量-因此，它会有些差异是预料之中。而且它设计了一个时期内获得的最高奖项为1.1，这表示设计者认为价格有望超过1.10美元。因此，项目初期的高波动性并不表示该协议不起作用。但随着时间的流逝，预计波动性会下降，ESD会保持与所需资产的挂钩。

在ESD的早期社区成员的[帖子](https://medium.com/@0xans/ess-a-brief-intro-towards-novel-elastic-stablecoin-implementation-607e86654a9f)中，他/她解释了该机制。

### ESD的供应成长与持币者之间有何关系?

ESD使用铸币税模型来增加货币供应量。这意味着，如果市场要求更多的ESD（购买者多于ESD卖方），则将铸造更多的代币（ESD）来满足该需求，并将价格降至1美元。多余的铸造币供应将分配给当前的ESD持有者（他们已采取措施将其持有代币锁在该协议上，如下所述。）请记住，如果情况相反-需求下降了，该协议必须减少ESD的供应，产生相反的效果。

### ESD如何成为可持续使用的代币?

为了使ESD像USDT或DAI一样成为可持续性使用的稳定币，ESD必须先开始被DeFi和以太坊协议上的其他应用程序接受为货币。在波动期间，代币的效用可能会降低。但随着协议的成熟，波动性将降低而实用性将增强。

### 我想为ESD的成功路途上做出贡献，我该怎么做？?

感谢您希望帮助使项目成功。您可以通过多种方式为每个人的利益做出贡献。一些明确的如下：

- 花一些时间阅读白皮书和这些文档，以了解协议的含义以及如何将其应用于DeFi生态。
- .加入DAO链接的Discord组，以帮助回答问题和讨论治理问题
- 主张将ESD添加到其他DeFi平台中

<hr />

## 代币机制

### 什么是 epoch?(时期)

.调整货币供应量之间的时间长度。该协议在每个时期（当前为8个小时）将评估货币供应量是应该增长还是收缩，然后发行奖励或债务以实现这一目标。作为投资者，在每个时期结束时，如果它不断扩大，您都会获得奖励。

### 什么是 coupon?（优惠券)

优惠券是用于减少货币供应量的方法。简而言之，该协议激励用户自愿燃烧手上的ESD，以换取可在货币供应量再次增长时赎回的优惠券，以恢复已燃烧的ESD，以及购买债务后获得的红利。

### What is staging?

### What is bonding?

### Frozen（冻结) 及 Fluid(流动) 状态表示什么?

参考以下流程：

**Deposit (存款) / Withdraw (提款) ←→ Staged (分级)←→ Bond (绑定)/ Unbond (解绑)**

- 任何时候，您使用一次Bond或Unbond都会在那个时期进入Fluid状态。
- 在下一个Epoch(时期)，您将回到Frozen(冻结)状态

**当处于Fluid(流动)状态：**

- 您将无法提款或存款 。
- 您将可以绑定 / 解绑任何次数。

**当处于Frozen(冻结)状态下:**

- 您将可以存款和提款。

这意味着当您处于绑定并想提款时，您首先解绑，在当下的时期维持在流动状态，直到下一个时期时状态将变为冻结，您将能够提款。

对于“Deposit存款”，您只能在Frozen(冻结)的状态下进行存款，但一旦你Bond(绑定)后，便将无法再存款/提款，状态也转为Fluid(流动)，直到下个Epoch(时期)

钱包页面及LP奖励页面也显示了冻结及流动状态（以及”锁定”状态）。这个术语或许有点令人困惑，冻结及流体告诉您可以与DAO进行交易的状态。“冻结”使您可以进行操作。白皮书中讨论了更多状态详细信息。

### 我该’Advance’(触发)一个Epoch(时期)吗？这是什么意思？?

新时期触发在每八小时就会发生一次。由于技术原因，有人需要手动触发新时期的开始。许多用户已经编写了争夺100 ESD奖励的机器人，以成为第一个触发它的人，作为新用户，我无需担心此技术细节。

### 治理页面有什么作用，我应该如何参与？?

基于ESD是由社群所有，因此有一个管理部分供提案进行更改。您需要至少拥有1％的绑定DAO才能提出新建议。当您已经掌握了基础知识之后，这有可能是您要从事的事情。

### 为什么有些Epoch(时期)会给予奖励而有些却没有呢？?

假设ESD的需求过多，那么Uniswap池中的价格将趋于1美元以上，这表明该协议将铸造更多的代币供应。相反，如果需求减少，则Uniswap上的过多抛售会将价格推低至1美元以下，从而触发协议产生债务并激励代币持有者燃烧ESD以减少代币供应。

如果需要缩小货币供应量，那么在那个时期就不会扩大货币供应量。如果过去减少了货币供应量，那么这些债务将保留在协议中，或者由用户以优惠券的形式购买。优惠券和债务都必须在将来获得新的奖励之前还清，因此，假设有历史债务需要偿还，则在货币供应扩张时期可能不会获得新的奖励。

### 我们如何知道当下的Epoch是否会有奖励以及多少奖励？?

您无法确定直到新的时期被触发，因为TWAP价格是由交易活动触发到新时期时调整的。

您可以通过查看DAO上的“Regulation”页面并进行预计奖励计算。社区维护的网站 - [ESD Tools](https://esd.tools/)，它可在此时期预计可得到的回报（如果有的话），但这工具还不完美，仅是指示性的。

You can’t know for sure until right when the new epoch is triggered as the TWAP price is adjusted by the trading activity right up to the new Epoch. 

You can estimate the amount of rewards by looking at the Regulation page on the DAO and doing some calculations. However a community maintained website, called [ESD Tools](https://esd.tools/), that makes an estimate of what, if any, rewards can be expected in this epoch, but it is not perfect, only indicative.

<hr/>

## **维持ESD的价格挂钩**

### 我如何参与维持挂钩?

想参与维护ESD的价格挂钩，您需要具有代币以进行绑定或提供流动性。

### 如何购买ESD？

当前唯一购买ESD的地方是Uniswap ESD-USDC池。为了您的安全，请通过ESD网站的Trade页面，点击Trade按钮，它会带你到池中访问该池：[或点击这里](https://emptyset.finance/#/trade/)

由于ESD没有在Uniswap中列入白名单，因此您必须批准该未知代币。请理解，在ESD的初期，价格可能会非常波动。在最近的牛市中，ESD的价格已上涨至每枚USDC 1.50美元以上，尽管随着时间的推移，它的价格将收敛至1美元。因此，请注意购买时的价格。另一方面，在这些牛市时期，回报通常可以每8小时达到8％的复利，如果保留在未来，则可以抵消陈本。未来本质上是不确定的，因此您必须在这里做好自己的判断。

### 购买ESD会获得奖励吗？

如果您在Uniswap上购买了ESD，但没有采取其他操作，则不会获得奖励。您的ESD处于流通状态，只是处于惰性状态。

### 有哪些方法可以获得ESD奖励？?

持有ESD时，有三种产生奖励的方法：

1. 把ESD绑定到DAO（建议初学者使用）
2. 把ESD注入Uniswap LP提供流量，再绑定到DAO获取流动性奖励
3. 在债务阶段把ESD燃烧换取优惠券，在供应量扩张时赎回ESD

### 代币绑定与LP代币绑定相比收益如何？?

绑定到DAO与在Uniswap池中提供流动性的相对奖励有所不同。新创造的供应量其中80％奖励给那些与DAO绑定的人，而20％奖励给向绑定LP提供流动性的人。根据Uniswap LP中的总金额，这些奖励可能会有很大的不同。同样，作为流动性提供者有其自身的风险，包括无常损失

社区成员创建了[ESD工具](https://esd.tools/)，用于估计当前时期的相对奖励。大户可以在各个时期之间在Uniswap上的LP池中进出大量资金，这将显着影响LP的奖励分配。

此外，奖励在直到时期结束前都会变动。因此，LP奖励有时会比DAO更高，有时会更低，波动频率较高。

### 作为初学者，我应该如何使用代币来平衡挂钩？

将ESD绑定到DAO很可能是最好的方法。这很简单，您可以“设置并忘记它”。

进入流动资金池会比较复杂-您必须到uniswap提供流动性，冒着无常损失风险，将LP代币绑定DAO。最重要的是，此方法不会自动将奖励添加回LP池中-每个时期你将获得奖励，但它们只会浮动，除非您每隔8小时操作一次（要么将其重新提供给流动资金，或赎回奖励后把它们绑定DAO）。由于这些原因，在开始时，绑定到DAO是一个好地方。

Purchasing coupons also has risks -- you have to have a view on when the protocol will come out of debt, and if the protocol goes a month without coming out of contraction, your coupons could expire  -- so as a beginner coupons may not be for you.

购买优惠券也有风险-您必须查看协议何时会清欠债务，如果协议在一个月内没有出现通缩，您的优惠券可能会过期-因此优惠券或许对初学者不友好。

### 从Uniswap购买ESD并绑定到DAO的明确步骤是什么?

1. 进入这页面:[ http://emptyset.finance/#/wallet/](http://emptyset.finance/#/wallet/)
2. 点击 ‘Trade’ 按钮传送至 Uniswap
3. 连接到Uniswap，并批准代币进行交易

![Uniswap USDC-ESD pair](../_media/uniswap-usdcesd.png)

4. 在Uniswap中输入一定数量的USDC，批准交易并购买ESD。.
5. 市场的流动性每小时变化时，请注意价格和滑点。
6. 返回ESD DAO钱包页面:[ http://emptyset.finance/#/wallet/](http://emptyset.finance/#/wallet/)
7. 单击’Unlock’解锁以允许DAO与您的ESD交互

![Unlocking the DAO](../_media/empty-dao.png)

8. Ethereum network.在Staged栏里的Deposit框中输入ESD的数量（或单击“最大”），然后单击“Deposit存款”按钮并批准交易，等待该交易在以太坊网络上完成。

![Staging via the DAO website](../_media/stage.png)

9. 在’Bond’(绑定)旁边点击“Max‘(最大)以自动输入最大数额，然后单击“Bond”(绑定)。交易完成后，您的ESD将绑定到DAO，并在下时期开始获得奖励。 

![Bonding ESD via the DAO](../_media/bond.png)

>  **注意**：一旦您在当下时期内使用的了’Bond’(绑定)，您将无法在该时期内进行存款/提款（直到下一个时期）

### 绑定Uniswap LP代币的明确步骤是什么？

除非您具有Uniswap LP抵押的经验，否则可能不应该这样做。如果您对处理的内容感到还行，请执行以下操作：

1. 在Uniswap上抵押 ESD和USDC
2. 到 https://emptyset.finance/#/pool/
3. 点击“Unlock”(解锁)，等待确认
4. 在“Staged”(分级)部分下：输入金额并单击“Deposit”(存款)，然后等待确认
5. 在“Bond”(绑定)部分下：输入金额，然后单击“Bond”，然后等待确认

### 通过绑定到DAO获得的奖励可以进行什么操作？

如果您已绑定到DAO，则任何奖励的ESD都会自动绑定，因此您的报酬将继续自动增加。

如果要出售ESD，则必须首先将它们与DAO解绑，然后再解除分级。解除绑定后，您需要等到下一个时期才能解除分级。这时期的延迟就是这么设计的。

### 透过绑定LP代币获得的奖励如何处理？

在为向Uniswap池提供流动性的代币获得奖励后，奖励将显示在DAO的LP奖励池页面 (http://emptyset.finance/#/pool/) 的标题下方。在那种状态下，这些代币处于流通-它们并没有产生更多的回报。

如果您想将它们添加回到Uniswap LP池，则只需单击一下即可轻松实现。在“ LP奖励池”页面的底部，您会看到“Provide”(提供)部分。它还会在您连接的钱包中显示您的USDC余额。您可以在框中输入您想要加入的数字（或单击“最大”），如果您当时有足够的USDC来提供池所需的必要比例，则可以通过单击“提供”来触发一笔交易，你刚奖励的ESD，以及适当数量的USDC，将会被添加到Uniswap池中，并直接抵押您的Uniswap LP代币至DAO-有效地增加了您在LP池中的所有权。

或者，如果您想取回已奖励的代币或将其绑定到DAO，则必须

 	1. 在‘Unbound’(解绑)隔壁点击’Max’按钮。
 	2. 点击’Unbound’后确认交易
 	3.  交易确认后您会看见已奖励的代币从’Rewarded’移至’Claimable’。
 	4. 如果你希望继续抵押LP代币获得奖励，则可以在’Bond’处点击’Max’然后提交Bond交易。
 	5. 等待一个Epoch(时期)
 	6.  点击’claim’，代币将转入你钱包。

<hr />

## 故障排除

### 我正在尝试在DAO上执行一项操作，例如存款或绑定，但该按钮保持灰色或不起作用-为什么会发生这种情况？

很有可能您已经在此时期进行了交易，因此必须等到下一个时期再次进行交易。有关Frozen冻结和Fluid流体状态，请参考上文。