import { SalesProvider } from './common/contexts/Sales/SalesProvider'
import { ShowComponentsProvider } from './common/contexts/ShowComponents/ShowComponents'
import { Index } from './pages/Index'

function App() {
  return (
    <ShowComponentsProvider>
      <SalesProvider>
        <Index />
      </SalesProvider>
    </ShowComponentsProvider>
  )
}

export default App
