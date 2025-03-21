import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [] ,
    reducers : {
        addUser(state, action) {
            state.push(action.payload);// will push the end data
            // console.log(action.payload);
        } ,
        removeUser(state, action) {
            // console.log("hi" + action.payload)
            // state.pop(action.payload)
            state.splice(action.payload, 1)

        } ,
        deleteUsers(state, action) {},
    },
});

console.log(userSlice.actions.addUser());

export default userSlice.reducer ;
export const { addUser,removeUser } = userSlice.actions ;


// import { createSlice } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "users",
//   initialState: [],
//   reducers: {
//     addUser: (state, action) => {
//       state.push(action.payload);
//     },
//     removeUser: (state, action) => {
//       return state.filter((user) => user.id !== action.payload);
//     },
//   },
// });

// export const { addUser, removeUser } = userSlice.actions;
// export default userSlice.reducer;
