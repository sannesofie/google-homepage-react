import {Link} from './link/Link'

const links = ['Gmail', 'Images'];

export const NavigationRight = () => {
    return (
        <div className="nav-bar-second-item">
            {links.map((link)=>{   
                return <Link key={link} value={link}/> 
            })}
        </div>
    )
}
