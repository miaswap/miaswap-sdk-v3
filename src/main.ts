'use strict'

import {Token} from "./entities";

const main = async () => {
    const runService = process.env.__SERVICE_NAME__;
    console.info("Running service: ", runService);
    switch (runService) {
        default:
            console.log("ok")
            // const ETC = new Token(1945, '0x1C78aCa8F920EA533EFb79c85b2e8192a5cbEF83', 18, 'ETC', 'ETC')
            const USDC = new Token(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')
            // const BTC = new Token(1945, '0x0EFa4e3943bE21E5664645fe20D09893466BDf9c', 18, 'BTC', 'BTC')
            console.log("USDC:",USDC);
            // NonfungiblePositionManager.addCallParameters(
            //     new Position({
            //       pool: pool,
            //       tickLower: -TICK_SPACINGS[FeeAmount.MEDIUM],
            //       tickUpper: TICK_SPACINGS[FeeAmount.MEDIUM],
            //       liquidity: 0
            //     }),
            //     { recipient, slippageTolerance, deadline }
            // )
            break;
    }
}


main().catch(e => console.error(e));
