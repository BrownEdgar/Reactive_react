export const initialState = {
    acrions: 0,
    developers: [],
    posts: [],
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

const changeId = (state) => {
    const result = state.posts.map((post, index) => {
        post.id = state.arr[index];
        return post
    })
    return { ...state, posts: result}
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'add-posts': return ({ ...state, posts: action.payload })
        case 'change-id': return changeId(state);
        case 'delete-by-id': return {...state, arr: arr.filter(elem => elem !== action.payload)}
        default:return state;
    }
}

export default reducer;