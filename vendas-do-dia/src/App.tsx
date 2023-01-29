import { SalesProvider } from './common/contexts/Sales/SalesProvider'
import { Index } from './pages/Index'

function App() {
  return (
    <SalesProvider>
      <Index />
    </SalesProvider>
  )
}

export default App
