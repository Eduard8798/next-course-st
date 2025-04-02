import {useRouter} from "next/router";
import styles from '../../styles/User.module.scss'
import fetch from "isomorphic-unfetch";
import MainContainer from "../../components/MainContainer.js";

export default function ({user}) {
const {query} = useRouter()

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>User id {query.id}</h1>
                <div>name user - {user.name}</div>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json()
    return {
        props: {user},
    }
}
