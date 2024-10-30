import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TabMonitor } from './components/TabMonitor';
import { Music } from 'lucide-react';
import { useAuthStore } from './store/authStore';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <nav className="bg-indigo-600 text-white p-4">
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Music size={24} />
                <span className="text-xl font-bold">Music Exam Platform</span>
              </div>
              <UserMenu />
            </div>
          </nav>
          
          <main className="container mx-auto py-8 px-4">
            <TabMonitor />
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard/*" element={
                <ProtectedRoute>
                  <DashboardRoutes />
                </ProtectedRoute>
              } />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthStore((state) => state.user);
  if (!user) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const UserMenu = () => {
  const { user, logout } = useAuthStore();
  
  if (!user) return null;
  
  return (
    <div className="flex items-center space-x-4">
      <span>{user.name}</span>
      <button
        onClick={logout}
        className="px-4 py-2 bg-indigo-700 rounded hover:bg-indigo-800"
      >
        Logout
      </button>
    </div>
  );
};

export default App;