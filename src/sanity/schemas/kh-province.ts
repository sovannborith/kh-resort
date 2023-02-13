import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'kh-province',
  title: 'Province',
  type: 'document',
  fields: [
    defineField({
      name: 'name_en',
      title: 'Name in English',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'name_kh',
      title: 'Name in Khmer',
      type: 'string',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'municipal_en',
      title: 'City in English',
      type: 'string',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'municipal_kh',
      title: 'City in Khmer',
      type: 'string',
      validation: (Rule) => Rule.required().max(150),
    }),
    defineField({
      name: 'pronce_image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {hotspot: true},
    }),
  ],
})
