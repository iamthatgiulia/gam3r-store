module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [['module:react-native-dotenv']],
    }
}
// Arquivo de configuração do projeto
// Esse plugin é uma referência ao arquivo do .env