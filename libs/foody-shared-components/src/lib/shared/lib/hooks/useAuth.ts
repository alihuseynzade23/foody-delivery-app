import { apiClient } from '../../../api/api-client';
import { authStore } from '../store/auth';
import axios from 'axios';

export const useAuth = () => {
  const { isLoading, isLoggedIn, setIsLoggedIn, setIsLoading, setUser, user } = authStore();

  const handleTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('refresh_token', refreshToken);
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  };

  const logout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUser(null);
    setIsLoading(false);
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refresh_token');
      if (!refreshToken) {
        logout();
        return;
      }

      const response = await apiClient.post('/auth/refresh', {
        refreshToken,
      });

      const { accessToken, refreshToken: newRefreshToken } = response.data;
      handleTokens(accessToken, newRefreshToken);
    } catch (error) {
      console.error('Error refreshing access token:', error);
      logout();
    }
  };

  const setupInterceptors = () => {
    axios.interceptors.request.use(
      config => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    axios.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          await refreshAccessToken();
          return axios(originalRequest);
        }

        return Promise.reject(error);
      },
    );
  };

  const initialCheck = async () => {
    setIsLoggedIn(true);
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (!accessToken) {
      logout();
      setIsLoggedIn(false);
      return;
    }

    if (!user) {
      setIsLoading(true);
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await apiClient.get('/auth/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setIsLoading(false);
      }
    }
  };

  return {
    handleTokens,
    logout,
    initialCheck,
    refreshAccessToken,
    setupInterceptors,
    isLoggedIn,
    setUser,
    isLoading,
    user,
    setIsLoggedIn,
  };
};
