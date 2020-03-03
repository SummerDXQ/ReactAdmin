const menuList = [ 
    {
        title: 'Home Page',  
        key: '/home', 
        icon: 'PieChartOutlined', 
    }, 
    {
        title: 'Product',
        key: '/products',
        icon: 'appstore', 
        children: [ 
            {
                title: 'Category Management', 
                key: '/category', 
                icon: 'bars'
            }, 
            {
                title: 'Product Management', 
                key: '/product', 
                icon: 'tool'
            }, 
        ]
    }, 
    {
        title: 'User Management', 
        key: '/user', 
        icon: 'user'
    }, 
    {
        title: 'Role Management', 
        key: '/role', 
        icon: 'safety',
    }, 
    {
        title: 'Charts', 
        key: '/charts', 
        icon: 'area-chart', 
        children: [
            {
                title: 'Bar Chart', 
                key: '/charts/bar', 
                icon: 'bar-chart'
            }, 
            {
                title: 'Line Chart', 
                key: '/charts/line', 
                icon: 'line-chart'
            }, 
            {
                title: 'Pie Chart',
                key: '/charts/pie', 
                icon: 'pie-chart'
            }, 
        ]
        }, 
    ]
export default menuList