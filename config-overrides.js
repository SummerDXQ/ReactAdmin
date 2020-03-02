const {override, fixBabelImports,addLessLoader} = require('customize-cra');

module.exports = override( 
    // 按需打包
    fixBabelImports('import', {
        libraryName: 'antd', 
        libraryDirectory: 'es', 
        style: true,
    }), 
    // 自定义主题，使用less-loader去覆盖源码中的变量
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#1DA57A'},
    }),
    );