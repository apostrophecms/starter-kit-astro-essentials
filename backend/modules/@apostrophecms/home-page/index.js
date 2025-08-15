export default {
  options: {
    label: 'Home Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            '@apostrophecms/rich-text': {},
            '@apostrophecms/image': {},
            '@apostrophecms/video': {},
            'two-column': {}
          }
        }
      },
      objectField: {
        type: 'object',
        fields: {
          add: {
            content: {
              type: 'area',
              options: {
                widgets: {
                  '@apostrophecms/image': {}
                }
              }
            }
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'title',
          'main'
        ]
      }
    }
  }
};
