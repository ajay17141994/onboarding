import React, { useState } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import OnboardingFormData from './ClientOnboardingForm'
import FormGenerator from '../../component/FormGenerator';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../../component/PdfRenderer';
import OtpValidation from '../OtpValidation';
import OnboardingComplete from '../OnboardingComplete';
export const Container = styled.div`
    width:45%;
    margin:0 auto;
`;
export const InnerWrapper = styled.div`
    width:100%;
    margin:0 auto;
`;
const Column = styled(Col)`
    width: 100%;
    margin: 0px auto;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #292929;
    height: 100vh;

`;
export const ImageLogo = styled.img`
    width:100px;
    height:100px;
    margin-bottom: 75px;
`;
export const BottomContent = styled.div`
    position:absolute;
    bottom:10px;
    left: 0;
    right: 0;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
`;
export const Title =styled.div`
    display:flex;
    width:100%;
    color:#000;
    margin-bottom:25px;
    font-weight: 400;
    font-size: 16px;
`;
export const TopContent = styled.div`
   position:absolute;
   top:0px;
   left:0;
   right:0;
   background:#2760B6;
   height:50px;
   display:flex;

`;
function ClientOnboarding() {
    const [formUserData, setFormUserData]=useState({});
    const [showOTP, setShowOTP]=useState(false);
    const [showPdf, setShowPdf]=useState(false);
    const updateFormData=(values:any)=>{
        setFormUserData(values);
        // setShowPdf(true)
        setShowOTP(true);
    }
  return (
    <Container>
         {!showOTP &&
        <InnerWrapper>
            <Column>
            <TopContent></TopContent>
            <BottomContent>
                <ImageLogo src="https://i.ibb.co/hC281mQ/Rectangle-142.png"/>
                <Title>{OnboardingFormData?.title}</Title>
                <FormGenerator
                    formData={OnboardingFormData}
                    formUserData={formUserData}
                    updateFormData={(data:any)=>updateFormData(data)}
                />
            </BottomContent>
            </Column>
        </InnerWrapper>
        }
        {showOTP &&
            <OtpValidation/>
        }
        {showPdf &&
        <PDFViewer>
            <MyDocument formUserData={formUserData}/>
        </PDFViewer>
        }
    </Container>
  );
}

export default ClientOnboarding;
