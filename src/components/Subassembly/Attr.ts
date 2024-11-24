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
  fontSize: number
  fontWeight: number
  fontColor: string
  textAlign: TextAlign
}
type BackgroundStyle = 'image' | 'color'
type BackgroundSize = 'contain' | 'cover' | 'auto'
type BackgroundRepeat = 'repeat' | 'no-repeat' | 'repeat-x' | 'repeat-Y'
type BackgroundPosition = 'top' | 'right' | 'bottom' | 'left'
type Background = {
  backgroundStyle: BackgroundStyle
  backgroundOpacity: number
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: BackgroundSize
  backgroundRepeat?: BackgroundRepeat
  backgroundPosition?: BackgroundPosition
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
const attList: MyAttr = {
  layout: {
    display: 'block',
    width: 0,
    height: 0,
    padding: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    margin: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
    },
  },
  font: {
    fontSize: 14,
    fontWeight: 500,
    fontColor: 'black',
    textAlign: 'center',
  },
  background: {
    backgroundStyle: 'color',
    backgroundColor: '#fff',
    backgroundOpacity: 1,
  },
  border: {
    borderDirection: 'all',
    borderStyle: {
      borderWidth: 1,
      borderColor: '#fff',
      borderStyle: 'solid',
    },
    borderRadio: 0,
  },
  position: {
    positionMethod: 'relative',
    positionLevel: 1,
    float: 'left',
    clearFloat: 'none',
  },
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
  attList,
}
