# React Native Version Comparison

This project is currently on **React Native 0.59.9** (released mid-2019). The current latest stable release is **React Native 0.87.0** (released 2026-08-13). That's a gap of roughly **7 years and 28+ minor versions**.

## Summary

| Area | This project (0.59.9) | Current (0.87.0) |
|---|---|---|
| Architecture | Old Architecture (bridge-based, async JSON serialization) | New Architecture (Fabric renderer + TurboModules + JSI), now the default |
| JS Engine | JavaScriptCore | Hermes (default) |
| Native module linking | Manual linking (`react-native link`) required for many modules | Autolinking (CocoaPods + Gradle), automatic |
| React version | React 16.8.3 (hooks just released) | React 19.x |
| Navigation | `react-navigation` 3.11.0 (unmaintained, old API) | `@react-navigation` 6.x/7.x (hooks-based, native-stack) |
| Storage | `@react-native-community/async-storage` 1.6.1 (deprecated) | `@react-native-async-storage/async-storage` (current maintained package) |
| Build tooling | Older Metro config format, older Gradle/AGP, older Xcode project structure | Current Metro, current Gradle/AGP, current Xcode templates |
| Other deps | `react-native-gesture-handler` 1.x, `react-native-sound` (old) | Multiple major versions ahead; New Architecture support varies by package |

## Practical implications

- This isn't a routine `npm update`. The gap spans the transition to the **New Architecture**, so upgrading realistically means regenerating the native `android`/`ios` projects from a current React Native template and migrating each dependency (especially navigation and storage) to its modern equivalent.
- `react-navigation` 3.x and `@react-native-community/async-storage` are both deprecated/unmaintained and have no direct drop-in upgrade path — they require rewriting the navigation setup and storage calls to use current packages and APIs.
- Given the size of the jump, a staged upgrade path (e.g. 0.59 → 0.6x → 0.7x → 0.8x) is generally safer than attempting to jump directly to 0.87.

## Sources

- [react-native on npm](https://www.npmjs.com/package/react-native?activeTab=versions)
- [React Native versions](https://reactnative.dev/versions)
