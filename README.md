# Scribesent

> **⚠️ Work in Progress** - This project is currently under active development. Many features are not yet implemented and the codebase is subject to significant changes.

**Never miss a YouTube video again** - Get AI-powered summaries of your favorite YouTube channels delivered straight to your inbox.

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Overview

Scribesent is an open-source platform that automatically monitors YouTube channels, transcribes new videos, generates AI-powered summaries, and delivers them via email. Perfect for content professionals, learning enthusiasts, and busy executives who want to stay updated without watching every video.

### Key Features

#### Channel Management
- **Multi-Channel Tracking** - Monitor up to 10 YouTube channels per user
- **Flexible Configuration** - Set different preferences for each channel
- **Test Functionality** - Immediately test latest video when adding new channels
- **Smart Monitoring** - Automatic RSS feed polling every 5 minutes
- **Duplicate Detection** - Avoid processing the same video multiple times

#### AI-Powered Processing
- **Automatic Transcription** - Extract transcripts using youtube-transcript
- **Intelligent Summarization** - Generate summaries with Gemini API
- **Multiple Formats** - Choose from Standard, Detailed, or Executive summaries
- **Style Options** - Professional, Conversational, Academic, or Bullet Points
- **Multi-Language Support** - Process videos in multiple languages

#### Email & Notifications
- **Automated Delivery** - Receive summaries via Brevo email service
- **Custom Recipients** - Set different email addresses per channel
- **HTML Formatting** - Beautiful, readable email templates
- **High Delivery Rate** - 95%+ email delivery reliability

#### Dashboard & Access
- **Web Interface** - Manage all channels through intuitive dashboard
- **Transcript Storage** - Access full transcripts for 30 days
- **Search Functionality** - Find specific content in transcript history
- **Google OAuth** - Secure authentication via Supabase
- **Account Management** - Full control over preferences and data

#### Self-Hosted Solution
- **Complete Control** - Deploy and manage your own instance
- **Privacy Focused** - Your data stays on your infrastructure
- **Scalable Architecture** - Support 100+ users with room to grow
- **Open Source** - Transparent, community-driven development

## Tech Stack

- **Frontend & Backend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with Neo-Brutalism design system
- **UI Components**: Radix UI primitives with shadcn/ui components from [neobrutalism.dev](https://neobrutalism.dev/)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Authentication**: Supabase Auth with Google OAuth
- **Database**: Supabase (PostgreSQL) with Row Level Security (RLS)
- **AI Integration**: Gemini API (Gemini 2.5 Flash-Lite)
- **Email Service**: Brevo API
- **Transcription**: youtube-transcript npm package
- **Monitoring**: YouTube RSS feed polling with Node.js (axios, xml2js, fs)
- **Deployment**: Vercel (full-stack deployment)

## System Flow

Scribesent follows this automated workflow:

1. **User Authentication**: Users log in with Google OAuth via Supabase Auth
2. **Channel Management**: Users add YouTube channels and configure summary preferences
3. **Background Monitoring**: System polls YouTube RSS feeds every 5 minutes for new videos
4. **Content Processing**: New videos are automatically transcribed using youtube-transcript
5. **AI Summarization**: Transcripts are processed by Gemini API with user-configured format and style
6. **Email Delivery**: Summaries are sent via Brevo API to user's configured email addresses
7. **Dashboard Updates**: Processed content appears in the user's dashboard for review

### Channel Configuration Options
- **Summary Format**: Standard/Detailed/Executive
- **Summary Style**: Professional (default)/Conversational/Academic/Bullet Points
- **Email Recipients**: Custom email addresses per channel
- **Test Feature**: Immediate processing of latest video for new channels

## Project Structure

```
scribesent/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/             # Authentication pages
│   │   │   └── login/          # Login page
│   │   ├── dashboard/          # Dashboard home
│   │   ├── channels/           # Channel management
│   │   │   ├── add/           # Add new channel
│   │   │   └── [id]/edit/     # Edit channel settings
│   │   ├── transcripts/        # Transcript viewer
│   │   ├── settings/           # User settings
│   │   ├── api/               # API routes
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── auth-provider.tsx  # Authentication context
│   │   ├── dashboard-layout.tsx # Dashboard layout
│   │   ├── navbar.tsx         # Navigation component
│   │   └── hero-section.tsx   # Landing page hero
│   ├── hooks/                # Custom React hooks
│   └── lib/                  # Utility functions
├── public/                   # Static assets
├── .kiro/                   # Project specifications
│   └── steering/            # PRD and requirements
├── auth.ts                  # NextAuth configuration
├── middleware.ts            # Route protection
└── tailwind.config.ts       # Tailwind configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/scribesent.git
   cd scribesent
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure the following variables:
   ```env
   NEXTAUTH_SECRET=your-nextauth-secret
   NEXTAUTH_URL=http://localhost:3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   SUPABASE_URL=your-supabase-url
   SUPABASE_ANON_KEY=your-supabase-anon-key
   GEMINI_API_KEY=your-gemini-api-key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Page Structure

### Public Pages
- **Landing Page** (`/`) - Product overview, features highlight, marquee text, login CTA
- **Login Page** (`/login`) - Google OAuth login, terms of service links
- **Error Pages** (`/404`, `/500`) - Custom error handling

### Dashboard Pages (Protected)
- **Dashboard Home** (`/dashboard`) - Channel overview, recent summaries, quick stats
- **Channels Management** (`/channels`) - Channel list, add/edit/delete actions, test functionality
- **Add Channel** (`/channels/add`) - URL input, validation, preference configuration
- **Edit Channel** (`/channels/[id]/edit`) - Modify existing channel settings
- **Transcript Viewer** (`/transcripts/[videoId]`) - Full transcript display, video metadata
- **Account Settings** (`/settings`) - Profile info, connected accounts, email preferences

## Development Status

### Completed Features
- Landing page with hero section and feature highlights
- Dashboard layout with navigation and sidebar
- Channel management interface with mock data
- Responsive Neo-Brutalism design with dark/light theme support
- Authentication flow setup (mock implementation)
- Modern UI components with Framer Motion animations
- Project structure and development environment setup

### In Development
- Supabase database integration with RLS policies
- Google OAuth authentication via Supabase Auth
- YouTube RSS feed monitoring system (5-minute polling intervals)
- AI-powered summarization with Gemini API (2.5 Flash-Lite)
- Email notification system via Brevo API
- youtube-transcript integration for automatic transcription
- Channel preference configuration (format, style, recipients)
- Test functionality for immediate video processing
- Video processing (15-minute processing window)
- Advanced summary customization (Standard/Detailed/Executive formats)
- Transcript search functionality (30-day retention)
- User preference management per channel
- Performance monitoring and analytics
- Support for videos up to 4 hours in length
- Multi-language transcript support
- Smart duplicate detection
- Automatic retry mechanisms for failed jobs
- Account deletion and data export features

## Target Users

**Content Professionals**: Marketing managers, content creators, business professionals tracking industry trends and competitor content.

**Learning Enthusiasts**: Students, professionals pursuing continuous learning, researchers gathering insights from educational video content.

**Busy Executives**: C-level executives, investors, consultants who need to stay informed with extremely limited time.

## Performance Requirements

- **Scalability**: Support 100+ concurrent users initially, scaling to 1,000+ users within 12 months
- **Processing**: Handle 100+ videos per hour during peak times
- **Response Time**: Web dashboard loads within 3 seconds
- **Reliability**: 99% system uptime with automatic retry for failed jobs
- **Email Delivery**: 95%+ email delivery rate
- **Channel Monitoring**: Support up to 10 channels per user
- **Video Length**: Support videos up to 4 hours in length
- **Processing Window**: Automatic processing within 15 minutes of video upload

## Design System

Scribesent uses a **Neo-Brutalism** design approach with components from [neobrutalism.dev](https://neobrutalism.dev/):

- **Color Palette**: Blue (#0066FF) and White primary colors
- **Typography**: Inter font family for clean readability
- **Shadows**: Bold neo-brutalism shadows (4px, 6px, 8px, 12px offsets)
- **Borders**: Thick black borders (3px-6px)
- **Animations**: Smooth transitions with Framer Motion
- **Components**: Accessible Radix UI primitives with custom styling

## API Documentation

### Authentication Endpoints
- `GET /api/auth/signin` - Sign in page
- `GET /api/auth/callback/google` - Google OAuth callback
- `POST /api/auth/signout` - Sign out

### Channel Management (Planned)
- `GET /api/channels` - Get user's channels
- `POST /api/channels` - Add new channel
- `PUT /api/channels/[id]` - Update channel settings
- `DELETE /api/channels/[id]` - Remove channel
- `POST /api/channels/[id]/test` - Test channel with latest video

### Transcripts (Planned)
- `GET /api/transcripts/[videoId]` - Get video transcript
- `GET /api/transcripts/search` - Search transcripts

## Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Configure environment variables** in Vercel dashboard:
   - `NEXTAUTH_URL`: `https://your-app-name.vercel.app`
   - `NEXTAUTH_SECRET`: Generate a secure random string
   - `AUTH_GOOGLE_ID`: `dummy-google-client-id-for-development` (for demo/dev-bypass)
   - `AUTH_GOOGLE_SECRET`: `dummy-google-client-secret-for-development` (for demo/dev-bypass)
   
   **Note**: The dummy Google credentials enable the dev-bypass authentication for demo purposes. For production with real Google OAuth, replace with actual Google OAuth credentials.

3. **Deploy** - Vercel will automatically build and deploy

### Docker (Alternative)

```bash
# Build the Docker image
docker build -t scribesent .

# Run the container
docker run -p 3000:3000 scribesent
```

### Manual Deployment

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Ensure accessibility with Radix UI components
- Write meaningful commit messages

## Security & Compliance

- **Authentication**: OAuth 2.0 user authentication with Google via Supabase
- **Database Security**: Row Level Security (RLS) policies in PostgreSQL
- **Data Privacy**: GDPR and CCPA compliance with data deletion capabilities
- **Secure Infrastructure**: Hosted on Vercel with enterprise-grade security
- **API Security**: Secure API endpoints with proper authentication and authorization

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icon library

## Support

If you have any questions or need help:

- 📧 Email: support@scribesent.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/scribesent/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/scribesent/discussions)

---

**Made with ❤️ by the Scribesent Team**

*Never miss a YouTube video again!*
