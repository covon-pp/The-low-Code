import ButtonComponent from '@/components/ListOfComponents/ButtonComponent.vue'
import Raster from '@/components/ListOfComponents/Raster.vue'
import Table from '@/components/ListOfComponents/Table.vue'
import Picture from '@/components/ListOfComponents/Picture.vue'
import Switch from '@/components/ListOfComponents/Switch.vue'
import SingleLineInput from '@/components/ListOfComponents/SingleLineInput.vue'
import MultiLineInput from '@/components/ListOfComponents/MultiLineInput.vue'
import DropDown from '@/components/ListOfComponents/DropDown.vue'
import RadioBox from '@/components/ListOfComponents/RadioBox.vue'
import MultiCheckBox from '@/components/ListOfComponents/MultiCheckBox.vue'
import Grade from '@/components/ListOfComponents/Grade.vue'
import RectShape from '@/components/ListOfComponents/RectShape.vue'
import LineShape from '@/components/ListOfComponents/LineShape.vue'
import CircleShape from '@/components/ListOfComponents/CircleShape.vue'
import SVGStar from '@/components/ListOfComponents/SVGStar.vue'
import SVGTriangle from '@/components/ListOfComponents/SVGTriangle.vue'
import Text from '@/components/ListOfComponents/Text.vue'
import { type MyAttr } from '@/components/Subassembly/Attr'
export type Categorydata = {
  id: string
  component: string
  label: string
  propValue: object | string
  icon: string
  style: MyAttr
}
type Listdata = {
  id: string
  category: string
  categorydata: Categorydata[]
}
export const list: Listdata[] = [
  {
    id: '1',
    category: '容器',
    categorydata: [
      {
        id: '1-1',
        component: 'Raster',
        label: '栅格',
        propValue: '&nbsp;',
        icon: '#icon-zhagebuju',
        style: {
          layout: {
            display: 'flex',
            height: 52,
            width: 690,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,
            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '1-2',
        component: 'Table',
        label: '表格',
        icon: '#icon-biaoge',
        propValue: {
          data: [
            ['表头1', '表头2', '表头3'],
            ['内容1', '内容2', '内容3'],
          ],
          stripe: true,
          thBold: true,
        },
        style: {
          layout: {
            display: 'inline-block',
            height: 200,
            width: 600,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,
            float: 'none',
            clearFloat: 'none',
          },
        },
      },
    ],
  },
  {
    id: '2',
    category: '基础组件',
    categorydata: [
      {
        id: '2-1',
        component: 'Text',
        label: '文字',
        icon: '#icon-text',
        propValue: '双击编辑文字',
        style: {
          layout: {
            display: 'inline',
            height: 28,
            width: 200,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-2',
        component: 'Picture',
        label: '图片',
        icon: '#icon-tupian',
        propValue: '',
        style: {
          layout: {
            display: 'inline-block',
            height: 300,
            width: 300,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-3',
        component: 'Switch',
        label: '开关',
        icon: '#icon-switch-ON',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 80,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-4',
        component: 'SingleLineInput',
        label: '单行输入',
        icon: '#icon-danhangshurukuang',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 240,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderColor: '#eee',
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-5',
        component: 'MultiLineInput',
        label: '多行输入',
        icon: '#icon-duohangshuru',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 610,
            padding: {
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
            },
            margin: {
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              marginBottom: 10,
            },
          },
          font: {
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-6',
        component: 'DropDown',
        label: '下拉框',
        icon: '#icon-m-xialaxuanxiang',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 150,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-7',
        component: 'RadioBox',
        label: '单选框',
        icon: '#icon-danxuanxuanzhong',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-8',
        component: 'MultiCheckBox',
        label: '多选框',
        icon: '#icon-duoxuankuang',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-9',
        component: 'Grade',
        label: '打分',
        icon: '#icon-dafen',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-10',
        component: 'ButtonComponent',
        label: '按钮',
        propValue: '按钮',
        icon: '#icon-anniu',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 68,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
    ],
  },
  {
    id: '3',
    category: '形状',
    categorydata: [
      {
        id: '3-1',
        component: 'RectShape',
        label: '矩形',
        propValue: '&nbsp;',
        icon: 'juxing',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-2',
        component: 'LineShape',
        label: '直线',
        propValue: '',
        icon: 'zhixian',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-2',
        component: 'CircleShape',
        label: '圆形',
        propValue: '&nbsp;',
        icon: '24gl-circle',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-3',
        component: 'SVGStar',
        label: '星形',
        icon: 'kongwujiaoxing',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,
            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-4',
        component: 'SVGTriangle',
        label: '三角形',
        icon: 'xingzhuang-sanjiaoxing',
        propValue: '',
        style: {
          layout: {
            display: 'inline',
            height: 32,
            width: 320,
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
            fontWeight: 400,
            fontColor: '#bbb',
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
              borderStyle: 'none',
            },
            borderRadio: 0,
          },
          position: {
            positionMethod: 'relative',
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
    ],
  },
]
export const getComponent = (com: string) => {
  switch (com) {
    case 'ButtonComponent':
      return ButtonComponent
    case 'Raster':
      return Raster
    case 'Table':
      return Table
    case 'Picture':
      return Picture
    case 'Switch':
      return Switch
    case 'SingleLineInput':
      return SingleLineInput
    case 'MultiLineInput':
      return MultiLineInput
    case 'DropDown':
      return DropDown
    case 'RadioBox':
      return RadioBox
    case 'MultiCheckBox':
      return MultiCheckBox
    case 'Grade':
      return Grade
    case 'RectShape':
      return RectShape
    case 'LineShape':
      return LineShape
    case 'CircleShape':
      return CircleShape
    case 'SVGStar':
      return SVGStar
    case 'SVGTriangle':
      return SVGTriangle
    case 'Text':
      return Text
  }
}
