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
                        to='task-list'
                    >Task List</NavLink>
                </li>
                <li>
                    <NavLink
                        className={({isActive}) => isActive ? 'active' : undefined }
                        to='task-list-v2'
                    >Task List V2</NavLink>
                </li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;