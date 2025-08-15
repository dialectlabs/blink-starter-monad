# Blink Starter for Monad

A Next.js-based starter template demonstrating how to integrate [Blinks](https://docs.dialect.to/blinks/) with the Monad blockchain. This project showcases a simple donation application that allows users to send MON (Monad's native currency) to a specified wallet address.

![Blink Scaffold for Monad](/public/screenshot-blink-scaffold-monad.png)

## Guide 🔥🔥🔥

Learn how to build this Blink from scratch with our extensive guide:
https://docs.dialect.to/blinks/blinks-provider/guides/tip-blink

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- A wallet with some MON tokens (for testing donations)

## Environment Setup

Create a `.env` file in the root directory with the following variables:

```bash
# Monad RPC URL (testnet)
NEXT_PUBLIC_RPC_URL=https://rpc.testnet.monad.xyz

# Wallet address to receive donations
DONATION_WALLET=0xd2135CfB216b74109775236E36d4b433F1DF507B

# Dynamic.xyz environment ID
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=your_environment_id_here
```

**Note:** The `DONATION_WALLET` defaults to a wevm.eth multichain wallet for demonstration purposes. Update this to your own wallet address for production use.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## License

MIT
