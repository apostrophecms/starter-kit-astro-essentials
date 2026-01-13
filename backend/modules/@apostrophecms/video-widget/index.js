export default {
  styles: {
    add: {
      width: 'width',
      alignment: 'alignment',
      padding: 'padding',
      backgroundColor: {
        type: 'color',
        label: 'Background Color',
        property: 'background-color'
      },
      mediaBodyBackground: {
        type: 'color',
        label: 'Media Query Body Background',
        help: 'In effect on screens with width less than 801px',
        property: 'background-color',
        mediaQuery: 'screen and (max-width: 800px)'
      }
    }
  }
};
