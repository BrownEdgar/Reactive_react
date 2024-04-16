export const initialState = {
  data: [
    {
      id:1,
      image: '/images/Galaxy1.avif',
      title: "The stars"
    },
    {
      id:2,
      image: '/images/Galaxy2.avif',
      title: "The stars"
    },
    {
      id:3,
      image: '/images/Galaxy3.avif',
      title: "The stars"
    },
    {
      id:4,
      image: '/images/Galaxy4.avif',
      title: "The stars"
    },
    {
      id:5,
      image: '/images/Galaxy5.avif',
      title: "The stars"
    },
    {
      id:6,
      image: '/images/Galaxy6.avif',
      title: "The stars"
    }
  ]
}

export default function reducer(state = initialState, { type, payload }){
  switch (type) {
    
  
    default: return state
  }
}
