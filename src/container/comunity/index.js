import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Комьюніті')

page.append(title)

// ===

const CHANGE_LIST = [
  {
    // category: [
    //   { text: 'Важливо', id: 1 },
    //   { text: 'Нова', id: 2 },
    // ],
    info: 'База знань',
    viewed: false,
  },

  {
    // category: [{ text: 'Нова', id: 2 }],
    info: 'Інформація',
    viewed: true,
  },
]

const createChange = () => {
  const changeTwo = createElement('change', 'change')

  CHANGE_LIST.forEach((ch) => {
    const change = createElement()
  })
}

const INFO_LIST = [
  {
    width: 340,
    height: 160,
    src: '/img/telegram.png',
    title: 'Що таке база знань?',
    text: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.`,
    button: `Перейти до ком'юніті у Телеграм`,
  },
]

const createInfo = () => {
  const boxInfo = createElement('div', 'info')

  INFO_LIST.forEach((infoData) => {
    const image = createElement(
      'img',
      'info__img',
      infoData.src,
    )

    const info = createElement(
      'h2',
      'info__header',
      infoData.title,
    )

    const text = createElement(
      'p',
      'info__text',
      infoData.text,
    )

    const button = createElement(
      'button',
      'info__button',
      infoData.button,
    )

    boxInfo.append(image, info, text, button)
  })

  return boxInfo
}

const info = createInfo()
page.append(info)

// const createPost = () => {
//   const postList = createElement('main', 'post__list')

//   POST_LIST.forEach((postData) => {
//     const post = createElement(
//       'div',
//       postData.viewed
//         ? 'post button post-viewed'
//         : 'post button',
//     )

//     const postHeader = createElement('div', 'post__header')

//     // ===

//     const categoryList = createElement(
//       'div',
//       'post__category-list',
//     )

//     postData.category.forEach((category) => {
//       const categorySpan = createElement(
//         'span',
//         `post__category post__category--${category.id}`,
//         category.text,
//       )
//       categoryList.append(categorySpan)
//     })

//     // ===

//     const dateSpan = createElement(
//       'span',
//       'post__date',
//       postData.date,
//     )

//     // ===

//     postHeader.append(categoryList, dateSpan)

//     // ===

//     const infoParagraph = createElement(
//       'p',
//       'post__info',
//       postData.info,
//     )
//     post.append(postHeader, infoParagraph)

//     // ===

//     postList.append(post)
//   })

//   return postList
// }

// // ===

// const post = createPost()
// page.append(post)
