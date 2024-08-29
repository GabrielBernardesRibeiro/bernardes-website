import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 pt-10 h-full w-full">
      <header className="flex flex-row justify-between w-full">
        <Image
          src="/logoWithA.png"
          width={250}
          height={100}
          objectFit="contain"
          className="object-contain max-[568px]:w-48 max-[488px]:w-36 max-[392px]:w-32 max-[349px]:w-22"
          alt="logoImage"
        />
        <Image
          src="/cau branco.png"
          width={200}
          height={100}
          className="object-contain max-[488px]:w-44 max-[425px]:w-40 max-[392px]:w-32 max-[349px]:w-22"
          alt="cauLogo"
        />
      </header>
      <div className="flex flex-col justify-center grow relative w-full">
        <div className="absolute w-full h-full">
          <Image
            src="/pretty-build.webp"
            width={100}
            height={100}
            className="w-full h-full object-cover z-10"
            style={{
              filter: "blur(10px)",
            }}
            alt="bacgroundImage"
          />
        </div>
        <div className="flex flex-row items-center justify-evenly w-full z-20 max-[620px]:flex-col">
          {/* <Image
            src="/logo Bernardes Branco.png"
            width={200}
            height={100}
            className="object-contain "
            alt="logoBernardes"
          /> */}
          <div className="flex flex-col justify-center items-center max-[620px]:mt-10">
            <Image
              src="/qrwhatsapp.png"
              width={150}
              height={150}
              className="object-contain"
              alt="qrcodeWhatsapp"
            />
            <div className="flex flex-row items-center pt-4">
              <Image
                src="Whats_branco.png"
                width={30}
                height={30}
                className="object-contain mr-4"
                alt="whatsappIcon"
              />
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=5511976361971&text=Tenho interesse em seus serviços de arquitetura"
                }
                target="_blank"
                className="text-white cursor-pointer"
                style={{ fontSize: 22 }}
              >
                (11) 9 7636-1971
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
