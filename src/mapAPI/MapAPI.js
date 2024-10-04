import {useEffect, useState} from "react";
import {CustomOverlayMap, Map, useKakaoLoader} from "react-kakao-maps-sdk";

function MapAPI() {
    const [map, setMap] = useState({location: {lat: 0, lng: 0}, level: 3});
    const [marker, setMarker] = useState([]);

    useKakaoLoader({
        appkey: process.env.REACT_APP_MAP_API_KEY
    });

    useEffect(() => {
        const data = {
            location: {lat: 33.450701, lng: 126.570667},
            level: 4
        };
        setMap(data);

        const data2 = [
            {
                location: {lat: 33.450, lng: 126.570},
                content: {text: 'Marker1'}
            },
            {
                location: {lat: 33.451, lng: 126.571},
                content: {text: 'Marker2'}
            },
            {
                location: {lat: 33.452, lng: 126.572},
                content: {text: 'Marker3'}
            },
            {
                location: {lat: 33.453, lng: 126.573},
                content: {text: 'Marker4'}
            },
        ]
        setMarker(data2);
    }, []);

    return (
        <>
            <h1 style={{textAlign: "center"}}>지도</h1>
            <Map center={map.location} style={{margin: "auto", width: "80%", height: "350px"}} level={map.level}>
                {
                    marker.map((row, index) => <CustomOverlayMap key={index} position={row.location}>
                        <div style={{textAlign: "center", position: "absolute", top: "0"}}>
                            <p style={{margin: '0', backgroundColor: "white"}}>{row.content.text}</p>
                            <img src={"oh.ico"} style={{width: '60%'}} alt={"marker"}/>
                        </div>
                    </CustomOverlayMap>)
                }
            </Map>
        </>
    );
}

export default MapAPI;
