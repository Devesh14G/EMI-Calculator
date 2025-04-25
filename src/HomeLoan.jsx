import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS,ArcElement,Tooltip,Legend,} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const HomeLoan = () => {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(12);
  const [tenure, setTenure] = useState(3);
  const [emi, setEmi] = useState(null);
  const [totalInterest, setTotalInterest] = useState(0);

  const MAX_PRINCIPAL = 50000000;
  const MAX_RATE = 20;
  const MAX_TENURE_YEARS = 12;

  useEffect(() => {
    const P = principal;
    const R = rate / 12 
    const N = tenure * 12;

    if (P && R && N) {
      const emiCalc = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
      const totalPayment = emiCalc * N;
      const interest = totalPayment - P;

      setEmi(emiCalc.toFixed(2));
      setTotalInterest(interest.toFixed(2));
    } else {
      setEmi(null);
      setTotalInterest(0);
    }
  }, [principal, rate, tenure]);

  const chartData = {
    labels: ['Principal Amount', 'Total Interest'],
    datasets: [
      {
        data: [principal, parseFloat(totalInterest)],
        backgroundColor: ['#156596', '#FF6384'],
        hoverOffset: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
   <>
     
     <div className="container">
      <h1 className=" m-4">EMI Calculator for Home Loan, Car Loan & Personal Loan in India</h1>
        <div className="row">
            <div className="col-md-6 my-5">
            <div className="card">
                <div className="card-body">
                <div className="container" style={{ maxWidth: '700px', margin: 'auto' }}>

{/* Principal Slider */}
<label>
  Loan Amount ₹ : ₹{principal.toLocaleString()} / ₹{MAX_PRINCIPAL.toLocaleString()}
</label>
<input
  type="range"
  min="0"
  max={MAX_PRINCIPAL}
  step="10000"
  value={principal}
  onChange={(e) => setPrincipal(parseInt(e.target.value))}
  style={{ width: '100%' }}
  className='m-3'
/>
<br />

{/* Interest Rate Slider */}
<label>
  Interest Rate % : {rate}% / {MAX_RATE}%
</label>
<input
  type="range"
  min="0"
  max={MAX_RATE}
  step="0.1"
  value={rate}
  onChange={(e) => setRate(parseFloat(e.target.value))}
  style={{ width: '100%' }}
  className='m-3'

/>
<br />

{/* Tenure Slider */}
<label>
  Tenure (Years): {tenure} / {MAX_TENURE_YEARS} years
</label>
<input
  type="range"
  min="0"
  max={MAX_TENURE_YEARS}
  value={tenure}
  onChange={(e) => setTenure(parseInt(e.target.value))}
  style={{ width: '100%' }}
  className='m-3'

/>
<br />


{emi && (
  <>
    <div className='row my-3'>
       <div className='col-md-4'>
       <h5>Monthly EMI: <br/> ₹{emi}</h5>
       </div>
       <div className='col-md-4'> 
    <h5>Total Interest:<br/> ₹{parseFloat(totalInterest).toLocaleString()}</h5>
       </div>
       <div className='col-md-4'> 
        <h5>Total Payment: <br/> ₹{(parseFloat(emi) * tenure * 12).toLocaleString()}</h5>
      </div>
      </div>

  
  </>
)}
</div>
                </div>
            </div>
            </div>
            <div className="col-md-6 py-5">

          <div  style={{minHeight: "400px" , maxWidth: "350px"}}> 
            <Pie data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
     </div>
     
   </>
  );
};

export default HomeLoan;
