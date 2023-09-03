import { CogIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      title: 'Social Media',
      name: 'social',
    },
    {
      title: 'Website Logo',
      name: 'logos',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Site title',
    }),
    defineField({
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    }),
    defineField({
      title: 'Main logo',
      description: 'Upload your main logo here. SVG preferred. ',
      name: 'logo',
      type: 'image',
      fieldset: 'logos',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),

    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          },
        ),
    }),

    defineField({
      name: 'social',
      type: 'array',
      title: 'Social Links',
      description: 'Enter your Social Media URLs',
      validation: (Rule) => Rule.unique(),
      of: [
        {
          type: 'object',
          fields: [
            {
              type: 'string',
              name: 'media',
              title: 'Choose Social Media',
              options: {
                list: [
                  { title: 'Linkedin', value: 'linkedin' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Github', value: 'github' },
                ],
              },
            },
            {
              type: 'url',
              name: 'url',
              title: 'Full Profile URL',
            },
          ],
          preview: {
            select: {
              title: 'media',
              subtitle: 'url',
            },
          },
        },
      ],
    }),

    defineField({
      title: 'Meta Description',
      name: 'description',
      description: 'Enter SEO Meta Description',
      fieldset: 'metadata',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.max(155).required(),
    }),

    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Menu Items',
      };
    },
  },
});
