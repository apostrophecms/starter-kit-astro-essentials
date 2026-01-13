export default {
  styles: {
    add: {
      fancyClass: {
        type: 'boolean',
        label: 'Enable Fancy Class',
        class: 'fancy-class'
      },
      backgroundColor: {
        type: 'color',
        label: 'Background Color',
        selector: 'body',
        property: 'background-color'
      },
      mediaBodyBackground: {
        type: 'color',
        label: 'Media Query Body Background',
        help: 'In effect on screens with width less than 801px',
        selector: 'body',
        property: 'background-color',
        mediaQuery: 'screen and (max-width: 800px)'
      }

    },
    group: {
      background: {
        label: 'Background',
        fields: [ 'fancyClass', 'backgroundColor', 'mediaBodyBackground' ]
      }
    }
  }
};
