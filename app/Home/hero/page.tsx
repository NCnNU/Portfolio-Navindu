import Image from "next/image";

const Herosection = () => {
  return (
    <div className="relative overflow-hidden max-h-screen w-full border-2 ">
      {/* Image Container */}
      <Image
        src="/images/n2.png"
        alt="Picture of the author"
        width={100}
        height={10}
      />
      <div className="w-full h-full flex justify-end overflow-hidden">
        <Image
          src="/images/file.png"
          alt="Picture of the author"
          width={850}
          height={100}
          className="transform translate-x-1/4 -translate-y-44" // Move up by 10 units
        />
      </div>
    </div>
  );
};

export default Herosection;
