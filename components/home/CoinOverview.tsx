import React from 'react'
import {fetcher} from "@/lib/coingecko.actions";
import Image from "next/image";
import {formatCurrency} from "@/lib/utils";
import {CoinOverviewFallback} from "@/components/home/fallback";

export const CoinOverview = async () => {
    let coin: CoinDetailsData;
    try {
        coin = await fetcher<CoinDetailsData>('/coins/bitcoin',{
            dex_pair_format: 'symbol'
        })
    } catch (e) {
        console.error('Error fetching coin details:', e);
        return <CoinOverviewFallback />
    }


    return (
        <div id="coin-overview">
            <div className="header pt-2">
                <Image src={coin.image.large} alt={coin.name} width={56} height={56}/>
                <div className="info">
                    <p>{coin.name} / {coin.symbol}</p>
                    <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
                </div>
            </div>
        </div>
    )
}
