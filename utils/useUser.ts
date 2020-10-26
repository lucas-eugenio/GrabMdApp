import { useEffect, useState } from 'react';
import useStorage from './useStorage';

const USER_KEY = 'USER_KEY';

export interface User {
  token: string;
  type: 'Doctor' | 'Company' | 'Manager';
}

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const { save, load, erase } = useStorage();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    load(USER_KEY)
      .then((userString) => {
        const user = userString && JSON.parse(userString);
        setUser(user);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  };

  const saveUser = (user: User) => {
    setUser(user);
    save(JSON.stringify(user), USER_KEY);
  };

  const logout = () => {
    setUser(null);
    erase(USER_KEY);
  };

  return { user, loading, saveUser, logout };
};

export default useUser;
