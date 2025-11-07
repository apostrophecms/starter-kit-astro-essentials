import RichTextWidget from '@apostrophecms/frontend/astro/widgets/RichTextWidget.astro';
import ImageWidget from '@apostrophecms/frontend/astro/widgets/ImageWidget.astro';
import VideoWidget from '@apostrophecms/frontend/astro/widgets/VideoWidget.astro';
import TwoColumnWidget from '@apostrophecms/frontend/astro/widgets/TwoColumnWidget.astro';

const widgetComponents = {
  '@apostrophecms/rich-text': RichTextWidget,
  '@apostrophecms/image': ImageWidget,
  '@apostrophecms/video': VideoWidget,
  'two-column': TwoColumnWidget
};

export default widgetComponents;
