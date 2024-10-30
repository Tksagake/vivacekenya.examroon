import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export const TabMonitor = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  useEffect(() => {
    if (!user || user.role !== 'student') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        logout();
        navigate('/login', { replace: true });
        alert('Session ended due to tab switch');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [user, logout, navigate]);

  return null;
};