import generateImports from './common.template'
import defaultOptions from './config.json'

function generatePureComponent(COMPONENT_NAME, { cssExtension } = defaultOptions) {
  return `${generateImports(COMPONENT_NAME, { cssExtension })}

const styleSheet = createStyleSheet('${COMPONENT_NAME}', {
});

type ${COMPONENT_NAME}PropsType = WithParentComponentType & WithStylesComponentType & {
}
type ${COMPONENT_NAME}StateType = {
}

@withStyles(styleSheet)
export default class ${COMPONENT_NAME} extends PureComponent {
    static displayName = '${COMPONENT_NAME}';
    static defaultProps = {
    }

    props: ${COMPONENT_NAME}PropsType;
    state: ${COMPONENT_NAME}StateType = {};

    render() {
        return (
            <div className="${COMPONENT_NAME}"></div>
        );
    }
}
`
}

export default generatePureComponent
