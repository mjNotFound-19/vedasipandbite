const externalRegex = /^(https?:)?\/\//i;

export const safeExternalLink = (href?: string) => {
  if (!href || !externalRegex.test(href)) {
    return {};
  }

  return {
    target: '_blank',
    rel: 'noopener noreferrer'
  };
};

