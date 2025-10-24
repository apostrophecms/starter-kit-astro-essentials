export default {
  fields(self, options) {
    return {
      add: {
        content: {
          type: 'area',
          label: 'Main Content',
          options: {
            widgets: {
              'nested-layout': {},
              '@apostrophecms/rich-text': {},
              '@apostrophecms/image': {},
              '@apostrophecms/video': {}
            }
          }
        }
      }
    };
  }
};
