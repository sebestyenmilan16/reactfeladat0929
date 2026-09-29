import React from "react";
import MainCard from "./MainCard";
export default class MainContent extends React.Component {



    render() {
        return <main className="main-content" id="main-content">
    
    <div className="card-row">
        {/* TODO - implement MainCard component */}

        <MainCard cardstyle = "main-card" title = "First Card Title" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium, massa eu pretium vestibulum, enim nulla cursus massa, ullamcorper dictum nisi nisi nec odio." />
        <MainCard cardstyle = "card" title = "Second Card Title" content="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eget velit vitae neque pretium feugiat." />
        <MainCard cardstyle = "card" title = "Third Card Title" content="Quisque facilisis urna a massa varius, a feugiat massa consectetur. Curabitur rutrum nunc vitae velit convallis, nec luctus mi cursus." />

    </div>
  </main>
    }

}