import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fakeUserData } from "../api";
import DisplayUsers from "../components/DisplayUsers";
import { addUser } from "../store/slices/UserSlice";
import { DeleteAllUser } from "./DeleteAllUser";
import ErrorBoundary from "./ErrorBoundary";

const UserDetails = () => {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    console.log(payload);
    dispatch(addUser(payload));
  };

  return (
    <ErrorBoundary> {}
      <Wrapper>
        <div className="content">
          <div className="admin-table">
            <div className="admin-subtitle">List of User Details</div>
            <button className="btn add-btn" onClick={() => addNewUser(fakeUserData())}>
              Add New Users
            </button>
          </div>
          <ul>
            <DisplayUsers />  {}
          </ul>
          <hr />
          <DeleteAllUser />
        </div>
      </Wrapper>
    </ErrorBoundary>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 3.2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;


// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
// import { fakeUserData } from "../api";
// import { addUser, removeUser } from "../store/slices/UserSlice";
// import { DeleteAllUser } from "./DeleteAllUser";
// import ErrorBoundary from "./ErrorBoundary";

// const UserDetails = () => {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users);

//   const addNewUser = (payload) => {
//     console.log(payload);
//     dispatch(addUser(payload));
//   };

//   const deleteUser = (id) => {
//     dispatch(removeUser(id));
//   };

//   return (
//     <ErrorBoundary>
//       <Wrapper>
//         <div className="content">
//           <div className="admin-table">
//             <div className="admin-subtitle">List of User Details</div>
//             <button className="btn add-btn" onClick={() => addNewUser(fakeUserData())}>
//               Add New User
//             </button>
//           </div>
//           <ul>
//             {users.length > 0 ? (
//               users.map((user, id) => (
//                 <li key={id} className="user-item">
//                   {user}
//                   <button className="btn-delete" onClick={() => deleteUser(id)}>
//                     🗑
//                   </button>
//                 </li>
//               ))
//             ) : (
//               <p>No users found</p>
//             )}
//           </ul>
//           <hr />
//           <DeleteAllUser />
//         </div>
//       </Wrapper>
//     </ErrorBoundary>
//   );
// };

// const Wrapper = styled.section`
//   margin: 1rem 3.2rem;
//   .content ul {
//     list-style-type: none !important;
//     display: flex;
//     flex-direction: column;
//   }
//   .user-item {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 0.5rem;
//     border-bottom: 1px solid #ccc;
//   }
//   h3 {
//     margin: 0;
//   }
//   .admin-table {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     margin: 4rem 0;
//   }
//   .admin-subtitle {
//     font-size: 3.2rem;
//   }
//   .delete-btn {
//     background-color: transparent;
//     border: none;
//   }
//   .delete-icon {
//     font-size: 2.6rem;
//     color: #f12711;
//     filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
//     cursor: pointer;
//   }
//   @media screen and (max-width: 998px) {
//     .admin-subtitle {
//       margin-bottom: 1.6rem;
//     }
//   }
// `;

// export default UserDetails;
