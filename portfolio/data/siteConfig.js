module.exports = {
  siteTitle: 'ONODA',
  siteDescription: `My online curriculum`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Onoda Yoshiaki',
  twitterUsername: '',
  githubUsername: 'GangDuo',
  authorAvatar: '/images/avatar.png',
  authorDescription: `私は最初に勤めた会社の研修で、C言語の勉強を始め、組み込みソフトウェア開発者としてデビューしました。
    2006年に私はWebサイトに興味を持ちHTML、CSS、JavaScriptを使って、ECサイトを構築しました。
    2009年に私はC#の学習を開始し、.NETアプリケーションを開発し、設立して間もない企業のシステム構築に貢献しました。
    現在の私は主にJavaScript、Node.js、Reactを使用したアプリケーションの開発をしています。`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'C#',
      level: 50
    },
    {
      name: 'C',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'MySQL',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "HUMPTYDUMPTY",
      begin: {
        month: '12',
        year: '2012'
      },
      duration: null,
      occupation: "Fullstack developer",
      description: "私は小売チェーン店の本社業務効率化アプリケーションの企画・開発・保守を担当し、ソフトウェアで退屈な時間から人類を解放し、私達の生活を進歩させます。"

    },  {
      company: "Logiway",
      begin: {
        month: '10',
        year: '2009'
      },
      duration: '7 ヶ月',
      occupation: "Fullstack developer",
      description: "私は物流センター管理システムの個人向け配送サービスの企画・開発・保守を担当しました。"

    }, {
      company: "Yokoyama",
      begin: {
        month: '8',
        year: '2006'
      },
      duration: '3 年 1 ヶ月',
      occupation: "Fullstack developer",
      description: "複数の美容・健康ECサイトの構築。受注管理システムの企画、複数サイトの商品一元管理システムの企画・開発・保守を担当しました。"
    }, {
      company: "computron",
      begin: {
        month: '4',
        year: '2003'
      },
      duration: '3 年 4 ヶ月',
      occupation: "Embedded software developer",
      description: "通信デバイスのテスターと開発・保守を担当しました。"

    },
  ],
  portifolio: [
    {
      image: "/images/chain-store-growth.png",
      description: "ドミナント出店アニメーション",
      url: "https://github.com/GangDuo/chain-store-growth"
    },
    {
      image: "/images/envelope-craftsman-js.png",
      description: "カスタムロゴ封筒型紙",
      url: "https://github.com/GangDuo/envelope-craftsman-js"
    },
    {
      image: "/images/envelope-craftsman-js.png",
      description: "送り状印刷",
      url: "https://github.com/GangDuo/tag-for-tamago-js"
    },
    {
      image: "/images/envelope-craftsman-js.png",
      description: "Excel結合",
      url: "https://github.com/gangduo/union-worksheet/"
    },
    {
      image: "/images/envelope-craftsman-js.png",
      description: "Excelオブジェクトの画像変換",
      url: "https://github.com/GangDuo/excel-addin-shape-to-image"
    },
    {
      image: "/images/excel-addin-barcode-gen.png",
      description: "Excelバーコード一括生成",
      url: "https://github.com/GangDuo/excel-addin-barcode-gen"
    },
    {
      image: "/images/excel-addin-barcode-gen.png",
      description: "Rデータ分析",
      url: "https://github.com/GangDuo/goat"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/yoshiaki-onoda",
    github: "https://github.com/GangDuo",
    email: ""
  },
  siteUrl: 'https://gangduo.github.io/',
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-73379983-2',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}
