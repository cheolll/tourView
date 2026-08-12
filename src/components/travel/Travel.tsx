import { useMemo, useState } from 'react';
import './Travel.css';
import { useTourPlaces } from '../../queries/tourQueries';
import type { TourApiParam } from '../../types/tour';

type Region = '전체' | '서울' | '경기' | '인천' | '강원' | '충청' | '경상' | '전라' | '제주';

interface Place {
  id: number;
  name: string;
  region: Exclude<Region, '전체'>;
  description: string;
  image: string;
}

const regions: Region[] = [
  '전체',
  '서울',
  '경기',
  '인천',
  '강원',
  '제주',
  '충청',
  '경상',
  '전라'
];

const places: Place[] = [
  {
    id: 1,
    name: '경복궁',
    region: '서울',
    description: '조선 왕조의 대표적인 궁궐',
    image:
      'https://images.unsplash.com/photo-1538485399081-7c897c9e1fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: '남산서울타워',
    region: '서울',
    description: '서울의 전경을 한눈에 볼 수 있는 전망 명소',
    image:
      'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: '북촌한옥마을',
    region: '서울',
    description: '전통 한옥이 모여 있는 서울의 대표 관광지',
    image:
      'https://images.unsplash.com/photo-1546874177-9e664107314e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    name: '수원화성',
    region: '경기',
    description: '정조 시대에 축조된 역사적인 성곽',
    image:
      'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    name: '가평 아침고요수목원',
    region: '경기',
    description: '사계절 아름다운 정원을 만날 수 있는 곳',
    image:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    name: '송도 센트럴파크',
    region: '인천',
    description: '도심 속에서 여유를 즐길 수 있는 수변 공원',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    name: '강릉 안목해변',
    region: '강원',
    description: '바다와 카페거리를 함께 즐길 수 있는 해변',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    name: '설악산',
    region: '강원',
    description: '사계절 아름다운 풍경을 자랑하는 명산',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    name: '성산일출봉',
    region: '제주',
    description: '제주의 대표적인 자연 경관과 일출 명소',
    image:
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    name: '협재해수욕장',
    region: '제주',
    description: '에메랄드빛 바다와 하얀 모래사장이 아름다운 해변',
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80',
  },
];

const Travel = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>('전체');
  const [keyword, setKeyword] = useState('');

  const filteredPlaces = useMemo(() => {
    const searchKeyword = keyword.trim().toLowerCase();

    return places.filter((place) => {
      const regionMatch =
        selectedRegion === '전체' || place.region === selectedRegion;

      const searchMatch =
        !searchKeyword ||
        place.name.toLowerCase().includes(searchKeyword) ||
        place.description.toLowerCase().includes(searchKeyword);

      return regionMatch && searchMatch;
    });
  }, [selectedRegion, keyword]);

  const [searchParams, setSearchParams] = useState<TourApiParam | null>(null);

  const handleSearch = () => {
    setKeyword(keyword.trim());
    setSearchParams({
      pageNo: 1,
      numOfRows: 10,
      contentTypeId: '12',
      lDongRegnCd: '26',
    });
  };

  const {
    data,
    isLoading,
    isError,
  } = useTourPlaces(searchParams);

  if(isLoading) {
    console.log('loading..')
  }

  return (
    <main className="travel">
      {/* Hero */}
      <section className="travel__hero">
        <div className="travel__hero-inner">
          <span className="travel__eyebrow">TRAVEL PROJECT</span>

          <h1 className="travel__title">
            어디로 떠나고
            <br />
            <span>싶으신가요?</span>
          </h1>

          <p className="travel__description">
            전국의 여행 정보를 검색하고
            <br />
            새로운 여행지를 탐색해보세요.
          </p>

          {/* Search Area */}
          <div className="travel__search-area">
            <div className="travel__region">
              <span className="travel__region-label">지역</span>

              <div className="travel__regions">
                {regions.map((region) => (
                  <button
                    type="button"
                    key={region}
                    className={
                      selectedRegion === region
                        ? 'active'
                        : ''
                    }
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>

            <div className="travel__search">
              <span className="travel__search-icon">⌕</span>

              <input
                type="text"
                value={keyword}
                placeholder="여행지 또는 관광지를 검색해보세요"
                onChange={(event) => setKeyword(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />

              <button
                type="button"
                onClick={handleSearch}
              >
                검색
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="travel__places">
        <div className="travel__places-header">
          <div>
            <span className="travel__places-eyebrow">
              TRAVEL PLACES
            </span>

            <h2>
              {selectedRegion === '전체'
                ? '여행지를 탐색해보세요.'
                : `${selectedRegion}의 여행지`}
            </h2>
          </div>

          <span className="travel__count">
            {filteredPlaces.length}개의 여행지
          </span>
        </div>

        {filteredPlaces.length > 0 ? (
          <div className="travel__grid">
            {filteredPlaces.map((place) => (
              <article
                className="travel-card"
                key={place.id}
              >
                <div className="travel-card__image">
                  <img
                    src={place.image}
                    alt={place.name}
                  />

                  <span className="travel-card__region">
                    {place.region}
                  </span>
                </div>

                <div className="travel-card__content">
                  <h3>{place.name}</h3>

                  <p>{place.description}</p>

                  <span className="travel-card__more">
                    VIEW PLACE
                    <strong>↗</strong>
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="travel__empty">
            <span>⌕</span>
            <p>검색 결과가 없습니다.</p>
            <small>
              다른 지역이나 검색어를 입력해보세요.
            </small>
          </div>
        )}

        {filteredPlaces.length > 0 && (
          <div className="travel__loading">
            <span />
            <span />
            <span />
          </div>
        )}
      </section>
    </main>
  );
};

export default Travel;