export default {
  styles: {
    add: {
      layoutBorder: {
        preset: 'border',
        label: 'Layout Border'
      },
      layoutBackgroundColor: {
        type: 'color',
        label: 'Layout Background Color',
        property: 'background-color'
      },
      layoutPadding: {
        preset: 'padding',
        label: 'Layout Padding'
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
