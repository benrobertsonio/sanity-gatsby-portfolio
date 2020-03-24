export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7a1dcebabcb3667310b99e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g6xbeetn',
                  apiId: '18b2ff08-631f-43a1-bfc3-1582a78d26b6'
                },
                {
                  buildHookId: '5e7a1dce8081826e3e6ffca4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nk834ass',
                  apiId: 'c02d6183-f229-471d-8492-e861e4da420b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benrobertsonio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nk834ass.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
