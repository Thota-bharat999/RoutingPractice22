// Write your JS code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-img"
      />
      <h1 className="not-heading">Not Found</h1>
    </div>
  </>
)

export default NotFound
