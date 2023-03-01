import parse from 'html-react-parser'

// создаёт строки для запросов из объекта params
// объект params может хранить в себе ключи в виде строк или объектов
export const getQueryString = (params = {}) => {
  let queryString = ''
  for (let elem in params) {
    // если значение ключа объект -> создаётся строка вида key[subkey]=value&
    // например из { fields: { TITLE: 'посмотреть', DESCRIPTION: 'кино' } } получится: 
    // `fields[TITLE]=посмотреть&fields[DESCRIPTION]=кино&`
    if (typeof params[elem] === 'object') {
      for (let subElem in params[elem]) {
        queryString += `${elem}[${subElem}]=${params[elem][subElem]}&`
      }
    } else {
      // в остальных случаях -> создаётся строка вида key=value&
      // например из { auth: 'das13asd0fds', scope: 'tasks' } получится:
      // `auth=das13asd0fds&scope=tasks&`
      queryString += `${elem}=${params[elem]}&`
    }
  }

  return queryString
}

// меняет в строке \r\n на <br />, затем прогоняет строку через html-react-parser
// нужна для корректного отображения ключа DESCRIPTION в компоненте Task
export const toHtml = (str) => parse(str.replace(new RegExp('\r?\n','g'), '<br />'))