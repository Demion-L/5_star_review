import Image from "next/image";
import StarRating from "./StarRating";
const ExpertCard: React.FC<{
  name: string;
  image: string;
  description: string;
}> = ({ name, image, description }) => {
  return (
    <div className='card flex flex-col gap-4 max-w-[200px] border border-slate-50 rounded p-2'>
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        layout='responsive'
        objectFit='cover'
      />
      <h2 className='text-xl font-bold'>{name}</h2>
      <p>{description}</p>
      <div className='mb-2'>
        <p>Rate me please:</p>
        <StarRating onRatingSubmit={(rating) => console.log(rating)} />
      </div>
    </div>
  );
};

export default ExpertCard;
