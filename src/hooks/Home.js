import {useNavigate} from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const list = [
        {name:'useState', url: '/state/1'}, 
        {name:'useEffect', url: '/effect/1'},
        {name:'useRef', url: '/ref/1'},
        {name:'useContext', url: '/context/1'},
        {name:'useReducer', url: '/reducer/1'},
        {name:'useCallback', url: '/callback/1'},
        {name:'useMemo', url: '/memo/1'},
        {name:'Custom Hooks', url: '/customHooks/1'}
    ];
    return (
        <ol style={{paddingLeft: '20px'}}>
            {
                list.map((row, index) =>  
                    <li key={index} style={{cursor: "pointer"}} onClick={()=>navigate(row.url)}>{row.name}</li>
                )
            }
        </ol>
    );
}

export default Home;