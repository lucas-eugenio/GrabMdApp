import { useEffect, useState } from 'react';
import useStorage from './useStorage';

const TOKEN_KEY = 'TOKEN_KEY';

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const { save, load, erase } = useStorage();

  useEffect(() => {
    getToken();
  }, []);

  const getToken = () => {
    load(TOKEN_KEY)
      .then((token) => setToken(token))
      .catch(() => setToken(null))
      .finally(() => setLoading(false));
  };

  const saveToken = (token: string) => {
    setToken(token);
    save(token, TOKEN_KEY);
  };

  const resetToken = () => {
    setToken(null);
    erase(TOKEN_KEY);
  };

  return { token, loading, saveToken, resetToken };
};

export default useToken;
