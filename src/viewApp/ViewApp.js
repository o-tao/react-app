import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom';
import './ViewApp.css';
import {useEffect, useState} from "react";
import {useInView} from 'react-intersection-observer';
import {useInfiniteQuery} from "@tanstack/react-query";

const getData = async page => {
    // const response = await fetch(`/${page}.json`);
    const host = "http://localhost/";
    // const response = await fetch(`${host}/api?page=${page}`); // http://localhost/api?page=1 URL주소
    const response = await fetch(host + page); // http://localhost/api?page=1 URL주소
    return response.json();
};

const usePaging = (url) => {
    return useInfiniteQuery({
        queryKey: [''],

        queryFn: ({pageParam}) => {
            return getData(url + pageParam);
        },

        getNextPageParam: (last) => {
            if (last.page < last.total_pages) {
                return last.page + 1;
            }
            return undefined;
        },

        initialPageParam: 1
    })
};

const View1 = () => {
    const [array, setArray] = useState([]);

    useEffect(() => {
        const data = ["내용", "내용", "내용", "내용", "내용"];
        setArray(data);
    }, []);

    const clickEvent = () => {
        const data = ["내용", "내용", "내용", "내용", "내용"];
        setArray([...array, ...data]); // ... -> array[0] ~ array[4]가 기존에 있을 때 "내용"을 신규 배열에 넣기위해 사용
    };

    return (
        <div className="container">
            <h1 className="head">화면1</h1>
            <ol className="body">
                {
                    array.map((row, index) => <li key={index}>{row}</li>)
                }
            </ol>
            <button type="button" className="more" onClick={clickEvent}>더보기</button>
        </div>
    );
}

const View2 = () => {
    const [array, setArray] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const response = getData(`data${nextPage}`);
        response.then(data => {
            setArray([...array, ...data.results]);
            if (data.page === data.total_pages) {
                setShow(true);
            }
        });
        // response.catch(error => console.log(error)); // 에러처리
    }, [nextPage]);

    const clickEvent = () => {
        setNextPage(nextPage + 1);
    };

    return (
        <div className="container">
            <h1 className="head">화면2</h1>
            <ol className="body">
                {
                    array.map((row, index) => <li key={index}>{row.name}</li>)
                }
            </ol>
            <button disabled={show} type="button" className="more" onClick={clickEvent}
                    style={{display: show ? 'none' : ' '}}>더보기
            </button>
        </div>
    );
}

const View3 = () => {
    const [array, setArray] = useState([]);
    const [nextPage, setNextPage] = useState(1);
    const {ref, inView} = useInView();
    const [total, setTotal] = useState(3);

    useEffect(() => {
        if (inView && nextPage <= total) {
            const response = getData(`data${nextPage}`);
            response.then(data => {
                setArray([...array, ...data.results]);
                setNextPage(data.page + 1);
                setTotal(data.total_pages);
            });
        }
        // response.catch(error => console.log(error)); // 에러처리
    }, [inView]);

    return (
        <div className="container">
            <h1 className="head">화면3</h1>
            <ol className="body">
                {
                    array.map((row, index) => <li style={{padding: '30px 0'}} key={index}>{row.name}</li>)
                }
            </ol>
            <button type="button" className="more" ref={ref}>더보기</button>
        </div>
    );
}

const View4 = () => {
    const {data, fetchNextPage, hasNextPage} = usePaging("data");
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return (
        <div className="container">
            <h1 className="head">화면4</h1>
            <ol className="body">
                {
                    data?.pages.map((page) => {
                        return page.results.map((row, index) => {
                            return (
                                <li style={{padding: '100px 0'}} key={row.id}>{row.name}</li>
                            )
                        })
                    })
                }
            </ol>
            <button type="button" className="more" ref={ref} style={{display: hasNextPage ? "" : "none"}}>더보기
            </button>
        </div>
    );
}

const View5 = () => {
    const {data, fetchNextPage, hasNextPage} = usePaging("api?page=");
    const {ref, inView} = useInView();

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView]);

    return (
        <div className="container">
            <h1 className="head">화면5</h1>
            <ol className="body">
                {
                    data?.pages.map((page) => {
                        return page.results.map((row, index) => {
                            return (
                                <li style={{padding: '100px 0'}} key={row.id}>{row.name}</li>
                            )
                        })
                    })
                }
            </ol>
            <button type="button" className="more" ref={ref} style={{display: hasNextPage ? "" : "none"}}>더보기
            </button>
        </div>
    );
}

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
            <h1 className="head">화면 목록</h1>
            <ul className="body">
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view1')}>화면1</button>
                </li>
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view2')}>화면2</button>
                </li>
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view3')}>화면3</button>
                </li>
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view4')}>화면4</button>
                </li>
                <li>
                    <button type='button' className='link' onClick={() => navigate('/view5')}>화면5</button>
                </li>
            </ul>
        </div>
    );
}
const ViewApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/view1" element={<View1/>}/>
                <Route path="/view2" element={<View2/>}/>
                <Route path="/view3" element={<View3/>}/>
                <Route path="/view4" element={<View4/>}/>
                <Route path="/view5" element={<View5/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default ViewApp;
