# Webpack 4.47.x Frontend Project

This is a basic webpack 4.47.x setup for frontend development.

## Features

- Webpack 4.47.0
- Webpack Dev Server 3.11.3
- Babel 7 for JavaScript transpilation
- CSS loading with style-loader and css-loader
- HTML template with html-webpack-plugin
- Asset management (images, fonts) with file-loader
- Clean dist folder on each build

## Project Structure

```
├── src/
│   ├── index.js          # Entry point
│   ├── index.html        # HTML template
│   └── styles.css        # CSS styles
├── dist/                 # Built files (generated)
├── webpack.config.js     # Webpack configuration
├── .babelrc              # Babel configuration
├── package.json
└── README.md
```

## Installation

```bash
npm install
```

## Available Scripts

- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run dev` - Build for development

## Development

Run the development server:

```bash
npm start
```

The server will open automatically in your default browser.

## Building for Production

```bash
npm run build
```

Output files will be generated in the `dist` directory.

## Dependencies

- webpack: 4.47.0
- webpack-cli: 3.3.12
- webpack-dev-server: 3.11.3
- babel-loader: 8.2.5
- @babel/core: 7.15.0
- @babel/preset-env: 7.15.0
- html-webpack-plugin: 4.5.2
- clean-webpack-plugin: 3.0.0
- css-loader: 4.3.0
- style-loader: 1.3.0
- file-loader: 6.2.0
- url-loader: 4.1.1

## License

ISC