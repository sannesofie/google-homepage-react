

const links = ['Gmail', 'Images'];

export const NavigationRight = () => {
    return (
        <ul className="nav-bar-second-item">
            {links.map((items)=>{   
                return (<a class="navbar-second-item" href="#0"><li>{items}</li></a>) 
            })}
        </ul>
        
    )
}
