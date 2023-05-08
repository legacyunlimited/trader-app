# Stocks App

This is a React-based web application that displays a list of most active stocks and allows users to add and remove stocks to/from their favorites list.

## Components

- `ItemList`: A component that displays a list of most active stocks with a button to add them to the favorites list.
- `Favorites`: A component that displays a list of user's favorite stocks with a button to remove them from the list.

## API

- The application uses a RESTful API to fetch most active stocks and user's favorite stocks, and to add and remove stocks from user's favorites list.
- The API endpoints used in this application are:

  ### `GET /stocks`

  Fetches a list of most active stocks.

  ### `GET /favorites`

  Fetches a list of user's favorite stocks.

  ### `POST /favorites`

  Adds a stock to user's favorites list. The stock data should be included in the request body.

  ### `DELETE /favorites/:symbol`

  Removes a stock with the given symbol from user's favorites list.

## Installation and Setup

To run this application locally, follow these steps:

1. Clone this repository: `git clone https://github.com/username/stocks-app.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Usage

After starting the development server, you can view the application in your web browser at `http://localhost:3000`. The most active stocks will be displayed on the left side of the screen, and your favorite stocks will be displayed on the right side. To add a stock to your favorites list, click the "Add to Favorites" button next to the stock. To remove a stock from your favorites list, click the "Remove" button next to the stock in the favorites list.

## Contributing

Contributions to this project are welcome. To contribute, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b my-new-feature`
3. Make changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
