import { counter } from './asyncImport';
console.log('Hello from webpack!');
console.log(counter());
// Simple example
const element = document.createElement('div');
element.innerHTML = '<h1>Webpack 4 Project</h1><p>This is a basic webpack 4.47.x setup.</p>';
document.body.appendChild(element);

// CSS import
// import './styles.css';