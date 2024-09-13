import {useParams} from "react-router-dom";

const Page1 = () => {
    const {txt} = useParams();
    console.log(txt)

    return (
        <section className="content" id="page1">
            <h1 className="body">페이지1번 내용</h1>
            <h3>Hello!</h3>
        </section>
    )
}

export default Page1;