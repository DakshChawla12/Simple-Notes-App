import {Link} from 'react-router-dom';

const SideBar = () => {

    return (<>
        <div className="side-bar">
            <Link to='/'> <h2>Categories</h2></Link>

            <ul>
                <Link to='/personal'> <li>Personal</li><hr /></Link>
                <Link to='/work'> <li>Work</li><hr /></Link>
                <Link to='/misc'> <li>Miscellaneous
                </li><hr /></Link>
            </ul>
        </div>
    </>);

}

export default SideBar;