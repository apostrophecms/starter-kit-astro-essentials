export default {
  styles: {
    add: {
      columnBorder: {
        preset: 'border',
        label: 'Column Border'
      },
      columnBackgroundColor: {
        type: 'color',
        label: 'Column Background Color',
        property: 'background-color'
      },
      columnPadding: {
        preset: 'padding',
        label: 'Column Padding'
      },
      mediaBodyBackground: {
        type: 'color',
        label: 'Media Query Body Background',
        help: 'In effect on screens with width less than 801px',
        property: 'background-color',
        mediaQuery: 'screen and (max-width: 800px)'
      }
    }
  },
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
              '@apostrophecms/file': {}
            }
          }
        }
      }
    };
  }
};
