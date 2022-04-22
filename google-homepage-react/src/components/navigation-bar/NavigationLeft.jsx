import {Link} from './link/Link'

const links = ['About', 'Store'];

export const NavigationLeft = () => {
    return (
        <div className="nav-bar-first-item">
            {links.map((link)=>{   
                return <Link key={link} value={link}/> 
            })}
        </div>
    )
}