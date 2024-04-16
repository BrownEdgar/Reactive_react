 export const initialState = {
  posts: [
    {
      id: 1,
      image: '/Images/Slider 1 Photos/1.jpeg',
      title: "Autumn colors",
      date: "7th October"
    },
    {
      id: 2,
      image: '/Images/Slider 1 Photos/2.jpeg',
      title: "The Sky's the limit",
      date: "12th June"
    },
    {
      id: 3,
      image: '/Images/Slider 1 Photos/3.jpeg',
      title: "Fashion",
      date: "3rd August"
    },
    {
      id: 4,
      image: '/Images/Slider 1 Photos/4.jpeg',
      title: "Art",
      date: "17th May"
    },
    {
      id: 5,
      image: '/Images/Slider 1 Photos/5.webp',
      title: "Fluffy Chick",
      date: "27th April"
    },
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  default: return state
  }
}
