const INITIAL_STATE = { mood: ":|" };

function moodReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case "happy":
            return { ...state, mood: ":)"};
        case "sad":
            return { ...state, mood: ":("};
        case "surprised":
            return { ...state, mood: ":O"}
        case "blank":
            return { ...state, mood: ":|"}
    }
}

const store = Redux.createStore(moodReducer);

window.onload = function() {
    document.querySelector("#happy")
        .addEventListener("click", function() {
            store.dispatch({ type: "happy"})
            console.log(store.getState().mood)
        })
    document.querySelector("#sad")
        .addEventListener("click", function() {
            store.dispatch({ type: "sad"})
            console.log(store.getState().mood)
        })
    document.querySelector("#surprised")
        .addEventListener("click", function() {
            store.dispatch({ type: "surprised"})
            console.log(store.getState().mood)
        })
    document.querySelector("#blank")
        .addEventListener("click", function() {
            store.dispatch({ type: "blank"})
            console.log(store.getState().mood)
        })
}



