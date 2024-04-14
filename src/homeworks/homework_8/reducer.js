
export const initialState = {
  arr: [98,32,90,5,43,12,12,98,484],
  todos: [],
  products: [
    {
      id: 1,
      name: 'Iphone',
      image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-155689/Apple-iPhone-15-Pro-Max_-blue-titanium_featured-image-packshot-review.jpg',
      price: 1230
    },
    {
      id: 2,
      name: 'Samsung',
      image: 'https://allcell.am/wp-content/uploads/2024/01/dcc17706b546dade7c36f2e943ee46e5.jpg',
      price: 1100
    },
    {
      id: 3,
      name: 'Xiaomi',
      image: 'https://hotline.ua/img/tx/376/3768458655.jpg',
      price: 1000
    },
    {
      id: 4,
      name: 'Poco',
      image: 'https://adminapi.applegadgetsbd.com/storage/media/large/POCO-X6-5G-Blue-9759.jpg',
      price: 920
    }
  ],
  total: 18
}

const costums = {
  handledelete(products, id) {
    const newProducts = products.filter(elem => elem.id !== id  )
    return [...newProducts]
  },
  handleSort(...arr){
    const newArr = arr.toSorted((a,b) => a - b)
    return [...newArr]
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'add-todos': return{...state, todos: action.payload}
    case 'delete': return{...state, products: costums.handledelete(...state.products)}
    case 'sort': return {...state, arr: costums.handleSort(...state.arr)}
    
    default:
  }
}