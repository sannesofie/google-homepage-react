const buttons = ["Google Search", "I`m Feeling Lucky"];



export const Buttons = () => {
return (
    <div className="buttons">
    {buttons.map((items) => {
        return <button>{items}</button>;
    })}
    </div>
);
};
