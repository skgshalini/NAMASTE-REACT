/* <div id="parent">
    <div id="child">
      <h1>
          Hello
      </h1>
      <h1>
          Shalini !!!
      </h1>
    </div>
</div> */

const heading = React.createElement("div",{id:"parent",class:"cls"},
React.createElement("div",{id:"child"},[React.createElement("h1",{style:{display:"inline"}},"Hello"),React.createElement("h1",{style:{display:"inline"}}," World!")]));
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);