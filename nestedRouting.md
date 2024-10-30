
```import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='user' element={<UserComp />} />
          <Route path='profile' element={<ProfileComp />} />
          <Route path='feedback' element={<FeedBack />} />
          <Route />
        </Route>
      </Routes>


    </>
  )
}


function Dashboard() {
  return (
    <>
      <ul>
       <Link to={'user'}><li>user</li></Link> 
       <Link to={'profile'}><li>profile</li></Link> 
       <Link to={'feedback'}><li>Feedback</li></Link> 
      </ul>
      <Outlet />
    </>
  )
}

function FeedBack(){
  return <h1>Feedback Compo</h1>
}


function UserComp() {
  return (
    <h2>User Component</h2>
  )
}

function ProfileComp() {
  return (
    <h2>Profile Component</h2>
  )
}

export default App```

