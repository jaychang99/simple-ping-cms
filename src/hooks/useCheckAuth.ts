import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { clientAxios } from 'utils/commonAxios';

export const useCheckAuth = () => {
  const router = useRouter();
  const [isAuthed, setIsAuthed] = useState(false);
  const [isAuthNeeded, setIsAuthNeeded] = useState(true);
  const isLoginPage = router.pathname === '/login';

  useEffect(() => {
    const fetchUser = async () => {
      if (isLoginPage) {
        setIsAuthNeeded(false);
        return;
      }
      try {
        await clientAxios.get('/users/me').then((response) => {
          const { data } = response;
          if (data?.isAdmin) setIsAuthed(true);
          if (!data?.isAdmin) router.push('/login');
        });
      } catch (error) {
        router.push('/login');
      }
    };
    fetchUser();
  }, [router, isLoginPage]);

  return {
    isAuthed,
    isAuthNeeded,
  };
};
