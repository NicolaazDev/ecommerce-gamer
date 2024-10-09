const brands = [
  {
    brand: "Intel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/800px-Intel_logo_%282006-2020%29.svg.png",
  },
  {
    brand: "AMD",
    logo: "https://1000logos.net/wp-content/uploads/2020/05/AMD-Logo.png",
  },
  {
    brand: "ASUS",
    logo: "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png",
  },
  {
    brand: "MSI",
    logo: "https://logodownload.org/wp-content/uploads/2014/09/msi-logo-1.png",
  },
  {
    brand: "Gigabyte",
    logo: "https://logodownload.org/wp-content/uploads/2014/09/gigabyte-logo-0.png",
  },
  {
    brand: "Biostar",
    logo: "https://logonoid.com/images/biostar-logo.png",
  },
  {
    brand: "Mancer",
    logo: "https://cdn.dooca.store/559/brands/7pklzjfiaegteln9eg0gyjplefcr6pghy0zz.svg?v=1694613878?v=1694613878&webp=0",
  },
  {
    brand: "Nvidia",
    logo: "https://www.cdnlogo.com/logos/n/65/nvidia-wordmark.svg",
  },
];

export default function Brands() {
  return (
    <section className="h-auto w-[94%] center-col mt-20 !items-start">
      <div className="center-col !items-start w-full">
        <h1 className="text-5xl font-poppinsSemibold">Marcas</h1>
        <p className="text-lg font-poppinsLight">
          Temos produtos de diversas marcas!
        </p>
      </div>
      <div className="grid-cols-4 grid gap-1 w-full mt-10">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="w-full h-[170px] bg-[#f7f7f7] rounded-2xl center group"
          >
            <img
              src={brand.logo}
              alt={brand.brand}
              className="h-auto grayscale w-[80px] object-cover scale-[1.1] group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
