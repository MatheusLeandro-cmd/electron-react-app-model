import React, { useState, useRef } from 'react';
import dado1 from '../../images/dado1.svg';
import dado2 from '../../images/dado2.svg';
import dado3 from '../../images/dado3.svg';
import dado4 from '../../images/dado4.svg';
import dado5 from '../../images/dado5.svg';
import dado6 from '../../images/dado6.svg';

import './Dices.css';

function Dices() {
  const [result, setResult] = useState('Clique no botao abaixo para iniciar');
  const [history, setHistory] = useState([]);

  const user1 = useRef(null);
  const user2 = useRef(null);
  const resultDice = useRef(null);
  const titleHistoryResult = useRef(null);

  let diceImages = [dado1, dado2, dado3, dado4, dado5, dado6];

  const roll = () => {
    const firstRandomNum = Math.floor(Math.random() * 6);
    const secondRandomNum = Math.floor(Math.random() * 6);

    if (firstRandomNum > secondRandomNum) {
      setResult(`O Vencedor foi o jogador 1 com ${firstRandomNum + 1} pontos`);
      setHistory([
        ...history,
        {
          id: history.length,
          value: `O jogador 1 venceu com ${firstRandomNum + 1} pontos`,
        },
      ]);
    } else if (firstRandomNum < secondRandomNum) {
      setResult(`O Vencedor foi o jogador 2 com ${secondRandomNum + 1} pontos`);
      setHistory([
        ...history,
        {
          id: history.length,
          value: `O jogador 2 venceu com ${secondRandomNum + 1} pontos`,
        },
      ]);
    } else {
      setResult('Deu empate!');
      setHistory([
        ...history,
        {
          id: history.length,
          value: `Deu empate! Ambos jogadores ficaram com ${firstRandomNum + 1} pontos`,
        },
      ]);
    }
    user1.current.src = diceImages[firstRandomNum];
    user2.current.src = diceImages[secondRandomNum];
  };

  const reset = () => {
    setHistory([]);
  };

  return (
    <>
      <div className='dice-wrapper'>
        <div className='dice-area'>
          <p>Jogador 1</p>
          <img src={dado1} ref={user1} alt='Dice' />
        </div>
        <div className='dice-area'>
          <p>Jogador 2</p>
          <img src={dado1} ref={user2} alt='Dice' />
        </div>
      </div>
      <p className='result' ref={resultDice}>
        {result}
      </p>
      <button className='btn' onClick={roll}>
        Rolar os dados
      </button>
      <button className='btn reset' onClick={reset}>
        Limpar
      </button>
      <h2 ref={titleHistoryResult}>Historico</h2>
      <ul>
        {history.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}

export default Dices;