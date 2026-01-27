# React + TS Template

### 1. Install version 18 of node

```bash
nvm install 18
echo 18 > .nvmrc
nvm use
```

### 2. Init project

```bash
npx create-react-app . --template typescript
npm i
```

### 3. Init git

```bash
git init
git branch -M main
git add .
git commit -m 'chore: initial commit'
```

### 4. Git flow

```bash
git switch -c develop
git switch -c feature/...
```

### 5. Install helper dependencies

```bash
npm i -D prettier eslint-config-prettier
```

### 6. Configure prettier

**[Link to prettier config](./.prettierrc)**

### 7. Configure exceptions for prettier

**[Link to prettier ignore](./.prettierignore)**

### 8. Configure eslint

```node
// Add this code to package.json

"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "prettier"
  ],
  "rules": {
    "no-console": "warn"
  }
}
```

### 9. Install craco for configure aliases

```bash
npm i -D @craco/craco
```

### 10. Change package.json

```node
// Change scripts in package.json

"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

### 11. Create craco.config.js

**[Link to craco config](./craco.config.js)**

### 12. Configure ts config

```node
// Add this code to tsconfig.json

"compilerOptions": {
    // ...

    /* Aliases */
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
```

### 13. Install dependencies for commit control

```bash
npm i -D husky lint-staged @commitlint/cli @commitlint/config-conventional
```

### 14. Init husky

```bash
npx husky init
```

### 15. Configure lint-staged

```node
// Add this code to package.json

"lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
```

### 16. Change pre-commit hook

```node
// Change .husky/pre-commit

npx lint-staged
```

### 17. Configure commitlint

**[Link to commitlint config](./commitlint.config.js)**

### 18. Create commit-msg hook

```node
// Create .husky/commit-msg with

npx --no -- commitlint --edit $1
```

### 19. Commit changes

```bash
git add .
git commit -m "chore: ..."
```
