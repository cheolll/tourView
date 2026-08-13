import { useEffect, useRef, useState } from 'react';
import './Travel.css';
import { useRegions, useTourPlaces, useTourSearch } from '../../queries/tourQueries';
import { useNavigate } from 'react-router-dom';


const Travel = () => {
  const [selectedRegionCode, setSelectedRegionCode] = useState<string>();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchParams, setSearchParams] = useState('');
  const [showTopButton, setShowTopButton] = useState(false);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const isSearching = searchParams.length > 0;

  const handleSearch = () => {
    setSearchParams(searchKeyword.trim());
  };

  const { data: regions =[] , isLoading: isLoadingRegions} = useRegions();

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useTourPlaces(
    {
      numOfRows: 10,
      contentTypeId: '12',
      lDongRegnCd: selectedRegionCode,
    },
    {
      enabled: !isSearching,
    }
  );
  
  const {
    data: searchData,
    isLoading: isSearchLoading,
    isError: isSearchError,
    fetchNextPage: fetchNextSearchPage,
    hasNextPage: hasNextSearchPage,
    isFetchingNextPage: isFetchingNextSearchPage
  } = useTourSearch({
    numOfRows: 10,
    keyword: searchParams,
    lDongRegnCd: selectedRegionCode,
  })

  const places = isSearching ? searchData?.pages.flatMap((page) => page.items)  ?? [] : data?.pages.flatMap((page) => page.items) ?? [];

  const loading = isSearching ? isSearchLoading : isLoading
  const error = isSearching ? isSearchError : isError

  const totalCount = isSearching
  ? searchData?.pages[0]?.totalCount
  : data?.pages[0]?.totalCount;

  const fetchNext = isSearching ? fetchNextSearchPage : fetchNextPage;

  const hasNext = isSearching
    ? hasNextSearchPage
    : hasNextPage;

  const isFetchingNext = isSearching
    ? isFetchingNextSearchPage
    : isFetchingNextPage;

  useEffect(() => {
    const target = loadMoreRef.current;

    if(!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if(entries[0].isIntersecting && hasNext && !isFetchingNext){
          fetchNext();
        }
      },{threshold: 0.1},
    )
    observer.observe(target);

    return () => observer.disconnect();
  },[fetchNext, hasNext, isFetchingNext])

  const getRegionName = (code?: string) => {
    return regions.find((region) => region.code === code)?.name ?? ''
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navigate = useNavigate();



  
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
                {!isLoadingRegions && regions.map((region) => (
                  <button
                    type="button"
                    key={region.code ?? 'all'}
                    className={
                      (selectedRegionCode ?? '') === (region.code ?? '')
                        ? 'active'
                        : ''
                    }
                    onClick={() => setSelectedRegionCode(region.code)}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="travel__search">
              <span className="travel__search-icon">⌕</span>

              <input
                type="text"
                value={searchKeyword}
                placeholder="여행지 또는 관광지를 검색해보세요"
                onChange={(event) => setSearchKeyword(event.target.value)}
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
              {selectedRegionCode
                ? `${getRegionName(selectedRegionCode)}의 여행지`
                : '여행지를 탐색해보세요.'}
            </h2>
          </div>

          <span className="travel__count">
            {totalCount}개의 여행지
          </span>
        </div>

        {/* 첫 페이지 로딩 */}
        {loading && (
          <div className="travel__empty">
            <p>여행지를 불러오는 중입니다.</p>
          </div>
        )}

        {/* 에러 */}
        {error && (
          <div className="travel__empty">
            <p>여행지를 불러오지 못했습니다.</p>
          </div>
        )}

        {/* 여행지 */}
        {!loading && !error && places.length > 0 && (
          <div className="travel__grid">
            {places.map((place) => (
              <article
                className="travel-card"
                key={place.contentid}
                onClick={() => navigate(`/travel/${place.contentid}`)}
              >
                <div className="travel-card__image">
                  <img
                    src={place.firstimage || place.firstimage2 || '/images/no-image.svg'}
                    alt={place.title}
                  />

                  <span className="travel-card__region">
                    {getRegionName(place.lDongRegnCd)}
                  </span>
                </div>

                <div className="travel-card__content">
                  <h3>{place.title}</h3>

                  <p>{place.addr1}</p>

                  <span className="travel-card__more">
                    VIEW PLACE
                    <strong>↗</strong>
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* 결과 없음 */}
        {!loading && !error && places.length === 0  && (
          <div className="travel__empty">
            <span>⌕</span>
            <p>검색 결과가 없습니다.</p>
            <small>
              다른 지역이나 검색어를 입력해보세요.
            </small>
          </div>
        )}

        {/* 무한스크롤 감지 영역 */}
        {places.length > 0 && (
          <div ref={loadMoreRef} className='travel__load-more' />
        )}

        {/* 다음 페이지 로딩 */}
        {isFetchingNext && (
          <div className="travel__loading">
            <span />
            <span />
            <span />
          </div>
        )}

        {/* 더 불러올 데이터가 없을 때 */}
        {!hasNext && places.length > 0 && (
          <div className="travel__end">
            더 이상 여행지가 없습니다.
          </div>
        )}
      </section>

      {showTopButton && (
        <button
          type="button"
          className="travel__top-button"
          onClick={scrollToTop}
          aria-label="맨 위로 이동"
        >
          <span>↑</span>
        </button>
      )}

    </main>
  );
};

export default Travel;