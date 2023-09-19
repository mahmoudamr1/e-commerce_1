export const sectionOne = {
  name: 'sectionOne',
  title: 'SECTION ONE',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    }
  ]
};

export const sectionTwo = {
  name: 'sectionTwo',
  title: 'SECTION TWO',
  type: 'document',
  fields: [
    ...sectionOne.fields, // ...أضف الحقول هنا
  ]
};

export const sectionThree = {
  name: 'sectionThree',
  title: 'SECTION THREE',
  type: 'document',
  fields: [
    ...sectionOne.fields,
  ]
};