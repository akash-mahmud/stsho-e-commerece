import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation  , MeQuery, MeDocument } from '../generated/graphql';
import { toErrorMap } from "../utils/toErrorMap";
interface User {
  usernameOrEmail: string;
  password : string
}
export default function Login() {
  const [userInfo, setuserInfo] = useState<User>({
    usernameOrEmail: "",
    password:""
  })

const navigate = useNavigate()

  const [login] = useLoginMutation();


  const loginDataSubmit = async(e:any  ) => {
    e.preventDefault()
    const values = { ...userInfo }

    
    const response = await login({
      variables: values,
      update: (cache, { data }) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: {
            __typename: "Query",
            me: data?.login.user,
          },
        });
        cache.evict({ fieldName: "posts:{}" });
      },
    });

    if (response.data?.login.errors) {
      // setErrors(toErrorMap(response.data.login.errors));
    }
    else if (response.data?.login.user) {
      if (typeof 'data' === "string") {
        // router.push(router.query.next);
        // navigate("/");
      } else {
        // worked
        console.log('Logged in');
        
        // navigate("/");
      }
    }
    }

  return (
    <>
     <Helmet>
        <title>Stshio Admin - Login</title>
  
   
      </Helmet>  
       <div className="page-header">
            <h3 className="page-title">
           
            </h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/"></a></li>
                <li className="breadcrumb-item active" aria-current="page"></li>
                </ol>
            </nav>
          </div>
      <div className="row">
        
           <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Login</h4>
                  <p className="card-description">
                  
              </p>
              <div className="col-md-12">
                <div style={{
                  margin: '0 auto',
                  width:'50%'
                }}>
                  
                  <form method='POST' onSubmit={loginDataSubmit} className="forms-sample">
                  
                    <div className="form-group">
                      <label htmlFor="myemail">Email address</label>
                      <input autoComplete="none" onChange={(e) => {
                        setuserInfo({
                          ...userInfo,
                          usernameOrEmail: e.target.value
                        })
                      }} type="email" className="form-control" id="myemail" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input autoComplete="new-password" onChange={(e) => {
                        setuserInfo({
                          ...userInfo,
                          password: e.target.value
                        })
                      }} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
              
                
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button type='reset' className="btn btn-light">Cancel</button>
                  </form>
              </div>
              </div>
                </div>
              </div>
            </div> 
           </div>
    </>
  )
}
