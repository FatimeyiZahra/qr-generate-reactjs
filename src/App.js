import React, { createContext, useState } from "react";
import InputForm from "./components/InputForm";
import QrCode from "./components/QrCode";
import axios from "axios"
export const InputContext = createContext();

const App = () => {
  const [inputVal, setInputVal] = useState({
    url: "",
    color: "",
  });

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: { Authorization: "Bearer e0e29170-9e80-11ec-8ef8-55375f08d076" },
  };
  const bodyParameters = {
    colorDark: inputVal.color,
    qrCategory: "url",
    text: inputVal.url,
  };
  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      );
      setResponse(res.data.url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    inputVal,
    setInputVal,
    getQrCode,
    response,
    loading,
    error,
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-24 md:pt-80 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
