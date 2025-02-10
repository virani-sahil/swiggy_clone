import Category from "./Category"
import Foodoption from "./Foodoption"
import Header from "./Header"
import Restaurant from "./Restaurant"

const Home = () => {
  return (
    <div className='px-3 md:px-10'>
        <Header />
        <Category />
        <Restaurant />
        <Foodoption />
      </div>
  )
}

export default Home