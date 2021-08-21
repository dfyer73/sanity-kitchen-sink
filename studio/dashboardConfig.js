export default {
  widgets: [
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
                  buildHookId: '6120cae82d8c82b4bb804f5c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-t5eur439',
                  apiId: 'f125f07c-59fc-4762-aeca-be5ecda737ed'
                },
                {
                  buildHookId: '6120cae80f70c9a223ba7efc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rkce2hei',
                  apiId: 'dcb7387d-a31f-428f-b733-5fa916d274cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dfyer73/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rkce2hei.netlify.app', category: 'apps'}
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
