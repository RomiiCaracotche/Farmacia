import "./style.css";
import Header from "../Header";
import SubHeader from "../SubHeader";

const HeaderFull = () => {
    return (
        <div className="header">
            <Header/>
            <SubHeader/>
        </div>
    )
}

export default HeaderFull;