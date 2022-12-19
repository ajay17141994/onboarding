import React, { useState,useEffect  } from 'react';
import { Document, Page, Text, View,Image, StyleSheet } from '@react-pdf/renderer';
import { Space, Table, Tag } from 'antd';
import InvoiceTitle from './PdfTitle'
import InvoiceItemsTable from './PdfTable'

// Create styles
const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 30,
        paddingLeft:60,
        paddingRight:60,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
  });
const columns = [
    {
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Age',
      key: 'age',
    },
    {
      title: 'Address',
      key: 'address',
    },
  ];
// Create Document Component
function MyDocument(props:any) {
    const {formUserData=[]}=props;
    const [dataSource, setDataSource]=useState([]);
    console.log("formUserData==>", formUserData);
    useEffect(()=>{
        let data=[] as any
        console.log("Object.keys(formUserData)=>", Object.keys(formUserData));
        Object.keys(formUserData)?.map((item, index)=>{
            console.log("item=>", item);
            data.push({key:index, title:formUserData[item]})
        });
        setDataSource(data);
    },[]);
    console.log("dataSource==>", dataSource);
  return (<Document>
    <Page size="A4" style={styles.page}>
        <InvoiceTitle title='Invoice'/>
        {/* <InvoiceNo invoice={invoice}/> */}
        {/* <BillTo invoice={invoice}/> */}
        <InvoiceItemsTable/>
        {/* <InvoiceThankYouMsg /> */}
    </Page>
</Document>)
};
export default MyDocument;
