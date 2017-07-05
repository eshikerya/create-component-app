import defaultOptions from './config.json'

function generateImports(COMPONENT_NAME, { cssExtension } = defaultOptions) {
  return `import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
${cssExtension ? `import styles from './${COMPONENT_NAME}.${cssExtension}';` : ''}`
}

export default generateImports
