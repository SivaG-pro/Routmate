import { useNavigate } from "react-router-dom"
export  function ProductDetails() {
    const nav=useNavigate();
    function handlesubmit(){
        nav("/")
    }
  return (
    <div>
      Product Details
      <button onClick={handlesubmit}>Back</button>
    </div>
  )
}
