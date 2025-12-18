
export default {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Test Big Page'
  },
  fields: {
    add: {
      simpleTitle: {
        label: 'What is title',
        type: 'string'
      },
      heroPanel: {
        type: 'object',
        label: 'Immersive Hero Panel with Tyre Selector Widget',
        required: true,
        fields: {
          add: {
            component: {
              type: 'string',
              def: 'HeroPanelTS',
              hidden: true
            },
            tsWidget: {
              label: 'TS Widget',
              type: 'area',
              options: {
                max: 1,
                widgets: {
                  '@apostrophecms/image': {}
                }
              }
            },
            _backgroundImage: {
              label: 'Choose an image for the background',
              type: 'relationship',
              withType: '@apostrophecms/image',
              max: 1,
              required: true
            }
          }
        }
      },
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [
          'simpleTitle',
          'heroPanel',
        ]
      }
    }
  }
};
