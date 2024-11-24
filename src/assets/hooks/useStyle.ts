const transformPX = (num: number) => num + 'px'
//获取字符串的所有数字并转化为数字类型
const getNumbers = (str: string) => {
  const numberStrings = str.match(/\d+/g)
  const allNumbersStr = numberStrings ? numberStrings.join('') : ''
  const allNumbers = parseInt(allNumbersStr, 10)
  return allNumbers
}
const getBorderDirection = (direction: string, style: string) => {
  switch (direction) {
    case 'all':
      return style
    case 'top':
      return style + ' none none none'
    case 'right':
      return 'none ' + style + ' none none'
    case 'bottom':
      return 'none none ' + style + ' none'
    case 'left':
      return 'none none none ' + style
    default:
      return 'none'
  }
}
export { transformPX, getNumbers, getBorderDirection }
