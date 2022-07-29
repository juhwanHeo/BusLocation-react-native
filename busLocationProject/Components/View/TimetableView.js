import React, {useState, useEffect} from 'react';
import axios from "axios";
import Config from "react-native-config";
import {Button, View, StyleSheet, Text, ScrollView} from "react-native";
import FloatButton from "../utils/FloatButton";
import {Table, TableWrapper, Row} from 'react-native-table-component';


/*
*
* https://www.npmjs.com/package/react-native-table-component
*
* TODO
* Failed prop type: Invalid prop `style` of type `array` supplied to `Row`, expected `object`
* */
const Timetable = ({header, tableData, widthArr}) => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row
                            data={header}
                            widthArr={widthArr}
                            style={styles.header}
                            // textStyle={[styles.text,  {textAlign: 'center', fontWeight: '100'}]}
                            textStyle={styles.text}
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            { tableData
                                && tableData.map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={widthArr}
                                        style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                                        // textStyle={[styles.text,  {textAlign: 'center', fontWeight: '100'}]}
                                        textStyle={styles.text}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const stations = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'];
const widths = [40, 60, 80, 100, 120, 140, 160, 180, 200];
export const TimetableView = () => {
    const [headerArr, setHeaderArr] = useState([]);
    const [widthArr, setWidthArr] = useState([]);
    const [tableData, setTableData] = useState([]);
    useEffect(() => {
        const timetable = [];
        for (let i = 0; i < 30; i += 1) {
            const rowData = [];
            for (let j = 0; j < 9; j += 1) {
                rowData.push(`${i}${j}`);
            }
            timetable.push(rowData);
        }

        setHeaderArr(stations);
        setWidthArr(widths);
        setTableData(timetable);

    },[headerArr])


    return (
        <View>
            <Timetable header={headerArr} tableData={tableData} widthArr={widthArr}/>
            <FloatButton
                onPress={() => {
                    console.log(`header.length: ${headerArr.length}`)
                }}
            >
            </FloatButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    header: {height: 50, backgroundColor: '#537791'},
    text: {textAlign: 'center', fontWeight: '100'},
    dataWrapper: {marginTop: -1},
    row: {height: 40, backgroundColor: '#E7E6E1'},
    view: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0
    },
    map: {
        // flex: 1,
        width: '100%',
        height: '100%'
    },
    reload: {
        width: 60,
        height: 60,
        bottom: 40,
        right: 40,
        backgroundColor: '#0C9',
        color: '#FFF',
        borderRadius: 50,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});