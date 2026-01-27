# React + TS Template

### 1. Init project

```bash
npm create vite@latest . -- --template react-ts
npm i
```

### 2. Init git

```bash
git init
git branch -M main
git add .
git commit -m 'chore: initial commit'
```

### 3. Git flow

```bash
git switch -c develop
git switch -c feature/...
```

### 4. Install helper dependencies

```bash
npm i -D prettier eslint-config-prettier eslint-plugin-react
```

### 5. Configure prettier

**[Link to prettier config](./.prettierrc)**

### 6. Configure exceptions for prettier

**[Link to prettier ignore](./.prettierignore)**

### 7. Configure eslint

**[Link to eslint config](./eslint.config.js)**

### 8. Configure vite config

```node
// Add this code to vite.config.ts
import path from 'path'

export default defineConfig({
  // ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})
```

### 9. Configure ts config

```node
// Add this code to tsconfig.app.json

"compilerOptions": {
    // ...

    /* Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

### 10. Install dependencies for commit control

```bash
npm i -D husky lint-staged @commitlint/cli @commitlint/config-conventional
```

### 11. Init husky

```bash
npx husky init
```

### 12. Configure lint-staged

```node
// Add this code to package.json

"lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
```

### 13. Change pre-commit hook

```node
// Change .husky/pre-commit

npx lint-staged
```

### 14. Configure commitlint

**[Link to commitlint config](./commitlint.config.js)**

### 15. Create commit-msg hook

```node
// Create .husky/commit-msg with

npx --no -- commitlint --edit $1
```

### 16. Commit changes

```bash
git add .
git commit -m "chore: ..."
```
