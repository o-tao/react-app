import './File.css';

const file = () => {
    return (
        <>
            <header>
                <h1 className="text-center">파일업로드</h1>
            </header>
            <form>
                <div className="input-body">
                    <label form="title">그림</label>
                    <input accept="image/*" autoComplete="off" name="file" type="file"/>
                </div>
                <div className={"input-body"}>
                    <input type="submit" value="전송"/>
                </div>
            </form>
            <div className={"imgs"}>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
                <img className="img" src='https://avatars.githubusercontent.com/u/20333260?v=4' alt={"test"}></img>
            </div>
        </>
    );
};

export default file;
