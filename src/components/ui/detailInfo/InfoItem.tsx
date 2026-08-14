interface InfoItemProps {
  label: string;
  value?: string;
}

const InfoItem = ({
  label,
  value,
}: InfoItemProps) => {
  if (!value) {
    return null;
  }

  return (
    <div className="travel-detail__info-item">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
};

export default InfoItem;