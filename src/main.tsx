import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(<App />)

// l'operatore ! in TS si chiama "non-null assertion operator", ha lo scopo di confermare
// a TS che, anche in caso di dubbio, l'affermazione desiderata NON produrrà null (o undefined).
