export default {
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
      }
    },
    group: {
      basics: {
        fields: [ 'title', 'publishedAt', 'main' ]
      }
    }
  }
};
