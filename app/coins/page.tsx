import {fetcher} from "@/lib/coingecko.actions";
import Image from "next/image";
import {cn, formatCurrency, formatPercentage} from "@/lib/utils";
import DataTable from "@/components/DataTable";
import CoinsPagination from "@/components/CoinsPagination";

const Page = async ({searchParams}: NextPageProps) => {
    const { page } = await searchParams;
    const pageParam = Array.isArray(page) ? page[0] : page;
    const parsedPage = Number(pageParam);
    const currentPage = Number.isInteger(parsedPage) && parsedPage > 0 ? parsedPage : 1;
    const perPage = 10;

    let coins: CoinMarketData[] = [];

    try {
        coins = await fetcher<CoinMarketData[]>('/coins/markets',
            {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: perPage,
                page: currentPage,
                sparkline: false,
                price_change_percentage: '24h'
            }
            , 300);
    } catch (e) {
        console.error('Error fetching categories:', e);
    }
    const columns: DataTableColumn<CoinMarketData>[] = [
        {
            header: 'Rank',
            cellClassName: 'rank-cell',
            cell: (coin: CoinMarketData) => (coin.market_cap_rank)
        },
        {
            header: 'Token',
            cellClassName: 'token-cell',
            cell: (coin: CoinMarketData) => {
                const name = coin.name;
                const symbol = coin.symbol;
                const image = coin.image;

                return (
                    <div className="flex items-center gap-2">
                        <Image src={image} alt={name} width={28} height={28}/>
                        <p>{name} ({symbol.toUpperCase()})</p>
                    </div>
                )
            }
        },

        {
            header: 'Price',
            cellClassName: 'price-cell',
            cell: (coin: CoinMarketData) => formatCurrency(coin.current_price)
        },

        {
            header: '24h Change',
            cellClassName: 'chage-header-cell',
            cell: (coin: CoinMarketData) => {
                const isTrendingUp = coin.market_cap_change_24h > 0;

                return (
                    <div className={cn('change-cell', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
                        <p className="flex items-center gap-1">
                            {
                                formatPercentage(coin.price_change_percentage_24h)
                            }
                        </p>
                    </div>
                )
            },
        },

        {
            header: 'Market Cap',
            cellClassName: 'market-cap-cell',
            cell: (coin: CoinMarketData) => formatCurrency(coin.market_cap)
        },
    ]

    const hasMorePages = coins.length === perPage;
    const estimatedTotalPages = currentPage >= 100 ? Math.ceil(currentPage / 100) * 100 + 100 : 100;

    return (
        <main id="coins-page">
            <div className="content">
                <h4>Top Categories</h4>
                <DataTable
                    columns={columns}
                    data={coins?.slice(0, 10) ?? []}
                    rowKey={(coin) => coin.id}
                    tableClassName={"categories-table"}
                    headerCellClassName={"py-3!"}
                    bodyCellClassName={"py-2!"}
                />

                <CoinsPagination currentPage = {currentPage} hasMorePages = {hasMorePages} totalPages = {estimatedTotalPages}/>
            </div>
        </main>
    )
}
export default Page
