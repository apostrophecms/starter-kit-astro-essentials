// Widget registry — maps widget types to Astro components.
// Keys MUST be the widget type: the backend module name without the `-widget`
// suffix (e.g. '@apostrophecms/rich-text-widget' -> '@apostrophecms/rich-text',
// 'nested-layout-widget' -> 'nested-layout').
// A wrong or missing key renders nothing — the widget will appear blank in the
// frontend. The only sign is a "Missing widget mapping for <type>" error in the
// frontend server log; nothing appears in the browser console.
import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';
import VideoWidget from './VideoWidget.astro';
import LayoutWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutWidget.astro';
import LayoutColumnWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutColumnWidget.astro';
import NestedLayoutWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutWidget.astro';
import NestedLayoutColumnWidget from '@apostrophecms/apostrophe-astro/widgets/LayoutColumnWidget.astro';
import FileWidget from './FileWidget.astro';

const widgetComponents = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget,
  '@apostrophecms/video': VideoWidget,
  '@apostrophecms/layout': LayoutWidget,
  '@apostrophecms/layout-column': LayoutColumnWidget,
  'nested-layout': NestedLayoutWidget,
  'nested-column': NestedLayoutColumnWidget,
  '@apostrophecms/file': FileWidget,
};

export default widgetComponents;
