export const initialState = {
  planets: [
    {
      id: 1,
      image: '/images/planets/1.jpg',
      title: 'Neptun',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsam iure nemo, iusto aliquam tempora maiores tempore rerum doloribus unde veritatis facere ratione, nihil autem odit obcaecati non illum! Magni!'
    },
    {
      id: 2,
      image: '/images/planets/2.jpg',
      title: 'Venera',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsam iure nemo, iusto aliquam tempora maiores tempore rerum doloribus unde veritatis facere ratione, nihil autem odit obcaecati non illum! Magni!'
    },
    {
      id: 3,
      image: '/images/planets/3.jpg',
      title: 'Earth',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsam iure nemo, iusto aliquam tempora maiores tempore rerum doloribus unde veritatis facere ratione, nihil autem odit obcaecati non illum! Magni!'
    },
    {
      id: 4,
      image: '/images/planets/4.jpg',
      title: 'Saturn',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ipsam iure nemo, iusto aliquam tempora maiores tempore rerum doloribus unde veritatis facere ratione, nihil autem odit obcaecati non illum! Magni!'
    },
  ]
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {

  default:
    return state
  }
}

export default reducer