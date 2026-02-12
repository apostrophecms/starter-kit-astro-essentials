// This configures the @apostrophecms/page module to add a "home" page type to the
// pages menu

export default {
  options: {
    types: [
      {
        name: '@apostrophecms/test-big-page',
        label: 'Test Big Page'
      },
      {
        name: '@apostrophecms/test-small-page',
        label: 'Test Small Page'
      },
      {
        name: 'default-page',
        label: 'Default'
      },
      {
        name: '@apostrophecms/blog-page',
        label: 'Blog Page'
      },
      {
        name: '@apostrophecms/home-page',
        label: 'Home'
      }
    ]
  }
};
