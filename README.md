# **🚀 Vaultrice Real-Time Chat Demo**

[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=white)](https://react.dev/)

A production-ready demonstration of real-time chat and interactive voting components powered by [Vaultrice](https://www.vaultrice.com/blog/how-to-react-chat-starter). **No backend required!**

![preview](https://raw.githubusercontent.com/vaultrice/vaultrice-chat-starter/main/public/chat-starter.gif)

## ✨ **Live Features Showcase**

- 💬 **Real-Time Messaging** - Instant message delivery and synchronization
- 👥 **Live Presence Indicators** - See who's online in real-time
- ✍️ **Typing Indicators** - Know when others are composing messages
- 🗳️ **Interactive Voting** - Collect feedback with real-time poll results
- 💾 **Message Persistence** - Chat history survives page reloads
- 🎨 **Responsive Design** - Works seamlessly on desktop and mobile

## 🎯 **Perfect For**

- Learning real-time application development
- Prototyping chat features quickly
- Understanding WebSocket implementations
- Building community engagement tools
- Creating feedback collection systems

## 🚀 **Quick Start (2 minutes)**

### 1. Clone and Install
```bash
git clone https://github.com/vaultrice/vite-react-chat-starter.git
cd vite-react-chat-starter
npm install
```

### 2. Get Your Free Vaultrice Credentials
- Sign up at [vaultrice.app](https://www.vaultrice.app/register)
- Create a new project
- Copy your credentials

*like described [here](https://www.vaultrice.com/docs/quickstart)*

### 3. Configure Environment
```bash
# Rename .env.example to .env.local and add your credentials:
VITE_VAULTRICE_PROJECTID="your-project-id"
VITE_VAULTRICE_APIKEY="your-api-key"
VITE_VAULTRICE_APISECRET="your-api-secret"
```

### 4. Launch the Demo
```bash
npm start
```

**🎉 Open multiple browser tabs to see real-time features in action!**

## 🛠️ **Development Commands**

```bash
npm start        # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📚 **Key Components Demonstrated**

### [ChatRoom Component](https://github.com/vaultrice/react-components?tab=readme-ov-file#real-time-chat-room)
```tsx
<ChatRoom
  id="unique-room-id"
  user={currentUser}
  title="Your Chat Title"
  credentials={vaultriceCredentials}
  persistMessages={true}
  messageHistoryLimit={100}
/>
```

### [Voting Component](https://github.com/vaultrice/react-components?tab=readme-ov-file#basic-voting)
```tsx
<Voting
  id="unique-poll-id"
  title="Poll Question"
  choices={[
    { id: 'option1', label: 'Option 1' },
    { id: 'option2', label: 'Option 2' }
  ]}
  credentials={vaultriceCredentials}
  userId={currentUser.id}
/>
```

## 🏗️ **Architecture**

- **Frontend**: Vite + React + TypeScript
- **Real-time Backend**: Vaultrice serverless infrastructure
- **Styling**: Modern CSS with responsive design
- **State Management**: React hooks with localStorage persistence

## 🌐 **Deployment Ready**

This starter is optimized for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `npm run build` and deploy the `dist` folder.

## 📄 **License**

MIT License - feel free to use this in your own projects!

---

**Built with ❤️ using [Vaultrice](https://www.vaultrice.com) - The fastest way to add real-time features to your app.**
