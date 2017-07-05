import generateImports from './common.template'
import defaultOptions from './config.json'

function generateFunctionalComponent(COMPONENT_NAME, { cssExtension } = defaultOptions) {
  return `${generateImports(COMPONENT_NAME, { cssExtension })}

const styleSheet = createStyleSheet('${COMPONENT_NAME}', {
});

type ${COMPONENT_NAME}PropsType = WithStylesComponentType & {
}

const ${COMPONENT_NAME} = ({}: ${COMPONENT_NAME}PropsType) => (
  <div className="${COMPONENT_NAME}"></div>
);

${COMPONENT_NAME}.defaultProps = {}

export default withStyles(styleSheet)(${COMPONENT_NAME})
`
}

export default generateFunctionalComponent
