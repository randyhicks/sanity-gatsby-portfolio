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
                  buildHookId: '6347730b3f81bc36a756aa51',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3r94cihu',
                  apiId: '5c24867a-32b9-4218-b23c-078ba329405c'
                },
                {
                  buildHookId: '6347730b879b6a36afef7bc1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kxg5z7wf',
                  apiId: '930c8033-6112-42ec-8526-2997458d3b31'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/randyhicks/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kxg5z7wf.netlify.app',
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
