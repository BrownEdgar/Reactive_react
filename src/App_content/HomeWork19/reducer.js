export const initialState = {
    usa: [
        {
            id: 1,
            image: '/images/usa/1.jpg',
            title: "New-York",
            desc: 'New York City traces its origins to Fort Amsterdam and a trading post.',
        },
        {
            id: 2,
            image: '/images/usa/2.jpg',
            title: "Sahara desert",
            desc: 'The desert covers much of North Africa, excluding the fertile regio.',
        },
        {
            id: 3,
            image: '/images/usa/3.jpg',
            title: "Las-Vegas",
            desc: 'The city bills itself as the Entertainment Capital of the World, and is famous for its luxurious',
        },
        {
            id: 6,
            image: '/images/usa/6.jpg',
            title: "Hollywood",
            desc: 'Hollywood is a neighborhood in the central region of Los Angeles County, California',
        },
        {
            id: 7,
            image: '/images/usa/7.jpg',
            title: "Beach",
            desc: 'A beach is a landform alongside a body of water which consists of loose particles.',
        },
        {
            id: 8,
            image: '/images/usa/8.jpg',
            title: "New-York",
            desc: 'The company was accused of attempting to prevent the establishment of works councils.',
        },
    ]
}

function reducer (state = initialState, { type, payload }) {
  switch (type) {

  default:
    return state
  }
}

export default reducer;