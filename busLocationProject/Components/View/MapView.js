import React, { useState, useEffect } from 'react';
import NaverMapView, {Marker} from "react-native-nmap";
import axios from "axios";
import Config from "react-native-config";
import {Button, View, StyleSheet, Text} from "react-native";
import FloatButton from "../utils/FloatButton";


// const [items, setItems] = useState('')
class MapView extends React.Component {
    state = {
        locations: [
            {
                id: 1,
                latitude: 37.660900,
                longitude: 127.32249
            }
        ],
        busMarkers: null,
        stationMarker: null
    }
    async getLocation() {
        axios.get(`${Config.API_URL}/bus-logs`, {
            headers: {
                // ... jwt 추가
            }
        }).then((result) => {
            return result.data;
        }).then(json => {
            console.log(`data: ${JSON.stringify(json)}`)
            this.setState({
                busMarkers: [json]
            });
        }).catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
            this.setState({
                // loading: false
            });
        });
        // this.forceUpdate();
    };

    componentDidMount() {
        this.getLocation();  // loadItem 호출
    }

    render() {
        const {busMarkers, stationMarker, locations} = this.state
        // const location = locations[0];
        const location = busMarkers ? busMarkers[0] : locations[0];
        return (
            <View style={styles.view}>
                <NaverMapView
                    style={styles.map}
                    center={{...location, zoom: 16}}
                    useTextureView={true}
                >
                    {
                        busMarkers
                        && busMarkers.map((position) => {
                            return (
                                <Marker
                                    key={position.id}
                                    coordinate={{latitude: position.latitude, longitude: position.longitude}}
                                />
                            );
                        })
                    }
                </NaverMapView>


                <FloatButton
                    // style={styles.reload}
                    // title={'test'}
                    onPress={() => {
                        this.getLocation()
                    }}
                >
                </FloatButton>
            </View>

            // <View>
            //
            //
            //
            //
            // </View>
        )
    }
}

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