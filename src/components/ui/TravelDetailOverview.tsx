interface Props {
  overview: string;
}

const TravelDetailOverview = ({
  overview,
}: Props) => {
  if (!overview) {
    return null;
  }

  return (
    <section className="travel-detail__section">
      <div className="travel-detail__section-title">
        <span>01</span>
        <h2>ABOUT</h2>
      </div>

      <p className="travel-detail__overview">
        {overview}
      </p>
    </section>
  );
};

export default TravelDetailOverview;