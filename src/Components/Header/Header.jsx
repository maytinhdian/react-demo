import "./header.css"
const Header = (props) => {
    const {setEdit} = props;
    const handleEdit =()=>{
        setEdit(true);
    }
    return (
        <header style={{backgroundColor:"#ff9051", backgroundImage:'linear-gradient(180deg,#ff9051 2%,#ff9051,65%,#181818 100%)' }}>
            <div className="info-container">
                <div className="info-edit" onClick={handleEdit}>
                    Edit
                </div>
                <img src="https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d" alt="" className="info-ava" />
                <div className="info-username">Le Thanh Nha</div>
                <div className="info-about">Softwares Support IT</div>
            </div>
        </header>
    );
};

export default Header;
