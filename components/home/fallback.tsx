import React from 'react';
import DataTable from "@/components/DataTable";
import {cn} from "@/lib/utils";

export const CoinOverviewFallback = () => {
    return (
        <div id="coin-overview-fallback" className="animate-pulse">
            <div className="header pt-2">
                <div className="header-image bg-dark-400" />
                <div className="info">
                    <div className="header-line-sm bg-dark-400 rounded-sm" />
                    <div className="header-line-lg bg-dark-400 rounded-sm" />
                </div>
            </div>
            {/* Including period button skeletons as defined in CSS */}
            <div className="flex gap-2 mt-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="period-button-skeleton bg-dark-400" />
                ))}
            </div>
            <div className="chart mt-4">
                <div className="chart-skeleton bg-dark-400" />
            </div>
        </div>
    );
};

export const TrendingCoinsFallback = () => {
    const skeletonData = Array(6).fill({});
    
    const columns: DataTableColumn<object>[] = [
        {
            header: 'Name',
            cellClassName: 'name-cell',
            cell: () => (
                <div className="name-link flex items-center gap-2 md:gap-3">
                    <div className="name-image bg-dark-400" />
                    <div className="name-line bg-dark-400 rounded-sm" />
                </div>
            ),
        },
        {
            header: '24h Change',
            cellClassName: 'change-cell',
            cell: () => (
                <div className="price-change flex gap-1 items-center">
                    <div className="change-icon bg-dark-400" />
                    <div className="change-line bg-dark-400 rounded-sm" />
                </div>
            ),
        },
        {
            header: 'Price',
            cellClassName: 'price-cell',
            cell: () => (
                <div className="price-line bg-dark-400 rounded-sm" />
            ),
        }
    ];

    return (
        <div id="trending-coins-fallback" className="animate-pulse">
            <h4>Trending Coins</h4>
            <div className="trending-coins-table">
                <DataTable
                    columns={columns}
                    data={skeletonData}
                    rowKey={(_, index) => index}
                    tableClassName="trending-coins-table"
                    headerCellClassName="py-3!"
                    bodyCellClassName="py-2!"
                />
            </div>
        </div>
    );
};

export const CategoriesFallback = () => {
    const skeletonData = Array(10).fill({});

    const columns: DataTableColumn<object>[] = [
        {
            header: 'Category',
            cellClassName: 'category-cell',
            cell: () => (
                <div className="category-skeleton bg-dark-400 rounded-sm" />
            )
        },
        {
            header: 'Top Gainers',
            cellClassName: 'top-gainers-cell',
            cell: () => (
                <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="coin-skeleton bg-dark-400" />
                    ))}
                </div>
            )
        },
        {
            header: '24h Change',
            cellClassName: 'change-header-cell',
            cell: () => (
                <div className="change-cell">
                    <div className="change-icon bg-dark-400" />
                    <div className="value-skeleton-sm bg-dark-400 rounded-sm" />
                </div>
            ),
        },
        {
            header: 'Market Cap',
            cellClassName: 'market-cap-cell',
            cell: () => (
                <div className="value-skeleton-md bg-dark-400 rounded-sm" />
            )
        },
        {
            header: '24h Volume',
            cellClassName: 'volume-cell',
            cell: () => (
                <div className="value-skeleton-lg bg-dark-400 rounded-sm" />
            )
        }
    ];

    return (
        <div id="categories-fallback" className="animate-pulse">
            <h4>Top Categories</h4>
            <DataTable
                columns={columns}
                data={skeletonData}
                rowKey={(_, index) => index}
                tableClassName="categories-table"
                headerCellClassName="py-3!"
                bodyCellClassName="py-2!"
            />
        </div>
    );
};
