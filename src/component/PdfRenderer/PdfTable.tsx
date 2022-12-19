import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';


const tableRowsCount = 11;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
});
function PdfItemsTable(props:any) {
  const {invoice}=props;
    return(<View style={styles.tableContainer}>

    </View>)
};
  
  export default PdfItemsTable