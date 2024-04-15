export const initialState = {
    planets: [
        {
            id: 1,
            image: "/images/1.jpg",
            title: "University",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi accusantium eligendi ullam nobis quo nesciunt eos culpa at soluta?",
        },
        {
            id: 2,
            image: "/images/2.jpg",
            title: "Beauty is unbelievable",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi accusantium eligendi ullam nobis quo nesciunt eos culpa at soluta?",
        },
        {
            id: 3,
            image: "/images/3.jpg",
            title: "Beautiful sky",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi accusantium eligendi ullam nobis quo nesciunt eos culpa at soluta?",
        },
        {
            id: 4,
            image: "/images/4.jpg",
            title: "Space",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi accusantium eligendi ullam nobis quo nesciunt eos culpa at soluta?",
        },
        {
            id: 5,
            image: "/images/5.jpg",
            title: "Earth",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non commodi accusantium eligendi ullam nobis quo nesciunt eos culpa at soluta?",
        }
    ],
};

function reducer (state = initialState, { type, payload }) {
  switch (type) {

      
      
  default:
    return state
  }
}

export default reducer;