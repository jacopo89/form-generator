// @ts-ignore
import { createRoot } from 'react-dom/client';
import App from "./App";
// @ts-ignore
const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);
