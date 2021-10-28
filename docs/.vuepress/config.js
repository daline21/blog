module.exports = {
    title: '萌王的个人博客',  //标题
    keywords: 'Java开发',
    description: 'Java开发 萌王的个人博客',
    repo: 'https://github.com/daline21/blog.git',  //仓库地址
    base: '/blog/',  // 配合部署项目
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated',
    themeConfig: {  //主题配置
        logo: '/img/logo.png',
        nav: [  //导航栏
            { text: '首页', link: '/' },
            { text: 'Java', link: '/java_docs/' },
            { text: 'Spring', link: '/spring_docs/' },
            { text: '环境部署', link: '/env_docs/' },
            { text: '算法题', link: '/algorithm_docs/' },
            {
                text: '2020',
                ariLabel: '2020',
                items: [  //多级导航栏
                    { text: 'May', link: '/2020/5/' },
                    { text: 'June', link: '/2020/6/' }
                ]
            },
            { text: 'github', link: 'https://github.com/daline21/blog.git' }
        ],
        sidebar: {  //侧边拦
            '/2021/': [
                ['/2020/5/', '5月份'],
                ['/2020/6/', '6月份']
            ]
        }
    }
}
