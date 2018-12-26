import pick from '../services/pick'

export const container = ({ top, translateY, scale }) => ({
  marginLeft: '-100%',
  position: 'absolute',
  top,
  transform: [
    { translateY },
    { scale }
  ],
  width: '200%'
})

export const label = (props = {}) => {
  const activeColor = props.activeColor || props.labelActiveColor
  const focusedColor = props.focused ? activeColor : props.labelColor
  const color = props.error ? props.errorColor : focusedColor
  const fontSize = props.labelFontSize ? props.labelFontSize : props.fontSize
  const fontWeight = props.labelFontWeight? props.labelFontWeight : props.fontWeight
    
  

  return {
    ...pick(props, [
      'fontFamily',
      'paddingLeft',
      'paddingRight'
    ]),
    fontSize,
    fontWeight,
    color,
    paddingLeft: 1, // cursor indicator
    left: '50%',
    top: 0
  }
}
