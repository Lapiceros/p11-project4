import './app.css'
import App from './App.svelte'
import Header from './components/Header.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app

const header = new Header({
  target: document.getElementById('svelte_container')
});

