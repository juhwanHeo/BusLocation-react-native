import {WebView} from 'react-native-webview';
import {Component} from "react";
import { KakakoMapView } from '@jiggag/react-native-kakao-maps';

// https://webruden.tistory.com/302


//

const MapView = () => {
    return (
        <KakakoMapView
            markerImageName="customImageName" // 옵션1
            // markerImageUrl="https://github.com/jiggag/react-native-kakao-maps/blob/develop/example/custom_image.png?raw=true" // 옵션2
            markerList={[
                {
                    lat: 37.59523,
                    lng: 127.08600,
                    markerName: 'marker'
                },
                {
                    lat: 37.59523,
                    lng: 127.08705,
                    markerName: 'marker2'
                },
            ]}
            width={300}
            height={500}
            centerPoint={{
                lat: 37.59523,
                lng: 127.08600,
            }}
        />
    )
}
export default MapView;