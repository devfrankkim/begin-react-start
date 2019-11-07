import React from 'react';

function User({user, index}) {
    return (
        <>
        <ul>
            <li key={index}> 
                <b>[{user.id}]{user.username} : {user.email}</b> 
            </li>
         </ul>
        </>
    );
}

function UserList(){
    
    const users = [
        {
            id: 0,
            username : '홍길동',
            email: 'hong@naver.com'
        },
        {
            id: 1,
            username : 'kim',
            email: 'kim@naver.com'
        },
        {
            id: 2,
            username : 'lee',
            email: 'lee@naver.com'
        },
    ]

    return(
        <>
            {
                users.map((user, index) => (
                  <User user={user} key={index} />
                ))
            }
        </>
    )
}

export default UserList;

            // {/* <ul>
            //     <li>
            //     [{users[0].id}]
            //     {users[0].username} : {users[0].email}</li>
            // </ul> */}