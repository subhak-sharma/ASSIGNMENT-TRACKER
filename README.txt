
Assignment Tracker (no Auth)

- index.html: full app (UI + Firebase Firestore logic, no authentication).
- manifest.json: PWA manifest.
- sw.js: service worker for offline caching.
- icons/: simple icons.

Setup:
1. Replace firebaseConfig in index.html with your Firebase project's config.
2. In Firebase Console, enable Firestore.
3. Set Firestore rules to open access (not secure, but works for single-user personal use):

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}

4. Host files (GitHub Pages or local server: python -m http.server).
