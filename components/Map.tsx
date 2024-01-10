import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const icon = L.icon({iconUrl: "/images/location.png", iconAnchor: [13, 24]})

const millenniumPolyline:[number, number][] = [
    [49.26583, -123.07914],
    [49.26295, -123.06849],
    [49.25895, -123.04525],
    [49.26071, -123.03310],
    [49.26500, -123.01342],
    [49.26633, -123.00163],
    [49.26469, -122.98222],
    [49.25914, -122.96391],
    [49.25461, -122.93927],
    [49.25337, -122.91815],
    [49.24846, -122.89702],
    [49.26133, -122.88994],
    [49.27794, -122.84551],
    [49.27719, -122.82798],
    [49.27531, -122.79886],
    [49.28037, -122.79402],
    [49.28547, -122.79174]
]

const expoMultiPolyline:[number, number][][] = [
    [
        [49.28570, -123.11167],
        [49.28579, -123.12097],
        [49.28323, -123.11604],
        [49.27940, -123.10931],
        [49.273114, -123.100348],
        [49.26295, -123.06849],
        [49.248184, -123.05564],
        [49.244084, -123.045931],
        [49.23835, -123.031704],
        [49.22967, -123.012376],
        [49.2255, -123.0032],
        [49.220004, -122.988381],
        [49.212054, -122.959226],
        [49.200116, -122.948722],
        [49.20085, -122.91260],
        [49.20476, -122.906161],
        [49.22443, -122.88964],
        [49.23322, -122.88283],
        [49.24846, -122.89702],
        [49.25337, -122.91815]
    ],
    [
        [49.28570, -123.11167],
        [49.28579, -123.12097],
        [49.28323, -123.11604],
        [49.27940, -123.10931],
        [49.273114, -123.100348],
        [49.26295, -123.06849],
        [49.248184, -123.05564],
        [49.244084, -123.045931],
        [49.23835, -123.031704],
        [49.22967, -123.012376],
        [49.2255, -123.0032],
        [49.220004, -122.988381],
        [49.212054, -122.959226],
        [49.200116, -122.948722],
        [49.20085, -122.91260],
        [49.20476, -122.906161],
        [49.20442, -122.874157],
        [49.19911 ,-122.85061],
        [49.189473, -122.847871],
        [49.1827, -122.8446]
    ]
]

const redOptions = { color: 'red' }
const blueOptions = { color: 'blue' }

const Map = () => {
    return(
        <MapContainer
            style={{height: "100vh"}}
            center={[49.24966, -123.00934]} zoom={12} scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/938437/MDIA3109_skytrain_map"> By Yanjun Liu</a> contributors'
                url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* millennium line */}
            <Marker position={[49.26583, -123.07914]} icon={icon}>
                <Popup>
                    VCC-Clark
                </Popup>
            </Marker>
            <Marker position={[49.26295, -123.06849]} icon={icon}>
                <Popup>
                    Commercial-Broadway
                </Popup>
            </Marker>
            <Marker position={[49.25895, -123.04525]} icon={icon}>
                <Popup>
                    Renfrew
                </Popup>
            </Marker>
            <Marker position={[49.26071, -123.03310]} icon={icon}>
                <Popup>
                    Rupert
                </Popup>
            </Marker>
            <Marker position={[49.26500, -123.01342]} icon={icon}>
                <Popup>
                    Gilmore
                </Popup>
            </Marker>
            <Marker position={[49.26633, -123.00163]} icon={icon}>
                <Popup>
                    Brentwood Town Centre
                </Popup>
            </Marker>
            <Marker position={[49.26469, -122.98222]} icon={icon}>
                <Popup>
                    Holdom
                </Popup>
            </Marker>
            <Marker position={[49.25914, -122.96391]} icon={icon}>
                <Popup>
                    Sperling-Burnaby Lake
                </Popup>
            </Marker>
            <Marker position={[49.25461, -122.93927]} icon={icon}>
                <Popup>
                    Lake City Way
                </Popup>
            </Marker>
            <Marker position={[49.25337, -122.91815]} icon={icon}>
                <Popup>
                    Production Way-University
                </Popup>
            </Marker>
            <Marker position={[49.24846, -122.89702]} icon={icon}>
                <Popup>
                    Lougheed Town Centre
                </Popup>
            </Marker>
            <Marker position={[49.26133, -122.88994]} icon={icon}>
                <Popup>
                    Burquitlam
                </Popup>
            </Marker>
            <Marker position={[49.27794, -122.84551]} icon={icon}>
                <Popup>
                    Moody Centre
                </Popup>
            </Marker>
            <Marker position={[49.27719, -122.82798]} icon={icon}>
                <Popup>
                    Inlet Centre
                </Popup>
            </Marker>
            <Marker position={[49.27531, -122.79886]} icon={icon}>
                <Popup>
                    Coquitlam Central
                </Popup>
            </Marker>
            <Marker position={[49.28037, -122.79402]} icon={icon}>
                <Popup>
                    Lincoln
                </Popup>
            </Marker>
            <Marker position={[49.28547, -122.79174]} icon={icon}>
                <Popup>
                    Lafarge Lake-Douglas
                </Popup>
            </Marker>


            {/* expo line_1 */}
            <Marker position={[49.28570, -123.11167]} icon={icon}>
                <Popup>
                    Waterfront
                </Popup>
            </Marker>
            <Marker position={[49.28579, -123.12097]} icon={icon}>
                <Popup>
                    Burrard
                </Popup>
            </Marker>
            <Marker position={[49.28323, -123.11604]} icon={icon}>
                <Popup>
                    Granville
                </Popup>
            </Marker>
            <Marker position={[49.274332236, -123.105666244]} icon={icon}>
                <Popup>
                    Stadium-Chinatown
                </Popup>
            </Marker>
            <Marker position={[49.273114, -123.100348]} icon={icon}>
                <Popup>
                    Main Street-Science World
                </Popup>
            </Marker>
            <Marker position={[49.26295, -123.06849]} icon={icon}>
                <Popup>
                    Commercial-Broadway
                </Popup>
            </Marker>
            <Marker position={[49.248184, -123.05564]} icon={icon}>
                <Popup>
                    Nanaimo
                </Popup>
            </Marker>
            <Marker position={[49.244084, -123.045931]} icon={icon}>
                <Popup>
                    29th Avenue
                </Popup>
            </Marker>
            <Marker position={[49.23835, -123.031704]} icon={icon}>
                <Popup>
                    Joyce-Collingwood
                </Popup>
            </Marker>
            <Marker position={[49.22967, -123.012376]} icon={icon}>
                <Popup>
                    Patterson
                </Popup>
            </Marker>
            <Marker position={[49.2255, -123.0032]} icon={icon}>
                <Popup>
                    Metrotown
                </Popup>
            </Marker>
            <Marker position={[49.220004, -122.988381]} icon={icon}>
                <Popup>
                    Royal Oak
                </Popup>
            </Marker>
            <Marker position={[49.212054, -122.959226]} icon={icon}>
                <Popup>
                    Edmonds
                </Popup>
            </Marker>
            <Marker position={[49.200116, -122.948722]} icon={icon}>
                <Popup>
                    22nd Street
                </Popup>
            </Marker>
            <Marker position={[49.20085, -122.91260]} icon={icon}>
                <Popup>
                    New Westminster
                </Popup>
            </Marker>
            <Marker position={[49.20476, -122.906161]} icon={icon}>
                <Popup>
                    Columbia
                </Popup>
            </Marker>
            <Marker position={[49.22443, -122.88964]} icon={icon}>
                <Popup>
                    Sapperton
                </Popup>
            </Marker>
            <Marker position={[49.23322, -122.88283]} icon={icon}>
                <Popup>
                    Braid
                </Popup>
            </Marker>
            <Marker position={[49.24846, -122.89702]} icon={icon}>
                <Popup>
                    Lougheed Town Centre
                </Popup>
            </Marker>
            <Marker position={[49.25337, -122.91815]} icon={icon}>
                <Popup>
                    Production Way-University
                </Popup>
            </Marker>

            {/* expo line_2 */}
            <Marker position={[49.20442, -122.874157]} icon={icon}>
                <Popup>
                    Scott Road
                </Popup>
            </Marker>
            <Marker position={[49.19911 ,-122.85061]} icon={icon}>
                <Popup>
                    Gateway
                </Popup>
            </Marker>
            <Marker position={[49.189473, -122.847871]} icon={icon}>
                <Popup>
                    Surrey Central
                </Popup>
            </Marker>
            <Marker position={[49.1827, -122.8446]} icon={icon}>
                <Popup>
                    King George
                </Popup>
            </Marker>

            <Polyline pathOptions={redOptions} positions={millenniumPolyline}/>
            <Polyline pathOptions={blueOptions} positions={expoMultiPolyline}/>
        </MapContainer>
    )
}

export default Map;