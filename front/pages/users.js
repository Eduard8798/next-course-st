import fetch from 'isomorphic-unfetch';

import Link from "next/link";
import MainContainer from "../components/MainContainer.js";

const Users = ({users}) => {

    return (
        <MainContainer keywords={'mainUser'}>
            <h1>Page users</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <p>{user.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
    const users = await response.json()

    return {
        props: {users},
    }
}
