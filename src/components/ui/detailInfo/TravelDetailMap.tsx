import { useEffect, useRef } from 'react';

interface Props {
  mapX: string;
  mapY: string;
}

const TravelDetailMap = ({ mapX, mapY }: Props) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID;

    if (!clientId || !mapElement.current) {
      return;
    }

    const script = document.createElement('script');

    script.src =
      `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;

    script.async = true;

    script.onload = () => {
      if (!mapElement.current) {
        return;
      }

      const position = new naver.maps.LatLng(
        Number(mapY),
        Number(mapX)
      );

      const map = new naver.maps.Map(mapElement.current, {
        center: position,
        zoom: 15,
      });

      new naver.maps.Marker({
        position,
        map,
      });
    };

    script.onerror = () => {
      console.error('네이버 지도 SDK 로드 실패');
    };

    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [mapX, mapY]);

  return (
    <div
      ref={mapElement}
      className="travel-detail__map"
    />
  );
};

export default TravelDetailMap;