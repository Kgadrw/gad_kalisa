export default {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Project Link",
      type: "url",
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Pro", value: "Pro" },
          { title: "Web", value: "Web" },
          { title: "Mobile", value: "Mobile" },
          { title: "UI/UX", value: "UI/UX" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
