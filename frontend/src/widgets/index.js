import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';
import VideoWidget from './VideoWidget.astro';
import FileWidget from './FileWidget.astro';
import TwoColumnWidget from './TwoColumnWidget.astro';

const widgetComponents = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget,
  '@apostrophecms/video': VideoWidget,
  '@apostrophecms/file': FileWidget,
  'two-column': TwoColumnWidget
};

export default widgetComponents;
