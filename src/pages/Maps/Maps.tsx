import { ClassNames } from '@emotion/react';
import React, {useState, useRef, useEffect, ReactElement, Children } from 'react';

type Props = google.maps.MapOptions & {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onClick?: (e: google.maps.MapMouseEvent) => void
};

const Maps = ({ children, className, style, onClick, ...options }: Props) =>{
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();
    // 地図の初期化
    useEffect(() => {
        if (ref.current && !map) {
            const mapInstance = new window.google.maps.Map(ref.current, {
                center: options.center,
                zoom: options.zoom || 16,
            });
    
            // 不要か後で確認する
            if (onClick) {
                mapInstance.addListener('click', onClick);
            }
    
            setMap(mapInstance);
        }
    }, [ref, map, options.center, options.zoom, onClick]);
    // 地図の中心位置を更新
    useEffect(() => {
        if (map && options.center) {
            map.setCenter(options.center);
        }
    }, [map, options.center])

    return (
        <div ref={ref} className={className} style={style}>
            {React.Children.map(children, (child) => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement<any>, {map});
                };
                return child;
            })};
        </div>
    );
};

export default Maps;