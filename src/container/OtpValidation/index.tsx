import React, { useState } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import FormGenerator from '../../component/FormGenerator';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../../component/PdfRenderer';
import OtpField from 'react-otp-field';
import { RightCircleTwoTone } from '@ant-design/icons';
import OnboardingComplete from '../OnboardingComplete';
export const Content = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    position:relative;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
`;
export const ContainerWrapper = styled.div`
    display:flex;
    background:#2760B6;
    position:absolute;
    bottom:0;
    height:200px;
    flex-direction: column;
    padding: 0 10px;
    left:0;
    right:0;
`;
export const OtpWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    margin-bottom:25px;
`;
export const OtpFeildContainer = styled(OtpField)`
    display:flex;
    width:100%;
    .otp-field__input{
        width:35px;
        background:#fff;
        border: none;
        border-radius: 4px;
        height: 35px;
        margin: 10px 10px;
        color: #000;
        font-size: 15px;
        text-align: center;
    }
    span{
        display:none;
    }
`;
export const RightCircleTwoToneIcon = styled(RightCircleTwoTone)`
    font-size:40px;
`;
export const OtpNotReceived = styled.div`
    display:flex;
    width:100%;
    font-weight: 400;
    font-size: 12px;
    color:#fff;
    padding:0 10px;
    margin-bottom:5px;
`;
export const OtpRetry = styled(OtpNotReceived)`
    font-weight: 700;
    font-size: 14px;
    padding:0 10px;
   
`;
export const Enterotp = styled.div`
    font-weight: 700;
    font-size: 20px;
    padding:0 10px;
    text-align: left;
    color: #fff;
    margin-bottom:25px;
`;

export const BottomContent = styled.div`
   position:absolute;
   bottom:10px
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

function OtpValidation() {
    const [otpValue, setOtpValue] = useState('');
    const [formUserData, setFormUserData]=useState({});
    const [showOnboarding, setShowOnboarding]=useState(false);
    const validateOtp=()=>{
        setShowOnboarding(true)
    }
  return (
    <>
    {!showOnboarding ? 
    (<Content>
        <TopContent></TopContent>
        <ContainerWrapper>
        
            <BottomContent>
                <Enterotp>Enter OTP</Enterotp>
            <OtpWrapper>
                <OtpFeildContainer
                    value={otpValue}
                    onChange={setOtpValue}
                    numInputs={5}
                    onChangeRegex={/^([0-9]{0,})$/}
                    autoFocus
                    separator={<span>-</span>}
                    isTypeNumber
                    inputProps={{ className: 'otp-field__input', disabled: false }}
                />
                {otpValue?.length===5 &&  <RightCircleTwoToneIcon onClick={validateOtp}/>}
               
            </OtpWrapper>
            <OtpNotReceived>Didn’t get the code yet?</OtpNotReceived>
            <OtpRetry>Retry</OtpRetry>
            </BottomContent>
        </ContainerWrapper>
    </Content>) : <OnboardingComplete/>}
    </>
  );
}

export default OtpValidation;
