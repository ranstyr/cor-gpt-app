# COR GPT - AI Chat Assistant

A modern, full-stack AI chat application built with Next.js, Firebase, and ChatGPT integration.

![COR GPT Logo](public/logo.svg)

## 🚀 Features

- **🔐 Firebase Authentication** - Secure user registration and login
- **🤖 ChatGPT Plugin Integration** - Embedded AI chat interface
- **📱 Responsive Design** - Works on all devices
- **🌙 Dark Mode Support** - Modern UI with dark/light themes
- **⚡ Real-time Status** - Live Firebase connection monitoring
- **🛡️ Protected Routes** - Secure access control

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Authentication**: Firebase Auth
- **Database**: Firestore (ready for chat history)
- **Storage**: Firebase Storage
- **Analytics**: Firebase Analytics
- **AI Integration**: ChatGPT Plugin Embed

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase project with Authentication enabled

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cor-gpt-app.git
cd cor-gpt-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication with Email/Password provider
3. Copy your Firebase config to `src/lib/firebase.ts`

### 4. Environment Variables

Create a `.env.local` file (optional for development):

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
cor-gpt-app/
├── public/
│   └── logo.svg              # COR GPT logo
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with AuthProvider
│   │   └── page.tsx          # Main page with ProtectedRoute
│   ├── components/
│   │   ├── AuthForm.tsx      # Login/signup form
│   │   ├── ChatGPTEmbed.tsx  # ChatGPT plugin embed
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   ├── FirebaseStatus.tsx # Firebase connection status
│   │   ├── LoadingSpinner.tsx # Loading component
│   │   └── ProtectedRoute.tsx # Route protection
│   ├── contexts/
│   │   └── AuthContext.tsx   # Authentication context
│   └── lib/
│       └── firebase.ts       # Firebase configuration
├── package.json
└── README.md
```

## 🔧 Configuration

### Firebase Setup

1. **Authentication**: Enable Email/Password sign-in method
2. **Firestore**: Set up database rules for chat history
3. **Storage**: Configure storage rules for file uploads
4. **Analytics**: Enable for usage tracking

### ChatGPT Plugin

The app embeds the ChatGPT plugin at:
```
https://chatgpt.com/g/g-6888eb78e6dc819198841eed4e39c258-cor-chat-gpt
```

## 🎨 Customization

### Logo
Replace `public/logo.svg` with your custom logo.

### Styling
Modify Tailwind classes in components for custom styling.

### ChatGPT Plugin
Update the plugin URL in `src/components/ChatGPTEmbed.tsx`.

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

- Firebase Authentication for user management
- Protected routes prevent unauthorized access
- Secure iframe embedding for ChatGPT plugin
- Environment variables for sensitive data

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Firebase](https://firebase.google.com/) for backend services
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [OpenAI](https://openai.com/) for ChatGPT integration

## 📞 Support

For support, email support@cor-gpt.com or create an issue in this repository.

---

**Built with ❤️ by the COR GPT Team**
