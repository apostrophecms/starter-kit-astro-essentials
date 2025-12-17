export default {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Styles Widget (to test styles feature)'
    // stylesWrapper: false
  },
  styles(self, options) {
    return {
      add: {
        myBorder: 'border',
        alignment: 'alignment',
        backgroundColor: {
          type: 'color',
          property: 'background-color'
        },
        isBold: {
          type: 'boolean',
          class: 'bold-text'
        }
      }
    };
  },
  fields: {
    add: {
      title: {
        type: 'string',
        label: 'My Title'
      }
    }
  }
};
