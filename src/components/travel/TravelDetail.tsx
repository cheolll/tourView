import { useParams } from 'react-router-dom';
import './TravelDetail.css';
import { useTourDetailCommon, useTourDetailInfo } from '../../queries/tourQueries';
import TravelDetailHero from '../ui/TravelDetailHero';
import TravelDetailOverview from '../ui/TravelDetailOverview';
import TravelDetailLocation from '../ui/TravelDetailLocation';
import TravelDetailInfo from '../ui/TravelDetailInfo';
import TravelDetailState from '../ui/TravelDetailState';
import TravelDetailFloatingNav from '../ui/detailInfo/TravelDetailFloatingNav';
import { useEffect } from 'react';

const TravelDetail = () => {
  const { contentId } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }, [contentId]);

  const {
    data: detailCommonData,
    isLoading: isLoadingDetailCommon,
    isError: isErrorDetailCommon
  } = useTourDetailCommon(contentId);

  console.log(detailCommonData)

  const contentTypeId = detailCommonData?.item.contenttypeid;

  const {
    data: detailInfoData,
    isLoading: isLoadingDetailInfo,
    isError: isErrorDetailInfo,
  } = useTourDetailInfo(contentId, contentTypeId);

  if(isLoadingDetailCommon || isLoadingDetailInfo) {
    return <TravelDetailState message="여행지 정보를 불러오는 중입니다." />;
  }

  if (isErrorDetailCommon || isErrorDetailInfo || !detailCommonData?.item || !detailInfoData?.item) {
    return <TravelDetailState message="여행지 정보를 불러오지 못했습니다." />;
  }

  const commonItem = detailCommonData.item;

  const infoItem = detailInfoData.item;


  return (
    <main className="travel-detail">
      <div className="travel-detail__inner">
        {/* <TravelDetailHeader /> */}

        <TravelDetailHero item={commonItem} />

        <TravelDetailOverview
          overview={commonItem.overview}
        />

        <TravelDetailLocation
          address={commonItem.addr1}
          addressDetail={commonItem.addr2}
          mapX={commonItem.mapx}
          mapY={commonItem.mapy}
        />

        <TravelDetailInfo item={infoItem} />

        <TravelDetailFloatingNav />
      </div>
    </main>
  );
};

export default TravelDetail;