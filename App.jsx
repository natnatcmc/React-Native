import './App.css'
import Botao from './assets/components/botao';
import GolTentativa from './assets/components/If';
import Reportagem from './assets/components/Reportagem';


function App() {
    return (
     <> <h1>Boa noite!!!!!!</h1>
     <button><a href="https://www.google.com/search?sca_esv=7a0d69bc844fe58c&sca_upv=1&q=pinta+cancerigena&udm=2&fbs=AEQNm0AuaLfhdrtx2b9ODfK0pnmi046uB92frSWoVskpBryHTrdWqiVbaH6EqK0Fq9hkAkqRDuhGs7UQnPtZiL0Bzcj78aaFR2vnR4DfQyahVzxKNVahghfRWcP18tIQDI-SEd9Equ5g0GYsIG8jai2_zN8y16CRuLHNs28Ydr3E9AarJg4DUYUsqKibma7jzI96q7Qwb-v6RNSYne1ZlQPcwLjO_sXAfA&sa=X&sqi=2&ved=2ahUKEwjZ07mXldCIAxUtq5UCHbdvHowQtKgLegQIDRAB&biw=1366&bih=641&dpr=1" target='_
     blank'>NÃO CLICA! </a>
     </button>

        <Botao/>
        <GolTentativa eGol={true}/>
        <Reportagem />
    </>

    )
}


export default App
