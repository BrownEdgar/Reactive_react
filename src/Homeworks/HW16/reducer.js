export const initialState = {
  pictures: [
    {
      id: 1,
      image: '/images/forest/forest (5).jpg',
      title: 'AUTUMN COLORS',
      desc: '7th October'
    },
    {
      id: 2,
      image: '/images/forest/forest (1).jpg',
      title: "The Sky's the Limit",
      desc: '12th June'
    },
    {
      id: 3,
      image: '/images/forest/forest (4).jpg',
      title: 'Fashion',
      desc: '3th August'
    },
    {
      id: 4,
      image: '/images/forest/forest (3).jpg',
      title: 'Art',
      desc: '17th May'
    },
    {
      id: 5,
      image: '/images/forest/forest (2).jpg',
      title: 'Fluffy Chick',
      desc: '27th April'
    }
  ]
}

function reducer(state = initialState, { type, payload }) {
  switch (type) {

    default:
      return state
  }
}

export default reducer