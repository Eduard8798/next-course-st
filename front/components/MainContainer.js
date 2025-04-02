import A from "./A.js";
import Head from "next/head.js";

const MainContainer = ({children,keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"ulbi tv,next js" + keywords}></meta>
                <title>General page</title>
            </Head>
            <div className={'navbar'}>
        <A href={'/'} text={'General'}/>
        <A href={'/users'} text={'Users'}/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                            .navbar {
                                background: antiquewhite;
                                padding: 15px;
                            }

                        `}
            </style>
        </>
    );
};

export default MainContainer;
