import React, { useState, useEffect } from 'react';
import NaverMapView, {Coord, Marker} from "react-native-nmap";
import axios from "axios";
import Config from "react-native-config";
import {Button, View, StyleSheet, Text} from "react-native";
import {FloatButton} from "../utils/FloatButton";
import {IStation, ITimetable} from "../../types/types";

interface MapViewProps {

}
export const MapView = (props: MapViewProps) => {
    const [location, setLocation] = useState<Coord>({
        // id: 1,
        latitude: 37.660900,
        longitude: 127.32249
    });
    const [busMarkers, setBusMarkers] = useState(null);
    const [stationMarkers, setStationMarkers] = useState(null);

    useEffect(() => {
    }, []);

    const getLocation = async () : Promise<void> => {
        axios.get(`${Config.API_URL}/bus-logs`, {
            headers: {
                // ... jwt 추가
            }
        }).then((result) => {
            return result.data;
        }).then(json => {
            console.log(`data: ${JSON.stringify(json)}`)
            // this.setState({
            //     busMarkers: [json]
            // });
        }).catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
            // this.setState({
            //     loading: false
            // });
        });
    };


    return (
        <View style={styles.view}>
            <NaverMapView
                style={styles.map}
                center={{...location, zoom: 16}}
                useTextureView={true}
            >
                {/*{*/}
                {/*    busMarkers*/}
                {/*    && busMarkers.map((position:any) => {*/}
                {/*        return (*/}
                {/*            <Marker*/}
                {/*                key={position.id}*/}
                {/*                coordinate={{latitude: position.latitude, longitude: position.longitude}}*/}
                {/*            />*/}
                {/*        );*/}
                {/*    })*/}
                {/*}*/}
            </NaverMapView>

            <FloatButton
                // style={styles.reload}
                // title={'test'}
                onPress={getLocation}
            />
        </View>

    )

}
// class MapView extends React.Component {
//     state = {
//     }
//     async getLocation() {
//         axios.get(`${Config.API_URL}/bus-logs`, {
//             headers: {
//                 // ... jwt 추가
//             }
//         }).then((result) => {
//             return result.data;
//         }).then(json => {
//             console.log(`data: ${JSON.stringify(json)}`)
//             this.setState({
//                 busMarkers: [json]
//             });
//         }).catch(e => {  // API 호출이 실패한 경우
//             console.error(e);  // 에러표시
//             this.setState({
//                 // loading: false
//             });
//         });
//         // this.forceUpdate();
//     };
//
//     componentDidMount() {
//         this.getLocation();  // loadItem 호출
//     }
//
//     render() {
//         const {busMarkers, stationMarker, locations} = this.state
//         // const location = locations[0];
//         const location = busMarkers ? busMarkers[0] : locations[0];
//         return (
//             // <View>
//             //
//             //
//             //
//             //
//             // </View>
//         )
//     }
// }

const styles = StyleSheet.create({
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
    }
});

export default MapView;