const calculateOutput = (text: string, output = '0') => {
  switch (text) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      // setOutput(text)
      if (output === '0') {
        return text
      } else {
        return output + text
      }
    case 'Delete':
      if (output.length === 1) {
        return '0'
      } else {
        return output.slice(0, -1) || '0'
      }
    case 'Clear':
      return '0'
    case '.':
      if (output.indexOf('.') > -1) {
        return output
      }
      return output + '.'
    default:
      return '0'
  }
}

export {calculateOutput}
