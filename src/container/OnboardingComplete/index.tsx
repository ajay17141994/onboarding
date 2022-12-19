import React, { useState } from 'react';
import { Col, Row } from 'antd';
import styled from 'styled-components';
import FormGenerator from '../../component/FormGenerator';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from '../../component/PdfRenderer';
import OtpField from 'react-otp-field';
import { CheckCircleTwoTone } from '@ant-design/icons';
export const Content = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    border-radius: 4px;
    position:relative;
    border: 1px solid #d9d9d9;
    background:#188748;
    justify-content:center;
    align-items:center;
    flex-direction: column;
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
export const CheckCircleTwoToneIcon = styled(CheckCircleTwoTone)`
    font-size:40px;
    color: '#08c'
`;
export const OnBoardingComplete = styled.div`
    display:flex;
    width:100%;
    font-weight: 400;
    font-size: 20px;
    color:#fff;
    padding:0 10px;
    margin-bottom:5px;
    justify-content: center;
`;




function OnboardingComplete() {
    const [value, setValue] = useState('');
    const [formUserData, setFormUserData]=useState({});
    const [showPdf, setShowPdf]=useState(false);
    const updateFormData=(values:any)=>{
        setFormUserData(values);
        setShowPdf(true)
    }
  return (
    <Content>
        <img src="https://i.ibb.co/BZ40vzh/Group-203.png"/>
        <OnBoardingComplete>Onboarding Successfull</OnBoardingComplete>
    </Content>
  );
}

export default OnboardingComplete;
