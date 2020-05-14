const path = require('path');

module.exports = {
    serviceWorker: true,
    title: 'Vue Interface',
    description: 'A collection of standalone UI components built for Vue.',
    plugins: [
        ['vuepress-plugin-template-constants', {
            pkg: require(path.resolve('package.json'))
        }]
    ],
    themeConfig: {
        sidebar: 'auto',
        footer: "Ⓒ Active Engagement, LLC"
    }
};