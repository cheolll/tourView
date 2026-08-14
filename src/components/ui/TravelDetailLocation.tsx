import TravelDetailMap from "./detailInfo/TravelDetailMap";

interface Props {
  address: string;
  addressDetail: string;
  mapX: string;
  mapY: string;
}

const TravelDetailLocation = ({
  address,
  addressDetail,
  mapX,
  mapY,
}: Props) => {
  const hasLocation = Boolean(mapX && mapY)

  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>02</span>
        <h2>LOCATION</h2>
      </div>

      <div className="travel-detail__location">
        <div className="travel-detail__location-info">
          <span className="travel-detail__location-mark">•</span>
          <strong>{address}</strong>

          {addressDetail && (
            <span>{addressDetail}</span>
          )}

        </div>

        {hasLocation && (
          <div className="travel-detail__map">
            {/* 지도 */}
            <TravelDetailMap mapX={mapX} mapY={mapY}/>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelDetailLocation;