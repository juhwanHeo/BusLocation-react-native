import React from 'react';
import NaverMapView, {Marker} from "react-native-nmap";

function MyMap(props) {
    const locations = props.locations;

    return (
        <NaverMapView style={{width: '100%', height: '100%'}}
                      showsMyLocationButton={true}
                      center={{...locations[0], zoom: 16}}
            // onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
            // onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
            // onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}
        >
            {locations.map((location) => {
                return (<Marker coordinate={location}/>);
            })}
            {/*<Marker coordinate={P0} onClick={() => console.warn('onClick! p0')}/>*/}
            {/*<Marker coordinate={P1} pinColor="blue" onClick={() => console.warn('onClick! p1')}/>*/}
            {/*<Marker coordinate={P2} pinColor="red" onClick={() => console.warn('onClick! p2')}/>*/}
        </NaverMapView>
    );
}


const MapView = () => {

    function getLocation() {
        return [
            {latitude: 37.565383, longitude: 126.976292}
        ];
    }

    return (
        <MyMap locations={getLocation()}/>
    )
}
export default MapView;