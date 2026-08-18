import type { TourDetailCommon } from "../../types/tourDetail";

interface Props {
  item: TourDetailCommon;
}

const TravelDetailHero = ({ item }: Props) => {

    const homepageUrl =
    item.homepage?.match(/href=["']([^"']+)["']/i)?.[1] ??
    item.homepage?.match(/\]\((https?:\/\/[^)]+)\)/i)?.[1] ??
    item.homepage?.match(/https?:\/\/[^\s<>"')]+/i)?.[0] ??
    '';
  return (
    <section className="travel-detail__hero">
      <div className="travel-detail__image">
        {item.firstimage ? (
          <img
            src={item.firstimage}
            alt={item.title}
          />
        ) : (
          <div className="travel-detail__image-empty">
            NO IMAGE
          </div>
        )}
      </div>

      <div className="travel-detail__hero-info">
        <span className="travel-detail__category">
          {getContentTypeName(item.contenttypeid)}
        </span>

        <h1>{item.title}</h1>

        <p className="travel-detail__address">
          {item.addr1}
          {item.addr2 && ` ${item.addr2}`}
        </p>

        <div className="travel-detail__actions">
          {item.tel && (
            <a href={`tel:${item.tel}`}>
              전화
            </a>
          )}

          {item.homepage && (
            <a
              href={homepageUrl}
              target="_blank"
              rel="noreferrer"
            >
              홈페이지
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

const getContentTypeName = (
  contentTypeId: string,
): string => {
  const typeMap: Record<string, string> = {
    '12': '관광지',
    '14': '문화시설',
    '15': '축제·공연·행사',
    '25': '여행코스',
    '28': '레포츠',
    '32': '숙박',
    '38': '쇼핑',
    '39': '음식점',
  };

  return typeMap[contentTypeId] ?? '여행정보';
};

export default TravelDetailHero;