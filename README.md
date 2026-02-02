# 🎨 Flood It - Color Puzzle Game

A strategic color puzzle game built as a Base Mini App for Farcaster. Fill the entire board with a single color within the move limit!

## 🎮 Game Features

- **Three Difficulty Levels**: Easy (12×12), Medium (18×18), Hard (24×24)
- **Mobile-First Design**: Optimized for touch and swipe gestures
- **Smooth Animations**: Built with Framer Motion for 60 FPS gameplay
- **Haptic Feedback**: Vibration feedback for moves and wins
- **Progress Tracking**: Real-time progress bar and move counter
- **Social Sharing**: Share your scores on Farcaster

## 🚀 Quick Start

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to play the game.

## 📱 Base Mini App Integration

This game is configured as a Base Mini App for Farcaster. To deploy:

1. **Deploy to Vercel**:
   ```bash
   vercel --prod
   ```

2. **Update manifest**: Replace `your-deployed-url.vercel.app` in `public/.well-known/farcaster.json` with your actual Vercel URL.

3. **Add account association**:
   - Visit [Base Build Account Tool](https://www.base.dev/preview?tab=account)
   - Paste your domain
   - Copy the `accountAssociation` object to the manifest

4. **Submit to Base Directory**: Fill out the submission form after testing.

## 🎯 How to Play

1. **Goal**: Fill the entire board with a single color
2. **Controls**: Tap or swipe to select colors
3. **Strategy**: Choose colors that maximize your expansion
4. **Win Condition**: Complete the board within the move limit

### Difficulty Levels

- **Easy**: 12×12 grid, 22 moves
- **Medium**: 18×18 grid, 30 moves
- **Hard**: 24×24 grid, 38 moves

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Platform**: Base Mini App / Farcaster

## 📁 Project Structure

```
flood-it-game/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main game page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── game/             # Game-specific components
│   └── ui/               # Reusable UI components
├── lib/                   # Core logic
│   ├── game/             # Game logic & algorithms
│   ├── hooks/            # Custom React hooks
│   └── utils/            # Utility functions
├── types/                 # TypeScript types
└── public/               # Static assets
    └── .well-known/      # Base mini app manifest
```

## 🎨 Customization

### Colors

Edit color palette in `lib/game/gameConfig.ts`:

```typescript
export const COLOR_PALETTE = [
  '#EF4444', // Red
  '#3B82F6', // Blue
  // ... add more colors
];
```

### Difficulty

Adjust grid sizes and move limits in `lib/game/gameConfig.ts`:

```typescript
export const GAME_CONFIGS = {
  easy: { gridSize: 12, maxMoves: 22, colorCount: 6 },
  // ... modify as needed
};
```

## 📝 License

MIT License - feel free to use this project as a template for your own Base Mini Apps!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🎯 Resources

- [Base Mini Apps Documentation](https://docs.base.org/mini-apps/)
- [MiniKit Documentation](https://docs.base.org/builderkits/minikit/)
- [Farcaster Mini App Guidelines](https://docs.base.org/mini-apps/featured-guidelines/)

---

Built with ❤️ for Base Mini Apps
