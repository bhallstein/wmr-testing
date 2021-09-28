import {h, render} from 'preact'
import {XIcon} from '@heroicons/react/solid'
import Otter from 'otter-editor'

function App() {
  return (
    <div>
      An icon:
      <br />
      <span style={{display: 'inline-block', color: 'black', width: '1rem'}}>
        <XIcon />
      </span>
    </div>
  )
}

render(<App />, document.body)
