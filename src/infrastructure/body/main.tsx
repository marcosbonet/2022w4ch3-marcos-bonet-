import { Card } from "./Card";

export function Main() {
    return (
        <div className="app container">
            <ul className="characters-list row list-unstyled">
                {" "}
                <Card></Card>
            </ul>
        </div>
    );
}
