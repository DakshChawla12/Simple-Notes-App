import {Link} from 'react-router-dom';

const SideBar = ({selectedTab,setSelectedTab}) => {

    return (<>
        <div className="side-bar">
            <Link to='/' onClick={()=>setSelectedTab("Home")}> <h2>Categories</h2></Link>

            <ul>
                <Link to='/personal'><li onClick={()=>setSelectedTab("personal")} className={selectedTab==="personal"&&"active"}>Personal</li><hr /></Link>
                <Link to='/work'><li onClick={()=>setSelectedTab("work")} className={selectedTab==="work"&&"active"}>Work</li><hr /></Link>
                <Link to='/misc'><li onClick={()=>setSelectedTab("misc")} className={selectedTab==="misc"&&"active"}>Miscellaneous
                </li><hr /></Link>
            </ul>
        </div>
    </>);

}

export default SideBar;