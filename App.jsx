import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = () => {
    if (email === 'eduardo.lino@pucpr.br' && senha === '123456') {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Login</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '250px' }}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '6px', fontSize: '14px' }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{ padding: '6px', fontSize: '14px' }}
        />

        <button
          onClick={handleLogin}
          style={{
            alignSelf: 'flex-start',
            padding: '4px 12px',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Acessar
        </button>
      </div>

      {mensagem && (
        <p style={{ marginTop: '20px', fontSize: '18px', fontWeight: 'bold' }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default App;