export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/back.svg',
  },

  {
    width: 24,
    height: 24,
    src: '/img/icon.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

// export const INFO_LIST = [
//   {
//     width: 340,
//     height: 160,
//     src: '../img/telegram.png',
//     title: 'Що таке база знань?',
//     text: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.`,
//     button: `Перейти до ком'юніті у Телеграм`,
//   },
// ]

// export const createInfo = () => {
//   const boxInfo = createElement('div', 'info')

//   INFO_LIST.forEach((infoData) => {
//     const image = createElement(
//       'img',
//       'info__img',
//       infoData.src,
//     )

//     const info = createElement(
//       'h2',
//       'info__header',
//       infoData.title,
//     )

//     const text = createElement(
//       'p',
//       'info__text',
//       infoData.text,
//     )

//     const button = createElement(
//       'button',
//       'info__button',
//       infoData.button,
//     )

//     boxInfo.append(image, info, text, button)
//   })

//   return boxInfo
// }
