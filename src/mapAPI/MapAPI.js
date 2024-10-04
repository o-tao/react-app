import {useEffect, useState} from "react";
import {Map, MapMarker, useKakaoLoader} from "react-kakao-maps-sdk";

function MapAPI() {
    const [map, setMap] = useState({location: {lat: 0, lng: 0}, level: 3});
    const [marker, setMarker] = useState([]);

    useKakaoLoader({
        appkey: process.env.REACT_APP_MAP_API_KEY
    });

    useEffect(() => {
        const data = {
            location: {lat: 33.450701, lng: 126.570667},
            level: 3
        };
        setMap(data);

        const data2 = [
            {lat: 33.450701, lng: 126.570667},
            {lat: 33.450701, lng: 126.570667},
            {lat: 33.450701, lng: 126.570667},
            {lat: 33.450701, lng: 126.570667}
        ]
        setMarker(data2);
    }, []);

    return (
        <>
            <h1 style={{textAlign: "center"}}>지도</h1>
            <Map center={map.location} style={{width: "100%", height: "350px"}} level={map.level}>
                {
                    marker.map((row, index) => <MapMarker key={index} position={row}/>)
                }
            </Map>
        </>
    );
}

export default MapAPI;
