import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { RouterProvider } from 'react-router-dom';
import router from '../src/router';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 0, refetchOnWindowFocus: false },
  },
});
function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
