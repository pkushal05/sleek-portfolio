import interstellar from '@/assets/images/interstellar.webp'

const MovieCard = () => {
  return (
      <div className="p-7 border rounded-xl bg-card relative">
          <img src={interstellar} alt="" className='w-full h-full rounded-xl object-cover' />
      </div>
  );
}

export default MovieCard