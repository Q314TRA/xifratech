// All Of Your Site Conifuration

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Inicio",
    titleTemplate: `XIFRATECH`,
    description: `Analisis y arquitectura.`,
    author: `@xifratech`,
    twitterUsername: `@xifratech`,
    image: 'landing.png',
    siteUrl: 'https://xifratech.com',
    getform: ".",
    copyright: "Digital technologies. <a href='https://xifratech.com' target='_blank' rel='noopener noreferrer'>All Rights Reserved.</a>",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    },
    contact: {
      phone: '(+57) 300 485-9118',
      address: "Cra 41 #960 Poblado - Medellin Antioquia",
      email: 'contacto@xifratech.com',
      website: "https://xifratech.com",
      rating: "5",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "med-antioquia",
          "state": "Medellin",
          "address": "Cra 41 #960 Poblado - Medellin Antioquia",
          "email": "contacto@xifratech.com",
          "phone": "(+57) 300 485-9118"
        }
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "XIFRATECH",
        "short_name": "xifratech",
        "theme_color": "#FF7424",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.png",
        "icons": [
          {
            "src": "/icons/x1_4_small-72_x_72.png",
            "sizes": "72x59",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-96_x_96.png",
            "sizes": "96x79",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-128_x_128.png",
            "sizes": "128x105",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-144_x_144.png",
            "sizes": "144x118",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-152_x_152.png",
            "sizes": "152x125",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-192_x_192.png",
            "sizes": "192x158",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-384_x_384.png",
            "sizes": "384x316",
            "type": "image/png"
          },
          {
            "src": "/icons/x1_4_small-512_x_512.png",
            "sizes": "512x421",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://themesmummy.com/mitech',
        sitemap: 'http://themesmummy.com/mitech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about-us/`,
          `/case-studies/`,
          `/contact-us/`,
          `/index-appointment/`,
          `/index-infotechno/`,
          `/index-processing/`,
          `/index-resolutions/`,
          `/index-services/`,
          `/it-services/`,
          `/it-solutions/`,
          `/leadership/`,
          `/it-service/*`,
          `/case-study/*`,
          `/case-study/*`,
          `/blogs/*`
        ]
      }
    }
  ]
}
