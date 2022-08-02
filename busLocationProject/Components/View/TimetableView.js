import React, {useState, useEffect} from 'react';
import axios from "axios";
import Config from "react-native-config";
import {Button, View, StyleSheet, Text, ScrollView} from "react-native";
import FloatButton from "../utils/FloatButton";
import {Table, Row, Col, TableWrapper} from 'react-native-table-component';


/*
*
* https://www.npmjs.com/package/react-native-table-component
*
* TODO
* Failed prop type: Invalid prop `style` of type `array` supplied to `Row`, expected `object`
* */
const Timetable = ({stations, tableData, widthArr}) => {

    const [headers, setHeaders] = useState([]);
    useEffect(() => {
        const headerArr = [];
        stations.map((station) => {
            headerArr.push(station.text);
        })
        setHeaders(headerArr);
    }, [])

    const getTime = (index, time) => {
        // if (time.station) return headers[index].value === time.station.stationCode ? time.time : '-';
        return '-';
    }

    return (
        <View style={styles.container}>
            {/* card view */}
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row
                            data={headers}
                            widthArr={widthArr}
                            style={styles.header}
                            textStyle={styles.headerText}
                        />


                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            { tableData.map((rowData, index) => (
                                <Row
                                    key={index}
                                    data={rowData}
                                    widthArr={widthArr}
                                    style={styles.row}
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

const stationArr = [
    {text: '순서', align: 'start', value: 'order'},
    {text: 'APT 출발', value: 'S001',},
    {text: '마석역 \n1번출구', value: 'S002'},
    {text: '심석 중.고', value: 'S004'},
    {text: '송라 초.중', value: 'S005'},
    {text: '마석 초.중', value: 'S006'},
    {text: '마석고', value: 'S007'},
    {text: '마석역 \n2번출구', value: 'S003'},
    {text: 'APT 도착', value: 'S001'},
];
const widths = [100, 100, 100, 100, 100, 100, 100, 100, 100];
export const TimetableView = () => {
    const [stations, setStations] = useState(stationArr);
    const [widthArr, setWidthArr] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setStations(stationArr);
        setWidthArr(widths);
        getTimetable();
        const timetable = [];
        for (let i = 0; i < 30; i += 1) {
            const rowData = [];
            for (let j = 0; j < 9; j += 1) {
                rowData.push(`${i}${j}`);
            }
            timetable.push(rowData);
        }
        setTableData(timetable);
        setLoading(false);
    },[])

    const getTimetable = async () => {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        await axios.get(`${Config.API_URL}/timetable`)
            .then((response) => {
                const data = response.data;
                
                /*
                * data 에 맞게 timetable 수정
                * */
                console.log(`data: ${JSON.stringify(data)}`);
                setStations(stationArr);
            }).catch((e) => {
                console.log(`error: ${JSON.stringify(e)}`);
                setError(e);
            });
        setLoading(false);
    };

    if (loading) return <View><Text>로딩중..</Text></View>;
    if (error) return <View><Text>에러가 발생했습니다..</Text></View>;
    return (
        <View>
            <Timetable stations={stations} tableData={tableData} widthArr={widthArr}/>
            <FloatButton
                onPress={() => {
                    getTimetable();
                }}
            >
            </FloatButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    header: {height: 50, backgroundColor: '#537791'},
    headerText: {textAlign: 'center', color: '#fff'},
    text: {textAlign: 'center', fontWeight: '300'},
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