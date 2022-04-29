
const links = ["About", "Store"];


export const NavigationLeft = () => {
return (
    <ul className="nav-bar-first-item">
    {links.map((items) => {
        return (<a class="navbar-child-item" href="#0"><li>{items}</li></a>)
    })}
    </ul>
);
};
