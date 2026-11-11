import './App.css'
import ali from './assets/ali.jpg'

function App() {

  return (
    <>
      <h1>Exploring Natural Wonders</h1>

      <p>
        Discover the awe-inspiring beauty of natural landscapes across the global, from the <b>Victoria Falls</b> in zimbabwe to the captivting <b>Aurora Borealis</b> visible in various countries.
      </p>

      <h2>Natural Wonders</h2>

      <ol>
        <li>Victoria Falls, Zimbabwe</li>
        <li>Grand Canyon, USA</li>
        <li>Aurora Borealis, Various Countries</li>
        <li>Mount Everset, Nepal</li>
        <li>Great Barrier Reef, Australla</li>
      </ol>

      <p>
        "Nature always wears the color of the sprit."
        <i>-Ralph Woldo Emerson</i>
      </p>

      <h2>Benifits of Experiencing Natural Beauty</h2>

      <ul>
        <li>Fostering a sense of wonder</li>
        <li>Deepening apprection for the planet</li>
        <li>Creating lasting memories</li>
      </ul>

      <h2>Discover More</h2>
      
<img src={ali} alt="Natural Wonders" />

<p>The Majestic Victoria Falls</p>

<a href="Explore more natural wonders">Explore more natural wonders</a>
    </>
  )
}

export default App