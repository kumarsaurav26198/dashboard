import React from 'react';
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormInput,
    CFormLabel,
    CFormTextarea,
    CRow,
} from '@coreui/react';

function Automated() {
    return (
        <>
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-4">
                        <CCardHeader>
                            <strong>Automated Form Control</strong>
                        </CCardHeader>
                        <CCardBody>
                            <CForm>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                                    <CFormInput
                                        type="email"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                                    <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                                </div>
                            </CForm>

                            <CFormInput
                                type="text"
                                placeholder="Small input"
                                aria-label="sm input example"
                            />
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

        </>
    );
}

export default Automated;;