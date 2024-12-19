import React, { useState, useRef, useEffect, ReactElement } from 'react';

type Props = google.maps.MapOptions & {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    mapId: string;
};

const Maps = ({ children, className, style, mapId, ...options}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if (ref.current && !map) {
            const mapInstance = new window.google.maps.Map(ref.current, {
                mapId: mapId,
                center: options.center,
                zoom: options.zoom || 16,
            });

            setMap(mapInstance);
        }
    }, [ref, map, options.center, options.zoom, mapId]);

    useEffect(() => {
        if (map && options.center) {
            map.setCenter(options.center);
        }

        const _ = new google.maps.marker.AdvancedMarkerElement({
            map,
            position: options.center
        })
    }, [map, options.center]);

    return (
        <div ref={ref} className={className} style={style}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<any>, { map });
                }
                return child;
            })}
        </div>
    );
};

export default Maps;