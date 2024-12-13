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
import Text from '@/components/ListOfComponents/Text.vue'
import Avatar from '@/components/ListOfComponents/Avatar.vue'
import Marquee from '@/components/ListOfComponents/Marquee.vue'
import Card from '@/components/ListOfComponents/Card.vue'
import { type MyAttr } from '@/components/Subassembly/Attr'
export type Categorydata = {
  id: string
  component: string
  allowChild: boolean
  children?: Categorydata | string
  label: string
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
        allowChild: true,
        children: '请添加组件',
        label: '栅格',
        icon: '#icon-zhagebuju',
        style: {
          layout: {
            display: 'flex',
            height: 52,
            width: 685,
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        label: '文字',
        icon: '#icon-text',
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
            propValue: '双击编辑文字',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '2-2',
        component: 'Picture',
        allowChild: false,
        label: '图片',
        icon: '#icon-tupian',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-switch-ON',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-danhangshurukuang',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-duohangshuru',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-m-xialaxuanxiang',
        style: {
          layout: {
            display: 'block',
            height: 32,
            width: 152,
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
            propValue: 'drop down',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
            backgroundColor: '#409eff',
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-danxuanxuanzhong',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-duoxuankuang',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
        icon: '#icon-dafen',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
        allowChild: false,
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
            propValue: '按钮',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
    category: '数据展示',
    categorydata: [
      {
        id: '3-1',
        component: 'Avatar',
        label: '头像',
        allowChild: false,
        icon: 'icon-touxiang',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            positionLevel: 1,
            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-2',
        component: 'Card',
        label: '卡片',
        allowChild: true,
        icon: 'icon-preview',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-3',
        component: 'Marquee',
        label: '走马灯',
        allowChild: false,
        icon: 'icon-zoumadeng',
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
            propValue: '',
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
            positionLevel: 1,

            float: 'none',
            clearFloat: 'none',
          },
        },
      },
      {
        id: '3-4',
        component: 'Table',
        allowChild: true,
        children: '请添加数据',
        label: '表格',
        icon: '#icon-biaoge',
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
            propValue: {
              data: [
                ['表头1', '表头2', '表头3'],
                ['内容1', '内容2', '内容3'],
              ],
              stripe: true,
              thBold: true,
            },
            fontSize: 14,
            fontWeight: 400,
            fontColor: '#bbb',
            textAlign: 'center',
          },
          background: {
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
            position: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
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
    case 'Text':
      return Text
    case 'Avatar':
      return Avatar
    case 'Card':
      return Card
    case 'Marquee':
      return Marquee
  }
}
