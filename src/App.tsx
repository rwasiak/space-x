import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import axios from 'axios';
import { Homepage, LatestFlight, PageNotFound } from './pages';

const queryClient = new QueryClient();
axios.defaults.baseURL = 'https://api.spacexdata.com/v4';

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/latest-flight" element={<LatestFlight />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
