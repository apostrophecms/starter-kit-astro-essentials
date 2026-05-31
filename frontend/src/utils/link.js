/**
 * Resolves the URL path from link fields (linkType, _linkPage, _linkFile, linkUrl)
 * @param {Object} link - Object containing link fields
 * @returns {string|undefined} The resolved URL path
 */
export function getLinkPath(link) {
  if (!link) {
    return;
  }

  if (link.linkType === 'page' && link._linkPage?.[0]) {
    return link._linkPage[0]._url;
  }

  if (link.linkType === 'file' && link._linkFile?.[0]) {
    return link._linkFile[0]._url;
  }

  if (link.linkType === 'custom') {
    return link.linkUrl;
  }
}

/**
 * Checks if link target should open in new tab
 * @param {Array} linkTarget - The linkTarget checkboxes value
 * @returns {boolean}
 */
export function opensInNewTab(linkTarget) {
  return linkTarget?.[0] === '_blank';
}