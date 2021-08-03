Description
---

This app makes a single invoke call when it starts ("test"), and displays the result in the main app window. The backend will print "test" when receiving the command.

Setup
---
```npm i```

Dev (works)
---
```npm run dev```

```npm run tauri dev```

you should see "Ok: undefined" in the app window.

Release (does not work on my machine)
---
```npm run build```

```npm run tauri build```

 running the exe displays "Err: ReferenceError: __TAURI_INVOKE_KEY__ is not defined" on my machine. This is an exception thrown by invoke.
