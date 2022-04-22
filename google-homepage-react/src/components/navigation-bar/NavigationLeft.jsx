
const links = ["About", "Store"];

export const NavigationLeft = () => {
  return (
    <div className="nav-bar-first-item">
      {links.map((link) => {
        return (link)
      })}
    </div>
  );
};
