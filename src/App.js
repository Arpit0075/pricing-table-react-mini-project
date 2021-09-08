import "./App.css";
import Package from "./Package";

function App() {
  return (
    <div classNameName="App">
      <section className="pricing py-5">
        <div className="container">
          <Package
            title={"Free"}
            price={0}
            user={"Single"}
            storage={5}
            projects={"No"}
            phoneSup={"No"}
            subDom={"No"}
            report={"No"}
          />
          <Package
            title={"Plus"}
            price={9}
            user={5}
            storage={50}
            projects={"Yes"}
            phoneSup={"Yes"}
            subDom={"Yes"}
            report={"No"}
          />
          <Package
            title={"Pro"}
            price={49}
            user={"Unlimited"}
            storage={150}
            projects={"Yes"}
            phoneSup={"Yes"}
            subDom={"Unlimited"}
            report={"Yes"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
