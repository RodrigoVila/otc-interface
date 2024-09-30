# Blockchain OTC Order Management Interface

This project is a single-page application (SPA) designed to manage Over-The-Counter (OTC) orders for various cryptocurrencies. The application enables users to create, view, edit, and delete cryptocurrency orders while integrating real-time price data from a global API. Built using Vite, React, Zustand, React Query, and Material UI, this project adheres to clean code principles and a scalable architecture, providing an efficient and intuitive OTC order management system.

## Features

1. Order Creation Form
   Users can create new orders by filling out a form with the following fields:

- Direction Toggle: Allows the user to select either Buy or Sell.
  Cryptocurrency Selection: Dropdown menu to select a cryptocurrency (Bitcoin, Ethereum, Solana, etc.).
- Quantity Input: Users specify the quantity of the selected cryptocurrency.
  -USD Conversion: Real-time conversion of the cryptocurrency value to USD using a global CoinGecko API
  -Expiration Date: A date picker for setting the order’s expiration date, displaying both local time and UTC time.

2. Order Listing
   Displays a list of created orders with details such as:
   -Direction (Buy/Sell)

- Cryptocurrency (e.g., Bitcoin, Ethereum)
- Quantity
- USD Price
- Expiration Date (shown in both local time and UTC)

This list is responsive and shows a table for desktop users, and cards for mobile users.

3. Order Management

- Edit: Modify existing orders using a form pre-filled with the current order details.
- Delete: Remove an order from the list.

4. API Integration
   The app integrates with CoinGecko API to fetch real-time cryptocurrency prices.
   Prices are updated dynamically when users input or modify the quantity field in the form.

5. State Management
   Zustand and React Query are used to manage state and data persistence, ensuring that orders remain available even after a page refresh.
   Orders are stored in memory, and the state is persisted across reloads.

6. Validation and Testing

- Input Validation: The form includes validation to ensure all required fields are filled, and the quantity entered is a positive number.
- Unit Tests: Key components, such OrderForm and some child components were tested.

## Project Structure and Architecture

The project follows clean code and scalable architecture practices, with a hexagonal architecture approach:

```bash
src/
├── adapters/                # API integrations, hooks (e.g., fetching CoinGecko prices)
│   └── hooks/
│   └── services/
├── app/                     # Main entry point
├── core/                    # Business logic, state management
│   ├── orders/              # Order form, order list, and related components
├── ui/                      # UI components
│   ├── components/          # Reusable UI components (buttons, tooltips, etc.)
│   ├── constants/           # Reusable constant values
│   ├── home/                # Home page, and related components
│   ├── orders/              # Order feature, order list, and related components
│   ├── utils/               # Utility functions (e.g., formatters, validators)
...
```

## Technology Stack

- Vite: For fast build tooling and development experience.
- React: For building the user interface.
- Zustand: For state management.
- React Query: For handling server-side state and API data fetching.
- Material UI: For building the form and UI components.
- React Hook Form: For form validation and handling user input.
- CoinGecko API: For real-time cryptocurrency price data.

## Setup and Installation

You can go to a live Demo here:

or run locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/membrane-frontend-cc.git
cd membrane-frontend-cc
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables:

- Go to [CoinGecko API](https://www.coingecko.com/es/api) and get an API KEY.
- Create a .env file in the project root and add the following env variable with the API KEY you just got:

```bash
VITE_COINGECKO_API=YOUR_API_KEY_HERE
```

4. Start the development server

```bash
npm run dev
```

5. To run unit tests:

```bash
npm run test
```

## Resources and Documentation

- Vite: https://vitejs.dev/
- React: https://reactjs.org/
- Zustand: https://zustand-demo.pmnd.rs/
- React Query: https://react-query-v3.tanstack.com/
- Material UI: https://mui.com/
- React Hook Form: https://react-hook-form.com/
- CoinGecko API: https://www.coingecko.com/en/api

## Screenshots
![image](https://github.com/user-attachments/assets/2eaaf056-441a-41b2-9fda-752ff9e8ac44)
![image](https://github.com/user-attachments/assets/4255ff04-dc94-4d4e-b3a2-c9aa7bfa89a9)
![image](https://github.com/user-attachments/assets/6cf08fd3-ab22-4f83-9b9e-7bd17ce8d974)
![image](https://github.com/user-attachments/assets/621cf49e-ad81-4f33-8cdf-671ee846eda2)
![image](https://github.com/user-attachments/assets/5d348489-ac82-4161-952d-39dd7a37f7a2)






