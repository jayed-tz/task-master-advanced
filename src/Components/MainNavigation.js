import {Link, NavLink} from "react-router-dom";
const MainNavigation = () => {
    return <header>
        <nav>
            <ul>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active' : undefined }
                        to='/'
                        end
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active' : undefined }
                        to='/task-list'
                        end
                    >Task List</NavLink>
                </li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;