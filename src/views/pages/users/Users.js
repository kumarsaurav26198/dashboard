import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react';
import { AppSidebarNav } from 'src/components/AppSidebarNav';
// import { useHistory } from 'react-router-dom';

const Users = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const setData = (data) => {
    // let history = useHistory();
    let { id, username, email, password } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
  };
  const getData = () => {
    axios
      .get(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <AppSidebarNav />
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                        <th scope="col-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {APIData.map((data) => {
                        return (
                          <tr>
                            <th scope="row">{data.id}</th>
                            <th scope="row">{data.username}</th>
                            <th>{data.email}</th>
                            <th>{data.password}</th>
                            <th colspan="4">
                              <Link to="/update">
                                <CButton
                                  type="button"
                                  className="btn btn-warning"
                                  onClick={() => setData(data.id)}
                                >
                                  Update
                                </CButton>
                              </Link>
                            </th>
                            <th>
                              <CButton
                                type="button"
                                className="btn btn-danger"
                                onClick={() => onDelete(data.id)}
                              >
                                Delete
                              </CButton>
                            </th>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Users;
