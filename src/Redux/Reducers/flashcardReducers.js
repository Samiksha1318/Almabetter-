
const Initial_Values = {
    cards: localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
}

const FC_Reducers = (state = Initial_Values, action) => {
    switch (action.type) {
        case "CREATE_GROUP":

            const { id, data } = action.payload;
                localStorage.setItem("data",JSON.stringify([...state.cards,{id,...data}]))
            return {

                cards: [
                    ...state.cards,
                    {
                        id,
                        ...data
                    }
                ]
            }


        case "DELETE_GROUP":

            const newCards = state.cards.filter((elem) => elem.id !== action.id)
            localStorage.setItem("data",JSON.stringify([...newCards]))

            return {
                ...state,
                cards:newCards
                
            }

        default: return state

    }
}


export default FC_Reducers;