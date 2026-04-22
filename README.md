# CoinBridge

CoinBridge is a crypto screener application featuring a high-frequency terminal and a comprehensive dashboard. It provides real-time and historical cryptocurrency data, trending coin information, and category analysis, all powered by the CoinGecko API.

## Key Features

*   **Interactive Dashboard**: The homepage features an overview of a major cryptocurrency (Bitcoin by default) with an interactive candlestick chart, a list of trending coins, and an overview of top crypto categories.
*   **Comprehensive Coin Listings**: A paginated "All Coins" page displays a detailed table of cryptocurrencies, including rank, price, 24-hour change, and market cap.
*   **Advanced Candlestick Charts**: Utilizes `lightweight-charts` to render detailed OHLC (Open, High, Low, Close) charts. Users can switch between various time periods like daily, weekly, monthly, and more.
*   **Trending Coins & Categories**: Fetches and displays the latest trending coins and top categories by market cap from CoinGecko, allowing users to stay on top of market trends.
*   **Responsive UI**: Built with Tailwind CSS and shadcn/ui, the application is fully responsive and provides a seamless experience on both desktop and mobile devices.
*   **Server-Side Rendering**: Leverages Next.js with the App Router for efficient data fetching and server-side rendering, ensuring fast page loads and optimal performance.

## Technologies Used

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
*   **Charting**: [Lightweight Charts](https://www.tradingview.com/lightweight-charts/)
*   **Data Source**: [CoinGecko API](https://www.coingecko.com/en/api)

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

*   Node.js (v20 or later)
*   npm, yarn, pnpm, or bun
*   A CoinGecko API Key. You can get a free key from the [CoinGecko API site](https://www.coingecko.com/en/api).

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/drilonsaiti/coinbridge.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd coinbridge
    ```
3.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Environment Configuration

Create a `.env.local` file in the root of the project and add your CoinGecko API credentials.

```.env.local
COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
COINGECKO_API_KEY=YOUR_COINGECKO_API_KEY
```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

*   `/app`: Contains the pages and routing structure of the application, built using the Next.js App Router.
    *   `/app/page.tsx`: The main dashboard page.
    *   `/app/coins/page.tsx`: The page for listing all cryptocurrencies.
*   `/components`: Reusable React components used throughout the application.
    *   `/components/CandlestickChart.tsx`: The interactive charting component.
    *   `/components/DataTable.tsx`: A generic and reusable table component.
    *   `/components/home`: Components specific to the homepage dashboard.
    *   `/components/ui`: UI components from shadcn/ui.
*   `/lib`: Contains utility functions and API actions.
    *   `/lib/coingecko.actions.ts`: A server action to fetch data from the CoinGecko API.
    *   `/lib/utils.ts`: Helper functions for formatting and class name generation.
*   `/public`: Static assets like images and logos.
*   `/constants.ts`: Application-wide constants, including chart configurations and navigation items.
