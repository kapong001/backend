import React from 'react'
import Layout from "../components/Layout";
import { useAuth } from '../context/auth';
import UserMenu from '../components/UserMenu';

const DashboardPage = () => {
  const [auth] = useAuth();

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3 " style={{borderRadius: 0}}>
              <h4>Name : {auth?.user?.name}</h4>
              <h4>Email : {auth?.user?.email}</h4>
              <h4>Contact : {auth?.user?.contact}</h4>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
