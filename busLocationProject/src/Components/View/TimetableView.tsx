import React, {useState, useEffect} from 'react';
import axios, {AxiosResponse} from "axios";
import Config from "react-native-config";
import {Button, View, StyleSheet, Text, ScrollView} from "react-native";
import {FloatButton} from "../utils/FloatButton";
import {Table, Row} from 'react-native-table-component';
import {ITimetable, IStation, ITimeRow, ITime} from "../../types/types";

/*
*
* https://www.npmjs.com/package/react-native-table-component
*
* TODO
* Failed prop type: Invalid prop `style` of type `array` supplied to `Row`, expected `object`
* 막차 APT 도착 안보이는 현상 수정 필요
* */
interface TimetableProps {
    stations?: IStation[],
    tableData?: Array<Array<string | number>>,
    widthArr?: number[]
}

const Timetable = (props: TimetableProps) => {
    const [headers, setHeaders] = useState<string[]>(['']);
    useEffect(() => {
        const headerArr : string[] = [];
        props.stations?.map((station) => {
            headerArr.push(station.stationName);
        })
        setHeaders(headerArr);
    }, [])

    return (
        <View style={styles.container}>
            {/* card view */}
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row
                            data={headers}
                            widthArr={props.widthArr}
                            style={styles.header}
                            textStyle={styles.headerText}
                        />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                            { props.tableData?.map((rowData, index) => (
                                <Row
                                    key={index}
                                    data={rowData}
                                    widthArr={props.widthArr}
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

const stationArr: IStation[] = [
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '순서', stationCode: 'order'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: 'APT 출발', stationCode: 'S001',},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '마석역 \n1번출구', stationCode: 'S002'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '심석 중.고', stationCode: 'S004'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '송라 초.중', stationCode: 'S005'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '마석 초.중', stationCode: 'S006'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '마석고', stationCode: 'S007'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: '마석역 \n2번출구', stationCode: 'S003'},
    {id: '', facilityId: '', lat: 3, lon: 3, stationName: 'APT 도착', stationCode: 'S001'},
];
const widths = [100, 100, 100, 100, 100, 100, 100, 100, 100];
export const TimetableView = () => {
    const [stations, setStations] = useState<IStation[]>(stationArr);
    const [tableData, setTableData] = useState<Array<Array<string | number>>>([]);
    const [widthArr, setWidthArr] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {
        console.log(`TimetableView ...`);
        setLoading(true);
        setStations(stationArr);
        setWidthArr(widths);
        getTimetable();
    },[])

    const getTimetable = async () : Promise<void> => {
        setError(null);
        setLoading(true);
        await axios.get(`${Config.API_URL}/timetable`)
            .then((response: AxiosResponse<ITimetable>) => {
                const data = response.data;
                const timetable : Array<Array<string | number>> = [];
                data.timeRowList.map((timeRow : ITimeRow) => {
                    const rowData : Array<string | number> = [];
                    console.log(`order: ${timeRow.order}`);
                    rowData.push(timeRow.order);
                    timeRow.timeList.map((time : ITime) => {
                        rowData.push(time.time ? time.time : '-');
                    })
                    timetable.push(rowData);
                });
                setStations(stationArr);
                setTableData(timetable)
            }).catch((e) => {
                console.log(`error: ${JSON.stringify(e)}`);
                setError(e);
            }).then(() => setLoading(false));
    };

    if (loading) return <View><Text>로딩중..</Text></View>;
    if (error) return <View><Text>에러가 발생했습니다..</Text><Text>error: ${JSON.stringify(error)}</Text></View>;
    return (
        <View>
            <Timetable stations={stations} tableData={tableData} widthArr={widthArr}/>
            <FloatButton onPress={getTimetable} buttonColor={''} title={''} titleColor={''}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, padding: 5, paddingTop: 50, paddingBottom: 30, backgroundColor: '#fff'},
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
    }
});