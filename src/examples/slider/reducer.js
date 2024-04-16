export const initialState = {
    dates: [
        {
            id:1,
            image: '/images/1.jpg',
            title:"Fluffy chick",
            desc:"27th April",
        },
        {
            id:2,
            image: '/images/2.jpg',
            title:"Sky",
            desc:"12th June",
        },
        {
            id:3,
            image: '/images/3.jpg',
            title:"Autumn Colors",
            desc:"7th October",
        },
        {
            id:4,
            image: '/images/4.jpg',
            title:"Fashion",
            desc:"3th August",
        },
        {
            id:5,
            image: '/images/5.jpg',
            title:"Art",
            desc:"17th May",
        },
    ]
}

function reducer (state = initialState, { type, payload })  {
  switch (type) {


  default:
    return state
  }
}

export default reducer