import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { CreateListing } from './components/CreateListing';
import { HomePage } from './pages/HomePage';
import { MessagesPage } from './pages/MessagesPage';
import { ProfilePage } from './pages/ProfilePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { MyListingsPage } from './pages/MyListingsPage';
import { AdminPage } from './pages/AdminPage';

function AppContent() {
  const { loading } = useAuth();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'signin' | 'signup'>('signin');
  const [createListingOpen, setCreateListingOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [messageParams, setMessageParams] = useState<{
    listingId?: string;
    sellerId?: string;
  }>({});

  const handleOpenAuth = (mode: 'signin' | 'signup') => {
    setAuthModalMode(mode);
    setAuthModalOpen(true);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setMessageParams({});

    if (page === 'create-listing') {
      setCreateListingOpen(true);
      setCurrentPage('home');
    }
  };

  const handleNavigateToMessages = (listingId: string, sellerId: string) => {
    setMessageParams({ listingId, sellerId });
    setCurrentPage('messages');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading MyCampusDeals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onOpenAuth={handleOpenAuth}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {currentPage === 'home' && (
        <HomePage onNavigateToMessages={handleNavigateToMessages} />
      )}
      {currentPage === 'messages' && (
        <MessagesPage
          initialListingId={messageParams.listingId}
          initialSellerId={messageParams.sellerId}
        />
      )}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'favorites' && (
        <FavoritesPage onNavigateToMessages={handleNavigateToMessages} />
      )}
      {currentPage === 'my-listings' && <MyListingsPage />}
      {currentPage === 'admin' && <AdminPage />}

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authModalMode}
      />

      {createListingOpen && (
        <CreateListing
          onClose={() => setCreateListingOpen(false)}
          onSuccess={() => {
            setCreateListingOpen(false);
            handleNavigate('my-listings');
          }}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
