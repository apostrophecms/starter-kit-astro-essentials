export default {
  styles: {
    add: {
      backgroundColor: {
        type: 'color',
        property: 'background-color'
      },
      margin: 'margin',
      padding: 'padding',
      border: {
        preset: 'border',
        label: 'Show Border'
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
