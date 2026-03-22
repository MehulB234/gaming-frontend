import Game from "../components/Game";

const Catalog = () => {
    return (
        <main id="Houses" className="main-content">
            <h2>Games</h2>
            <div id="houses" className="columns">
                <Game 
                    title="Cabin"
                    description="Outdoor getaway" />
                <Game 
                    title="Farm House"
                    description="Chickens..."/>
                <Game 
                    title="Modern Home"
                    description="Lots of corners" />
            </div>
        </main>
    );
};

export default Catalog;