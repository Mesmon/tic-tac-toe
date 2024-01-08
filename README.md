# Tic Tac Toe

## Structure

### Server

The server is a simple Fastify server that listens for requests on the port specified in the environment. It has a route for the root path `/` that act as health route. It also has a route for the `/game` path that handles the game logic. 
The route `/game/` returns the current state of the game. The route `/game/makeMove` handles the moves of the players. It expects a query like `?row={rowIndex}&column={colIndex}&player={player}` where `{rowIndex}` and `{colIndex}` specify the cell in the board and `{player}` is X or O.

The game starts with an empty board and random player. The player is randomly chosen by the server. The server keeps track of the current player and the board. The board is represented as a 2D array of strings. The strings are either "X", "O" or " ".

To make a move, a request is sent to the server with the query parameters specified above. The server checks if the move is valid. If the move is valid the server updates the board and the current player. If the move is not valid the server returns an error.

To determine the winner of the game I've used a simple algorithm that checks the rows, columns and diagonals of the board. If there is a winner the game is over and the winner is returned. If there is no winner and the board is full the game is over and the winner is null. If there is no winner and the board is not full the game is not over and the winner is null.

### Client

The client is a simple react app. The GamePage component is the main component that handles the game state. For making the game "Real-Time" I've decided to poll the game server every 0.5 seconds to get the most updated game state. Would have used web-sockets if I was more proficient working with the technology.

The GamePage component has a Board component that renders the board. The Board component is a simple component that renders the board with divs. It also shows the game status, current player, winner and a button to reset the game.