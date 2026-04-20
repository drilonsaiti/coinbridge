import DataTable from "@/components/DataTable";
import Image from "next/image";
import {cn, formatCurrency, formatPercentage} from "@/lib/utils";
import {TrendingDown, TrendingUp} from "lucide-react";
import {fetcher} from "@/lib/coingecko.actions";

const Categories = async () => {
    let categories: Category[] = [];

    try {
        categories = await fetcher<Category[]>('/coins/categories', undefined, 300);
    } catch (e) {
        console.error('Error fetching categories:', e);
    }
    const columns: DataTableColumn<Category>[] = [
        {
            header: 'Category',
            cellClassName: 'category-cell',
            cell: (category: Category) => (category.name)
        },
        {
            header: 'Top Gainers',
            cellClassName: 'top-gainers-cell',
            cell: (category: Category) => {
                return category.top_3_coins.map((coin, index) => (
                    <Image
                        key={`${coin}-${index}`}
                        src={coin}
                        alt={`Top gainer coin ${index + 1}`}
                        width={28}
                        height={28}
                    />
                ))
            }
        },

        {
            header: '24h Change',
            cellClassName: 'chage-header-cell',
            cell: (category: Category) => {
                const isTrendingUp = category.market_cap_change_24h > 0;

                return (
                    <div className={cn('change-cell', isTrendingUp ? 'text-green-500' : 'text-red-500')}>
                        <p className="flex items-center gap-1">
                            {
                                formatPercentage(category.market_cap_change_24h)
                            }
                            {isTrendingUp ? (
                                    <TrendingUp width={16} height={16}/>
                                ) :
                                <TrendingDown width={16} height={16}/>
                            }
                        </p>
                    </div>
                )
            },
        },

        {
            header: 'Market Cap',
            cellClassName: 'market-cap-cell',
            cell: (category: Category) => formatCurrency(category.market_cap)
        },

        {
            header: '24h Volume',
            cellClassName: 'volume-cell',
            cell: (category: Category) => formatCurrency(category.volume_24h)
        }
    ]

    return (
        <div id="categories" className="custom-scrollbar">
            <h4>Top Categories</h4>
            <DataTable
                columns={columns}
                data={categories?.slice(0, 10) ?? []}
                rowKey={(category) => category.name}
                tableClassName={"categories-table"}
                headerCellClassName={"py-3!"}
                bodyCellClassName={"py-2!"}
            />
        </div>
    )
}
export default Categories
