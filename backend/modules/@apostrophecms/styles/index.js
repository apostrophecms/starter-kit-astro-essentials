export default {
  styles: {
    add: {
      // Color field - uses color picker
      backgroundColor: {
        type: 'color',
        label: 'Page Background',
        selector: 'body',
        property: 'background-color'
      },
      // Range field - uses slider
      maxWidth: {
        type: 'range',
        label: 'Content Width',
        selector: '.container',
        property: 'max-width',
        min: 800,
        max: 1400,
        step: 50,
        unit: 'px'
      },
      // Preset - pre-configured multi-field control
      containerPadding: {
        preset: 'padding',
        selector: '.container'
      },
      lineHeight: {
        type: 'integer',
        label: 'Line Height',
        selector: 'body',
        property: 'line-height',
        min: 1,
        max: 10
      },
      letterSpacing: {
        type: 'float',
        label: 'Letter Spacing',
        selector: 'body',
        property: 'letter-spacing',
        min: 1.1,
        max: 4.2,
        unit: 'px'
      },
      headingFont: { type: 'string', label: 'Heading Font' },
      bodyFont: { type: 'string', label: 'Body Font' }
    },
    group: {
      layout: {
        label: 'Layout',
        fields: ['maxWidth', 'containerPadding'],
        inline: true
      },
      colors: {
        label: 'Colors',
        fields: ['backgroundColor']
      },
      typography: {
        label: 'Typography',
        group: {
          spacing: {
            label: 'Text Spacing',
            fields: ['lineHeight', 'letterSpacing']
          },
          fonts: {
            label: 'Fonts',
            fields: ['headingFont', 'bodyFont']
          }
        }
      }
    }
  }
};
