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
import Avatar from '@mui/material/Avatar';

const Users = () => {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62dbc602d1d97b9e0c53b578.mockapi.io/fakedata`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  console.log(APIData);

  const setData = (data) => {
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
          <CCol md={10}>
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
                        <th scope="col">Avatar</th>
                        <th scope="col-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {APIData.map((data) => {
                        return (
                          <tr>
                            <td scope="row">{data.id}</td>
                            <td scope="row">{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td>
                              <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={{ width: 56, height: 56 }}
                              />
                            </td>
                            <td colSpan="4">
                              <Link to="/update">
                                <CButton
                                  type="button"
                                  className="btn btn-warning"
                                  onClick={() => setData(data.id)}
                                >
                                  Update
                                </CButton>
                              </Link>
                            </td>
                            <td>
                              <CButton
                                type="button"
                                className="btn btn-danger"
                                onClick={() => onDelete(data.id)}
                              >
                                Delete
                              </CButton>
                            </td>
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
