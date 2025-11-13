# MyCampusDeals

A digital marketplace platform exclusively for campus students to buy and sell items, services, and more within their university community.

## Features

### User Management
- Campus email authentication (.edu required)
- User profiles with department, year, and contact info
- Profile customization with bio and phone number

### Marketplace
- Browse listings with search and advanced filters
- Category-based organization (Books, Electronics, Furniture, etc.)
- Filter by condition, price, and sort options
- Detailed listing pages with image galleries
- Favorites system to save interesting items

### Listings Management
- Create listings with multiple images
- Set price, condition, location, and category
- Edit and delete your own listings
- Mark items as sold, reserved, or available
- View count tracking

### Communication
- Real-time messaging system
- Direct chat between buyers and sellers
- Message notifications and read status
- Conversation history

### Safety Features
- Campus-only access verification
- Reporting system for suspicious listings
- Admin moderation dashboard
- User reputation through verified campus emails

### Admin Dashboard
- View platform statistics
- Review and moderate reports
- Remove inappropriate listings
- Manage user safety

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Icons**: Lucide React

## Getting Started

1. Sign up with your campus email address (.edu domain)
2. Complete your profile with department and year
3. Browse listings or create your first listing
4. Message sellers to negotiate deals
5. Save favorites and manage your listings

## Security

- Row Level Security (RLS) enforced on all database tables
- Campus email verification required
- Secure authentication with Supabase
- Admin-only access to moderation tools
- Report system for community safety

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AuthModal.tsx
│   ├── CreateListing.tsx
│   ├── ListingCard.tsx
│   ├── ListingDetail.tsx
│   └── Navbar.tsx
├── contexts/           # React contexts
│   └── AuthContext.tsx
├── lib/               # Utilities and configs
│   ├── supabase.ts
│   └── database.types.ts
├── pages/             # Main page components
│   ├── AdminPage.tsx
│   ├── FavoritesPage.tsx
│   ├── HomePage.tsx
│   ├── MessagesPage.tsx
│   ├── MyListingsPage.tsx
│   └── ProfilePage.tsx
└── App.tsx            # Main application component
```

## Database Schema

- **profiles**: Extended user information
- **categories**: Product/service categories
- **listings**: Items for sale
- **conversations**: Chat threads
- **messages**: Individual messages
- **reports**: User safety reports
- **favorites**: Saved listings

## Development

Built with modern web technologies and best practices:
- TypeScript for type safety
- Responsive design for all devices
- Real-time updates for messaging
- Optimized performance with Vite
- Secure authentication flow
