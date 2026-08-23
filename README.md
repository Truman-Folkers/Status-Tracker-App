# StatusTracker

A simple daily habit tracker built with Expo. Each day, rate a set of habits (Bible Reading, Health, Homework, Gym, etc.) on a scale of 1–3 and submit your log for the day.

## How it works

- The home screen shows one card per habit, grouped by name, with a date header for today.
- Tap a rating (1, 2, or 3) on a card to stage a value for that habit; tap it again to clear it.
- Pressing **send today's log** submits all staged ratings in parallel to the backend and shows a success/error toast.
- After a successful submit, the cards reset so you're ready for tomorrow.

## Tech stack

- [Expo](https://docs.expo.dev/versions/v57.0.0/) (SDK 57) with [expo-router](https://docs.expo.dev/router/introduction) for file-based routing
- React Native 0.86 / React 19
- TypeScript
- `react-native-toast-message` for submit feedback
- Web build deployed to Vercel (see `vercel.json`)

## Project structure

```
src/
  app/            # expo-router screens (index, layout, not-found)
  components/     # Card, Button
  constants/      # color palette
  api/            # backend API calls (fetch/create statuses)
```

The app talks to a small external backend (`BACKEND_URL` in `src/api/post-statuses.ts`) exposing `GET/POST /api/statuses`.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

   Or run a specific platform directly:

   ```bash
   npm run ios
   npm run android
   npm run web
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Scripts

| Command | Description |
| --- | --- |
| `npm run start` | Start the Expo dev server |
| `npm run ios` / `android` / `web` | Start for a specific platform |
| `npm run lint` | Run `expo lint` |
| `npm run vercel-build` | Export the static web build (used by Vercel) |
| `npm run reset-project` | Move starter code aside and reset `app/` to a blank slate |

## Deployment

The web build is exported statically (`expo export -p web`) and deployed on Vercel, with `vercel.json` rewriting all routes to `index.html` for client-side routing.
