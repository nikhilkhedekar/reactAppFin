import Footer from './footer'
import Header from './header'
import Navi from './Navi'

const App = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Navi />
            </div>
            <hr />
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App