
import AllMeetup from './pages/AllMeetup';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
import {
   Route,
   Routes
} from "react-router-dom";
import Layout from './components/layout/Layout';

function App() {
  return (

 
      <Layout>

      <Routes>
        
          <Route path='/' exact element={<AllMeetup/>}/>
          <Route path='/newMeetup' element={<NewMeetup/>}/>
          <Route path='/favorites' element={<Favorites/>}/>

    
      </Routes>
      </Layout>

 
    )

}

export default App;
