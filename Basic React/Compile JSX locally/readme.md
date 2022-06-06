# Compile JSX locally

- Install a Babel compiler locally on our computer

- Use **ctrl + C** to stop babel execution

```
npm init -y   //initiate npm
npm install babel-cli@6 babel-preset-react-app@3
npx babel --watch src --out-dir . --presets react-app/prod (this process watches the src/ folder for any changes and will create preprocessed JS file and output them in the root directory)
```