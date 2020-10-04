import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MAPBOX_ACCESS_TOKEN } from "../../utils/secrets";
import "./styles.css";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

export const Map = () => {
  const ref = React.createRef();
  const [map, setMap] = useState();
  const [mapState, setMapState] = useState({
    lng: 2.213749,
    lat: 46.227638,
    zoom: 5,
  });

  useEffect(() => {
    setMap(
      new mapboxgl.Map({
        container: ref.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [mapState.lng, mapState.lat],
        zoom: mapState.zoom,
      })
    );
  }, [mapState.lng, mapState.lat, mapState.zoom]);

  return (
    <div>
      <div ref={ref} className="mapContainer" />
    </div>
  );
};
