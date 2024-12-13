type Layout = {
  display: string
  height: number
  width: number
  padding: {
    paddingLeft: number
    paddingRight: number
    paddingTop: number
    paddingBottom: number
  }
  margin: {
    marginLeft: number
    marginRight: number
    marginTop: number
    marginBottom: number
  }
}
type TextAlign = 'left' | 'right' | 'center' | 'justify'
type Font = {
  propValue: object | string
  fontSize: number
  fontWeight: number
  fontColor: string
  textAlign: TextAlign
}
type Background = {
  backgroundOpacity: number
  backgroundColor: string
}
type BorderStyle = 'none' | 'dotted' | 'dashed' | 'solid' | 'double'
type Border = {
  borderDirection: string
  borderStyle: {
    borderWidth: number
    borderColor: string
    borderStyle: BorderStyle
  }
  borderRadio: number
}
type PositionMethod = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'
type Float = 'left' | 'right' | 'none'
type ClearFloat = 'none' | 'both' | 'left' | 'right'
type Position = {
  positionMethod: PositionMethod
  positionLevel: number
  position: {
    top: number
    right: number
    bottom: number
    left: number
  }
  float: Float
  clearFloat: ClearFloat
}
type MyAttr = {
  layout: Layout
  font: Font
  background: Background
  border: Border
  position: Position
}
export {
  type Layout,
  type Background,
  type Font,
  type Position,
  type Border,
  type MyAttr,
  type TextAlign,
  type BorderStyle,
  type PositionMethod,
  type Float,
  type ClearFloat,
}
