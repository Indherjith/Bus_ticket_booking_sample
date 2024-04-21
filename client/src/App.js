import Seat from './seat';
import './App.css';
import Proceed from './Proceed';

function App() {
  localStorage.setItem("seats",JSON.stringify([]))
  const Lbed = [
    {id:"LB01",seat:"LB01",available:true,cost:800},
    {id:"LB02",seat:"LB02",available:true,cost:800},
    {id:"LB03",seat:"LB03",available:true,cost:800},
    {id:"LB04",seat:"LB04",available:true,cost:800}
  ]

  const seater = [
    {id:"LS01",seat:"LS01",available:true,cost:500},
    {id:"LS02",seat:"LS02",available:true,cost:500},
    {id:"LS03",seat:"LS03",available:true,cost:500},
    {id:"LS04",seat:"LS04",available:true,cost:500},
    {id:"LS05",seat:"LS05",available:true,cost:500},
    {id:"LS06",seat:"LS06",available:true,cost:500},
    {id:"LS07",seat:"LS07",available:true,cost:500},
    {id:"LS08",seat:"LS08",available:true,cost:500},
    {id:"LS09",seat:"LS09",available:true,cost:500},
    {id:"LS10",seat:"LS10",available:true,cost:500},
    {id:"LS11",seat:"LS11",available:true,cost:500},
    {id:"LS12",seat:"LS12",available:true,cost:500},
    {id:"LS13",seat:"LS13",available:true,cost:500},
    {id:"LS14",seat:"LS14",available:true,cost:500},
    {id:"LS15",seat:"LS15",available:true,cost:500},
    {id:"LS16",seat:"LS16",available:true,cost:500},
  ]
  const Ubed_Section2 = [
    {id:"UB01",seat:"UB01",available:true,cost:700},
    {id:"UB02",seat:"UB02",available:true,cost:700},
    {id:"UB03",seat:"UB03",available:true,cost:700},
    {id:"UB04",seat:"UB04",available:true,cost:700},
    {id:"UB05",seat:"UB05",available:true,cost:700},
    {id:"UB06",seat:"UB06",available:true,cost:700},
    {id:"UB07",seat:"UB07",available:true,cost:700},
    {id:"UB08",seat:"UB08",available:true,cost:700}
  ]

  const Ubed_Section1 = [
    {id:"UBL1",seat:"UBL1",available:true,cost:700},
    {id:"UBL2",seat:"UBL2",available:true,cost:700},
    {id:"UBL3",seat:"UBL3",available:true,cost:700},
    {id:"UBL4",seat:"UBL4",available:true,cost:700}
  ]

  return (
    <div className="App">
      <div className="LowerBerth">
        <h1>Lower Berth</h1>
        <div className="LowerBerth1">
          <div className="Lbed">
            {
              Lbed.map((item)=>(
                <div key={item.id} className="seats">
                <Seat {...item}  />
                </div>
              ))
            }
          </div>
          <div></div>
          <div className="seater">
            {
              seater.map((item)=>(
                <div key={item.id} className="seats1">
                  <Seat {...item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="UpperBerth">
        <h1>Upper Berth</h1>
        <div className='UpperBerth1'>
        <div className="Ubed_Section1">
            {
              Ubed_Section1.map((item)=>(
                <div key={item.id} className="seats">
                <Seat {...item}  />
                </div>
              ))
            }
          </div>
          <div></div>
          <div className="Ubed_Section2">
            {
              Ubed_Section2.map((item)=>(
                <div key={item.id} className="seats">
                <Seat {...item}  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div style={{width:"100%",position:"absolute",top:"95vh",padding:"30px 0px",textAlign:"center"}}>
        <Proceed/>
      </div>      
    </div>
  );
}

export default App;
