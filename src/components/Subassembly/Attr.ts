type MyAttr = {
  layout: {
    name: string
    display: string
    height: number
    weight: number
    padding: {
      paddingLeft: number
      paddingRight: number
      paddingTop: number
      paddingButtom: number
    }
    margin: {
      marginLeft: number
      marginRight: number
      marginTop: number
      marginButtom: number
    }
  }
  font: {
    name: string
    fontSize: number
    fontWeight: number
    fontColor: string
    textAlign: string
  }
  background: {
    name: string
    backgroundStyle: string
    backgroundColor: string
    backgroundOpacity: number
  }
  border: {
    name: string
    borderDirection: string
    borderStyle: {
      borderWidth: number
      borderColor: string
      borderStyle: string
    }
  }
  position: {
    name: string
    positionMethod: string
    positionLevel: number
    float: boolean
    floatMethod: string
    clearFloat: boolean
  }
}
const attList: MyAttr = {
  layout: {
    name: '布局',
    display: 'block',
    weight: 0,
    height: 0,
    padding: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingButtom: 0,
    },
    margin: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginButtom: 0,
    },
  },
  font: {
    name: '字体',
    fontSize: 14,
    fontWeight: 500,
    fontColor: 'black',
    textAlign: '',
  },
  background: {
    name: '背景',
    backgroundStyle: 'color',
    backgroundColor: '#fff',
    backgroundOpacity: 1,
  },
  border: {
    name: '边框圆角',
    borderDirection: 'all',
    borderStyle: {
      borderWidth: 1,
      borderColor: '#fff',
      borderStyle: 'solid',
    },
  },
  position: {
    name: '位置',
    positionMethod: 'relactive',
    positionLevel: 1,
    float: false,
    floatMethod: 'left',
    clearFloat: false,
  },
}
export { type MyAttr, attList }
