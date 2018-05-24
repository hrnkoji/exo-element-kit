# Exo Element Kit

Custom fork of [Rakuten React Kit](https://github.com/rakuten-frontend/rakuten-react-kit)

## Includes

- ⚙️ Functional programing concepts
- 🔬 Clojure atom like state managment
- 🔥 Hot Module Replacement
- 💎 Crystal clean connection between state and UI
- ✨ Super clean webpack
- 🏮 Less ceremony, more fun!

## Local Development
1. Install dependencies and start the live programing enviroment

```
npm install
```

2. Register element name in `exo-element.config.js`

3. Run a server with HMR (Hot Module Replacement) will start at [localhost:8080](http://localhost:8080)
```
npm start
```

See more about Hot Module Replacement [here](https://webpack.github.io/docs/hot-module-replacement.html)

## Test

Run tests
```
npm test
```

Run tests with coverage output
```
npm test:coverage
```

Update test snapshots
```
npm test:update
```

## Building for Production

Create minified bundle for deployment in the `build` directory

```
npm run build
```

## Disclaimer
This is an experimental project. Use it in production with caution.

## License

Copyright (c) 2018 Exolever, Inc. Licensed under the MIT License.
