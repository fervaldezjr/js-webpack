import { router } from "./router/index.router.js";
import './second.css';

window.addEventListener('hashchange', () => {
    router(window.location.hash)
});