export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fdcc4c6204a0d067c7e6e0f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-i6s3kohy',
                  apiId: '3817d953-f1ea-4f05-adb2-063e07ecbb1e'
                },
                {
                  buildHookId: '5fdcc4c6e68a1121aef3cf5d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-zaikjeqo',
                  apiId: '50248f43-2753-4b57-8fd3-f28d1acdd056'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bookbysru/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-zaikjeqo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
