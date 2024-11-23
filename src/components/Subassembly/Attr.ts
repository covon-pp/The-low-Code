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
const getLayoutName = (name: string) => {
  switch (name) {
    case 'display':
      return 'Display'
    case 'height':
      return '高度'
    case 'width':
      return '宽度'
    case 'padding':
      return '内边距'
    case 'margin':
      return '外边距'
  }
}
type Font = {
  fontSize: number
  fontWeight: number
  fontColor: string
  textAlign: string
}
type Background = {
  backgroundStyle: string
  backgroundColor: string
  backgroundOpacity: number
}
type Border = {
  borderDirection: string
  borderStyle: {
    borderWidth: number
    borderColor: string
    borderStyle: string
  }
}
type Position = {
  positionMethod: string
  positionLevel: number
  float: boolean
  floatMethod: string
  clearFloat: boolean
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
    textAlign: '',
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
  },
  position: {
    positionMethod: 'relactive',
    positionLevel: 1,
    float: false,
    floatMethod: 'left',
    clearFloat: false,
  },
}
export {
  type Layout,
  type Background,
  type Font,
  type Position,
  type Border,
  type MyAttr,
  attList,
  getLayoutName,
}
