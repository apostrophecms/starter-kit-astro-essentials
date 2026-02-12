export default {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Test Small Page'
  },
  fields: {
    add: {
      topArea: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/video': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'topArea'
        ]
      }
    }
  }
};
