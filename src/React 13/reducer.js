export const initialState = {
  data: [
    {
      id: 1,
      Image: '/images/React12/1.avif',
      title: "Wedding in the mountains",
      data: "19 June"
    },
    {
      id: 2,
      Image: '/images/React12/2.avif',
      title: "Night city",
      data: "25 May"
    },
    {
      id: 3,
      Image: '/images/React12/3.avif',
      title: "Walking around the city in rainy weather",
      data: "29 April"
    },
    {
      id: 4,
      Image: '/images/React12/4.avif',
      title: "Bright and warm house",
      data: "11 Jule"
    },
    {
      id: 5,
      Image: '/images/React12/5.avif',
      title: "Office Design",
      data: "15 Mart"
    },
    {
      id: 6,
      Image: '/images/React12/6.avif',
      title: "Beautiful view from the mountains",
      data: "28 June"
    },
  ]
}

function reducer(state = initialState, { type, payload }){
  switch (type) {

  default:
    return state
  }
}
export default reducer
