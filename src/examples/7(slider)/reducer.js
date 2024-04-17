export const initialState = {
  planets: [
    {
      id: 1,
      image: '/images/planets/1.jpg',
      title: "Mercury",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 2,
      image: '/images/planets/2.jpg',
      title: "Venus",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 3,
      image: '/images/planets/3.jpg',
      title: "Earth",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 4,
      image: '/images/planets/4.jpg',
      title: "Mars",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 5,
      image: '/images/planets/5.jpg',
      title: "Jupiter",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 6,
      image: '/images/planets/6.jpg',
      title: "Saturn",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 7,
      image: '/images/planets/7.jpg',
      title: "Uranus",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
    },
    {
      id: 8,
      image: '/images/planets/8.jpg',
      title: "Neptune",
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ut veritatis totam fugit, ea quidem beatae aperiam quam error ipsam minus inventore corporis iste quaerat tempora laudantium hic cumque? Quas.'
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
