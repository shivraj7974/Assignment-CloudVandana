import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { removeUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
     return state.users 
    });

  // console.log(data);

    //  throw new Error("Error in DisplayUsers"); // Test Error Boundary

  const deleteUser = (id) => {
  dispatch(removeUser(id))                    // ye user ko remove krr dega
}

  return (
    <Wrapper>
      {data.length > 0 ? (
        data.map((user, id) => (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        ))
      ) : (
        <p>No users found</p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 20px;
  background: lightgray;
  list-style: none;
`;

export default DisplayUsers;

