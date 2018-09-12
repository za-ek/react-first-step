# Установка babel (компилятор ES) 

`npm install --save-dev babel-cli` 

`npm install babel-preset-env` 

# Запускаем компилятор

`npm run build`

# Запуск вручную
JSX &rarr; ES6
- `node node_modules/.bin/babel --presets @babel/preset-react  src -d lib`

ES6 &rarr; Native
- `npx webpack --config webpack.config.js`

Файл `/dist/main.js` - файл JS для подключения в html