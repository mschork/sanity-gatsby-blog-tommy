export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d89f817cc997e76fe403b12',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-tommy-studio',
                  apiId: '82012ace-1ab7-4caa-8f12-30348953dd40'
                },
                {
                  buildHookId: '5d89f817a2a4846a857e79e7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-tommy',
                  apiId: '570223e6-93aa-43ad-bc84-20f4c81adb21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/sanity-gatsby-blog-tommy',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-tommy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
