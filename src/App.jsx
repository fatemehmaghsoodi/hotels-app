import { Route, Routes } from 'react-router-dom'
import AppLayout from './pages/AppLayout'
import Hotel from './component/Hotel'
import Layout from './component/Layout'
import Home from './pages/Home'
import Hotels from './component/Hotels'
import HotelProvider from './context/HotelProvider'
import BookmarkLayout from './pages/Bookmarks'
import AddBookmark from './component/AddBookmark'
import BookmarkList from './component/BookmarkList'
import BookmarkProvider from './context/BookmarkProvider'
import SingleBookmark from './component/SingleBookmark'

function App() {

  return (
    <BookmarkProvider>
    <HotelProvider>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="/hotels" element={<AppLayout/>}>
          <Route index element={<Hotels/>} />
          <Route path=":id" element={<Hotel/>}/>
        </Route> 
        <Route path='/bookmark' element={<BookmarkLayout/>}>
            <Route index element={<BookmarkList/>}/>
            <Route path='add' element={<AddBookmark/>} />
            <Route path=':id' element={<SingleBookmark/>}/>
        </Route> 
      </Route>
    </Routes>
    </HotelProvider>
    </BookmarkProvider>
  )
}

export default App
