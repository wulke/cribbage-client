# cribbage-client

#### Running Locally
`git clone https://github.com/wulke/cribbage-server.git`

`npm run start`

`git cloen https://github.com/wulke/cribbage-client.git`

`npm run dev`

#### Running Locally (Dev with Docker)
`docker build -t cribbage:dev .`

`docker run -it -p 5173:5173 cribbage:dev`

Load "localhost:5173" in browser.

#### Running Locally (Production with Docker)
`docker build -f Dockerfile-prod -t cribbage:prod .`

`docker run -itd -p 80:80 --rm cribbage:prod`

Load "localhost" in browser.

#### Setting up Routes
[react-router-dom tutorial](https://reactrouter.com/en/main/start/tutorial)

#### References
[github cli](https://cli.github.com/manual)
[socket.io with react](https://socket.io/how-to/use-with-react)
[cardsJS](https://github.com/richardschneider/cardsJS)
[react-router-dom](https://reactrouter.com/en/main)
[vitest](https://vitest.dev/guide/)
https://github.com/deck-of-cards/standard-deck
[docker + github actions setup](https://dev.to/kenessajr/deploy-a-react-app-to-digitalocean-using-github-actions-and-docker-4pln)