# Lost & Found Website - Background Music Setup

## 🎵 Background Music Feature

Your website now includes dynamic background music that changes based on the items displayed:

- **Pleasant Music**: Plays when there are more "Found" items than "Lost" items
- **Sad Music**: Plays when there are more "Lost" items than "Found" items
- **Hopeful Music**: Plays when there's a mix of items or equal counts

## 📁 Audio Files Required

Place the following audio files in the `sounds/` directory:

### Required Files:
- `pleasant.mp3` or `pleasant.ogg` - Happy/upbeat music for found items
- `sad.mp3` or `sad.ogg` - Melancholic music for lost items

### Recommended Audio Characteristics:
- **Pleasant Music**: Upbeat, hopeful, positive melodies
- **Sad Music**: Soft, reflective, slightly melancholic tones
- **Format**: MP3 or OGG (both formats supported for browser compatibility)
- **Length**: 2-5 minutes (files will loop automatically)
- **Quality**: 128kbps MP3 is sufficient for web playback

## 🎼 Where to Find Free Music

### Free Resources:
1. **YouTube Audio Library** - Free music for creators
2. **Bensound** - Free background music (bensound.com)
3. **Free Music Archive** - Creative Commons licensed music
4. **Epidemic Sound** - Free trial available
5. **Zapsplat** - Free sound effects and music

### Suggested Search Terms:
- Pleasant: "happy acoustic", "upbeat corporate", "positive background"
- Sad: "emotional piano", "reflective ambient", "soft melancholic"

## 🔧 How It Works

1. **Automatic Detection**: Music changes based on the ratio of lost vs found items
2. **User Controls**: Floating music controls appear in the top-right corner
3. **Looping**: Music automatically loops for continuous playback
4. **Browser Policies**: Due to browser autoplay policies, users must click "Play Music" to start

## 🎮 User Experience

- Music controls appear when items are displayed
- Users can play/pause music anytime
- Music type indicator shows current mood ("Pleasant", "Reflective", etc.)
- Smooth transitions between different music types

## 📝 File Naming

Ensure your audio files are named exactly as follows:
```
sounds/
├── pleasant.mp3 (or pleasant.ogg)
└── sad.mp3 (or sad.ogg)
```

The website will automatically detect and play the appropriate music based on your items!