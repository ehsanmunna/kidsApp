# Kids Lesson

A React Native mobile app that teaches young children basic math and number concepts through interactive levels, exercises, and quizzes.

## Features

- **Character selection** — kids pick a player avatar (Superman, Iron Man, Spider-Man, Batman) before starting, each with its own tracked score.
- **Multiple learning levels** — nine progressive levels (`LavelOne` – `LavelNine`) covering counting, comparisons, and number matching.
- **Interactive question types** — matching questions, number matching, comparison questions, and math exercises, built from reusable components.
- **Practice exercises** — dedicated screens for counting (`ExecNumber`), addition (`ExecSum`), and subtraction (`ExecSub`).
- **Score tracking** — right/wrong answers are tracked per player and synced with a remote scoring API, with local persistence via `AsyncStorage`.
- **Sound feedback** — audio cues via `react-native-sound`.

## Tech Stack

- [React Native](https://reactnative.dev/) 0.59
- [React Navigation](https://reactnavigation.org/) (stack navigator) 3.x
- [Axios](https://axios-http.com/) for API calls
- [@react-native-community/async-storage](https://github.com/react-native-async-storage/async-storage) for local storage
- [Jest](https://jestjs.io/) for testing

## Project Structure

```
App.js                  App entry, defines the stack navigator and routes
index.js                RN app registration
src/
  Components/           Reusable UI components (buttons, question types, headlines)
  Pages/                Screens: HomeScreen, UserScreen, level screens, exercise screens
  Services/             Data service, sound, ratio/scaling, text/title helpers
  css/                  Shared style definitions (colors, layout, text, buttons)
  image/                Static image assets used across screens
android/                Native Android project
ios/                    Native iOS project
__tests__/              Jest test files
```

## Getting Started

### Prerequisites

- Node.js and npm
- A configured React Native development environment ([React Native environment setup guide](https://reactnative.dev/docs/environment-setup)) for Android and/or iOS

### Install dependencies

```sh
npm install
```

### Run the app

Start the Metro bundler:

```sh
npm start
```

Then, in a separate terminal, run the app on your platform of choice:

```sh
npx react-native run-android
# or
npx react-native run-ios
```

### Run tests

```sh
npm test
```

## Notes

- The app currently points to a hardcoded remote scoring API endpoint for reading/writing player scores; update the URLs in `src/Pages/UserScreen.js` and `src/Pages/HomeScreen.js` if pointing to a different backend.
