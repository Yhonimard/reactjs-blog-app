const HomeCard = () => {
  return (
    <div className="card rounded-md shadow-md bg-neutral-900">
      <div className="p-4 flex items-center gap-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://source.unsplash.com/500x500" alt="" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-medium">nama orang</p>
          <p className="text-sm">210304</p>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/1000x1000"
        alt="img testing"
        className="object-cover h-72 sm:h-80 md:h-96 lg:h-[500px] w-full"
        loading="lazy"
      />
      <div className="card-body">testing</div>
    </div>
  );
};

export default HomeCard;
