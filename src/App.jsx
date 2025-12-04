import { useState, useEffect } from "react";

function App() {
  const [backendMessage, setBackendMessage] = useState("A ligar ao backend...");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE_URL + "/")
      .then((res) => res.json())
      .then((data) => setBackendMessage(data.message))
      .catch(() => setBackendMessage("Backend offline"));
  }, []);

  return (
    <div>
      <h1>AgroVenda — Versão Teste</h1>
      <p>Status do backend: {backendMessage}</p>
    </div>
  );
}

export default App;
