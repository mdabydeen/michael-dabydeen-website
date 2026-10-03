import { collection, config, fields } from '@keystatic/core'

const tag = fields.object({
  tag: fields.text({
    label: 'Tag',
    validation: { isRequired: true },
  }),
})

const location = fields.object({
  city: fields.text({
    label: 'City identifier',
    description: 'Use the existing location identifier, such as toronto-on.',
    validation: { isRequired: true },
  }),
})

export default config({
  storage: {
    kind: 'github',
    repo: 'mdabydeen/michael-dabydeen-website',
    branchPrefix: 'content/',
  },
  ui: {
    brand: {
      name: 'Mike Dabydeen content',
    },
    navigation: {
      Content: ['articles'],
    },
  },
  collections: {
    articles: collection({
      label: 'Articles',
      slugField: 'title',
      path: 'content/posts/*',
      entryLayout: 'content',
      format: { contentField: 'body' },
      columns: ['title', 'date', 'description'],
      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
            validation: { isRequired: true },
          },
          slug: {
            label: 'URL slug',
            description: 'Keep this stable once an article is published.',
          },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Publication date',
          validation: { isRequired: true },
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Keep this article out of public pages, routes, and RSS until it is ready.',
          defaultValue: false,
        }),
        location: fields.array(location, {
          label: 'Location',
          itemLabel: (props) => props.fields.city.value || 'Location',
          validation: { length: { min: 1, max: 1 } },
        }),
        tags: fields.array(tag, {
          label: 'Tags',
          itemLabel: (props) => props.fields.tag.value || 'Tag',
        }),
        body: fields.mdx({
          label: 'Article body',
          extension: 'mdx',
          description: 'Use supported claims and distinguish an illustrative example from an implemented control.',
        }),
      },
    }),
  },
})
