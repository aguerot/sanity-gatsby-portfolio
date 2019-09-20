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
                  buildHookId: '5d84b15e52ec0ce2c2fe3446',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ksgrv53u',
                  apiId: '1ca702b5-3192-4c68-b7b5-784c528c81b1'
                },
                {
                  buildHookId: '5d84b15e65f70721154e3f80',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-asz8adpu',
                  apiId: '2739a077-4498-49b2-b960-a90b853a2ffd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aguerot/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-asz8adpu.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
