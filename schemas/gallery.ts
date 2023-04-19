import { BookIcon } from '@sanity/icons';
import { format, parseISO } from 'date-fns';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, date }) {
      const subtitles = [
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean);

      return { title, media, subtitle: subtitles.join(' ') };
    },
  },
});
