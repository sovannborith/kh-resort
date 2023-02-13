export default {
  name: "kh-province",
  title: "Province",
  type: "document",
  fields: [
    {
      name: "name_en",
      title: "Name in English",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "name_kh",
      title: "Name in Khmer",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    },
    {
      name: "municipal_en",
      title: "City in English",
      type: "string",
      validation: (Rule) => Rule.required().max(50),
    },
    {
      name: "municipal_kh",
      title: "City in Khmer",
      type: "string",
      validation: (Rule) => Rule.required().max(150),
    },
    {
      name: "pronce_image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
    },
  ],
};
