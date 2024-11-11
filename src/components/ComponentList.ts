type Style = {
  width: number
  height: number
  fontSize?: number
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
type Categorydata = {
  component: string
  label: string
  propValue: object | string
  icon: string
  style: Style
}
type Listdata = {
  category: string
  categorydata: Categorydata[]
}
export const list: Listdata[] = [
  {
    category: '容器',
    categorydata: [
      {
        component: 'VRaster',
        label: '栅格',
        propValue: '&nbsp;',
        icon: '#icon-zhagebuju',
        style: {
          width: 200,
          height: 28,
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
        component: 'VTable',
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
          width: 600,
          height: 200,
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
    category: '基础组件',
    categorydata: [
      {
        component: 'VText',
        label: '文字',
        propValue: '双击编辑文字',
        icon: '#icon-text',
        style: {
          width: 200,
          height: 28,
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
        component: 'Picture',
        label: '图片',
        icon: '#icon-tupian',
        propValue: {
          url: import('@/assets/title.jpg'),
          flip: {
            horizontal: false,
            vertical: false,
          },
        },
        style: {
          width: 300,
          height: 200,
          borderRadius: '',
        },
      },
      {
        component: 'switch',
        label: '开关',
        icon: '#icon-switch-ON',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'singleLineInput',
        label: '单行输入',
        icon: '#icon-danhangshurukuang',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'multiLineInput',
        label: '多行输入',
        icon: '#icon-duohangshuru',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'dropDown',
        label: '下拉框',
        icon: '#icon-m-xialaxuanxiang',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'radioBox',
        label: '单选框',
        icon: '#icon-danxuanxuanzhong',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'multiCheckBox',
        label: '多选框',
        icon: '#icon-duoxuankuang',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'grade',
        label: '打分',
        icon: '#icon-dafen',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'VButton',
        label: '按钮',
        propValue: '按钮',
        icon: '#icon-anniu',
        style: {
          width: 100,
          height: 34,
          borderWidth: 1,
          borderColor: '',
          borderRadius: '',
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
    category: '形状',
    categorydata: [
      {
        component: 'RectShape',
        label: '矩形',
        propValue: '&nbsp;',
        icon: 'juxing',
        style: {
          width: 200,
          height: 200,
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
        component: 'LineShape',
        label: '直线',
        propValue: '',
        icon: 'zhixian',
        style: {
          width: 200,
          height: 2,
          backgroundColor: '#000',
        },
      },
      {
        component: 'CircleShape',
        label: '圆形',
        propValue: '&nbsp;',
        icon: '24gl-circle',
        style: {
          width: 200,
          height: 200,
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
        component: 'SVGStar',
        label: '星形',
        icon: 'kongwujiaoxing',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
        component: 'SVGTriangle',
        label: '三角形',
        icon: 'xingzhuang-sanjiaoxing',
        propValue: '',
        style: {
          width: 80,
          height: 80,
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
