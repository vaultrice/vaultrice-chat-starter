# **🚀 Vaultrice Real-Time Chat Demo**

[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=white)](https://react.dev/)

A production-ready demonstration of real-time chat and interactive voting components powered by [Vaultrice](https://www.vaultrice.com/blog/how-to-react-chat-starter). **without building a backend**

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

## More production security

**1. Configure Your Backend for Secure Authentication**
For production security, it's preferred your `apiSecret` should not be exposed in your frontend app. The best practice is to have a simple backend endpoint that generates temporary access tokens.

Create a serverless function or API endpoint (e.g., `api/vaultrice-token.js`) with the following logic:

```javascript
// This endpoint securely uses environment variables on your server
import { retrieveAccessToken } from '@vaultrice/sdk';

export async function GET(request) {
  const accessToken = await retrieveAccessToken(
    process.env.VAULTRICE_PROJECT_ID,
    process.env.VAULTRICE_API_KEY,
    process.env.VAULTRICE_API_SECRET
  );
  return Response.json({ accessToken });
}
```

**2. Update Your Frontend Code**
Now, update your `App.tsx` to use the `getAccessToken` function. This is the most secure and convenient way to authenticate.

```tsx
// In your React component
import { ChatRoom } from '@vaultrice/react-components';

<ChatRoom
  id="team-chat-room"
  user={currentUser}
  credentials={{
    projectId: "YOUR_PROJECT_ID",
    // The SDK will call this function automatically to get tokens
    getAccessToken: async () => {
      const { accessToken } = await fetch('/api/vaultrice-token').then(r => r.json());
      return accessToken;
    }
  }}
/>
```

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

## 🤔 How is it 'No Backend'?

When we say "no backend," we mean there is **no backend for you to build, manage, scale, or operate**.

Vaultrice runs on a powerful, globally distributed, serverless infrastructure built on the Cloudflare stack. Your frontend application communicates directly and securely with our managed service. This gives you the power of a real-time backend without the operational complexity and cost.

  * **You write:** Frontend code.
  * **We manage:** The servers, databases, WebSocket connections, and scaling.

## 🌱 Business Model & Sustainability

We understand that building on a new platform requires trust. You want to be sure we'll be around for the long haul.

Vaultrice is a bootstrapped, sustainable business built for longevity. Our model is simple and transparent:

  * **Efficient by Design:** We're built on Cloudflare's highly-efficient serverless platform.
  * **Generous Free Tier:** This efficiency allows us to offer a powerful free tier that is enough for prototypes, and getting started. Our free tier is not a temporary trial.
  * **Sustainable Growth:** We are funded by our paid tiers for professional and enterprise users who need higher limits and advanced features. Our success is directly tied to the success of the developers who build on our platform.

We're here to build a foundational piece of the real-time web, and we're committed to doing it sustainably.

---

**Built with ❤️ using [Vaultrice](https://www.vaultrice.com) - The fastest way to add real-time features to your app.**
