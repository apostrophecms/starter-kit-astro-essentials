export default {
  fields(self, options) {
    return {
      add: {
        content: {
          type: 'area',
          label: 'Main Content',
          options: {
            widgets: {
              '@apostrophecms/rich-text': {},
              '@apostrophecms/image': {},
              '@apostrophecms/video': {},
              '@apostrophecms/layout': {}
            }
          }
        }
      }
    };
  }
};
