import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-3 p-4 hover:bg-gray-200 rounded-full cursor-pointer transition duration-70 transform ease-in hover:scale-75 animate-bounce">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-8 w-8 text-blue-500" />}
      <p className="hidden sm:inline-flex font-medium border-b">{title}</p>
    </div>
  );
}

export default SidebarRow;
