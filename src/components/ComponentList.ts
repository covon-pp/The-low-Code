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
export type Style = {
  width: string
  height: string
  margin?: string
  fontSize?: number
  resize?: string
  fontWeight?: number
  lineHeight?: string
  letterSpacing?: number
  textAlign?: string
  color?: string
  padding?: number
  backgroundColor?: string
  borderRadius?: string
  borderColor?: string
  borderWidth?: number
  borderStyle?: string
  verticalAlign?: string
}
export type Categorydata = {
  id: string
  component: ReturnType<typeof markRaw>
  label: string
  propValue: object | string
  icon: string
  style: Style
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
        component: markRaw(Raster),
        label: '栅格',
        propValue: '&nbsp;',
        icon: '#icon-zhagebuju',
        style: {
          width: '690px',
          height: '52px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: '',
          color: '',
          padding: 4,
        },
      },
      {
        id: '1-2',
        component: markRaw(Table),
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
          width: '600px',
          height: '200px',
          fontSize: 14,
          fontWeight: 400,
          textAlign: 'center',
          color: '',
          backgroundColor: 'rgba(255, 255, 255, 1)',
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
        component: markRaw(Text),
        label: '文字',
        icon: '#icon-text',
        propValue: '双击编辑文字',
        style: {
          width: '200px',
          height: '28px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: '',
          color: '',
          padding: 4,
        },
      },
      {
        id: '2-2',
        component: markRaw(Picture),
        label: '图片',
        icon: '#icon-tupian',
        propValue: '',
        style: {
          width: '300px',
          height: 'auto',
          borderRadius: '',
        },
      },
      {
        id: '2-3',
        component: markRaw(Switch),
        label: '开关',
        icon: '#icon-switch-ON',
        propValue: '',
        style: {
          width: '80px',
          height: '32px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-4',
        component: markRaw(SingleLineInput),
        label: '单行输入',
        icon: '#icon-danhangshurukuang',
        propValue: '',
        style: {
          width: '240px',
          height: '32px',
          margin: '10px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-5',
        component: markRaw(MultiLineInput),
        label: '多行输入',
        icon: '#icon-duohangshuru',
        propValue: '',
        style: {
          width: '660px',
          height: '32px',
          margin: '10px',
          resize: 'none',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'start',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-6',
        component: markRaw(DropDown),
        label: '下拉框',
        icon: '#icon-m-xialaxuanxiang',
        propValue: '',
        style: {
          width: '150px',
          height: '32px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-7',
        component: markRaw(RadioBox),
        label: '单选框',
        icon: '#icon-danxuanxuanzhong',
        propValue: '',
        style: {
          width: '320px',
          height: '32px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-8',
        component: markRaw(MultiCheckBox),
        label: '多选框',
        icon: '#icon-duoxuankuang',
        propValue: '',
        style: {
          width: '320px',
          height: '32px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-9',
        component: markRaw(Grade),
        label: '打分',
        icon: '#icon-dafen',
        propValue: '',
        style: {
          width: '160px',
          height: '32px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '2-10',
        component: markRaw(ButtonComponent),
        label: '按钮',
        propValue: '按钮',
        icon: '#icon-anniu',
        style: {
          width: '75px',
          height: '35px',
          margin: '10px',
          borderWidth: 1,
          borderColor: '',
          borderRadius: '10px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: '',
          color: '',
          backgroundColor: '',
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
        component: markRaw(RectShape),
        label: '矩形',
        propValue: '&nbsp;',
        icon: 'juxing',
        style: {
          width: '200px',
          height: '200px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          borderWidth: 1,
          backgroundColor: '',
          borderStyle: 'solid',
          borderRadius: '',
          verticalAlign: 'middle',
        },
      },
      {
        id: '3-2',
        component: markRaw(LineShape),
        label: '直线',
        propValue: '',
        icon: 'zhixian',
        style: {
          width: '200px',
          height: '2px',
          backgroundColor: '#000',
        },
      },
      {
        id: '3-2',
        component: markRaw(CircleShape),
        label: '圆形',
        propValue: '&nbsp;',
        icon: '24gl-circle',
        style: {
          width: '200px',
          height: '200px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          borderWidth: 1,
          backgroundColor: '',
          borderStyle: 'solid',
          borderRadius: '',
          verticalAlign: 'middle',
        },
      },
      {
        id: '3-3',
        component: markRaw(SVGStar),
        label: '星形',
        icon: 'kongwujiaoxing',
        propValue: '',
        style: {
          width: '80px',
          height: '80px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
      {
        id: '3-4',
        component: markRaw(SVGTriangle),
        label: '三角形',
        icon: 'xingzhuang-sanjiaoxing',
        propValue: '',
        style: {
          width: '80px',
          height: '80px',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '',
          letterSpacing: 0,
          textAlign: 'center',
          color: '',
          borderColor: '#000',
          backgroundColor: 'rgba(255, 255, 255, 1)',
        },
      },
    ],
  },
]
