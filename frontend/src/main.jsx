import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import LoadingSpinner from './components/LoadingSpinner';

// Simulate initial loading
const root = createRoot(document.getElementById('root'));

// Add artificial delay to show loading state
setTimeout(() => {
  root.render(
      <BrowserRouter>
        <Suspense fallback={<LoadingSpinner />}>
          <App />
        </Suspense>
      </BrowserRouter>
  );
}, 2500); // Shows loading state for 2 seconds

// Show initial loading state
root.render(<LoadingSpinner />);