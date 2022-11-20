import { RootState } from '../../store/types';
import { $FetchOptions } from './types';

export const getFetchWithAuth = (state: RootState) => {
    // const authToken = state?.user?.token || 'test';
  
    // if (!authToken) {
    //   throw new Error('no auth token');
    // }
  
    return (url: string, options: $FetchOptions): Promise<Response> => fetch(url, {
      ...options,
      headers: {
        // authorization: `Bearer ${authToken}`,
        ...options.headers,
      },
    });
  };