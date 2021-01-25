module.exports = {
  siteTitle: 'ONODA',
  siteDescription: `My online curriculum`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Onoda Yoshiaki',
  twitterUsername: '',
  githubUsername: 'GangDuo',
  authorAvatar: '/images/avatar.png',
  authorDescription: `Developer, passionate about what I do. Always interested in how the sites were made, I started to study HTML by hobby. <br />
    In 2012 I started working as a support technician and I approached the developers.
    In 2015, I started to study C # and started to contribute with the team giving maintenance in an application in C # and .NET. <br />
    I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
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
