"use client";

import Image from "next/image";
import SubHeader from "./SubHeader";
import Notification from "./Notification";
import LastActions from "./LastActions";

const names = ["Enes", "Furkan", "Furkan", "Murat", "Rıdvan"] as const;

function DrawerRightContent() {
  return (
    <div className="overflow-y-auto">
      <SubHeader title="Bildirimler" />
      <div className="flex flex-col gap-4 mb-8">
        <Notification title="Veri Girişi Yapılmamış" date="Bugün" />
        <Notification title="4 Yeni Kızgınlık" date="59 dakika önce" />
        <Notification title="2 Kayıtsız Tasma Algılandı" date="12 saat önce" />
        <Notification
          title="4 Tohumlama Yapıldı"
          date="Detay için tıklayınız..."
        />
      </div>
      <SubHeader title="Son İşlemler" />
      <div className="flex flex-col gap-4 mb-8">
        <LastActions title="Gebelik Teşhisi : 24 Numara" date="2 saat önce" />
        <LastActions title="Kuruya Ayrılış : 242 Numara" date="3 saat önce" />
        <LastActions title="Düşük Bildirimi : 2402" date="12 saat önce" />
        <LastActions title="1 Yeni Hayvan Eklendi : 2991" date="Dün" />
        <LastActions title="Sürüden Çıkarıldı : 203" date="4 gün önce" />
      </div>
      <SubHeader title="Hekimler" />
      <div className="mb-10">
        {names.map((name, index) => (
          <button
            key={index}
            className="flex gap-2 items-start my-3 cursor-pointer"
            onClick={() => {
              const modal = document.getElementById(
                "my_modal_2"
              ) as HTMLDialogElement | null;
              modal?.showModal();
            }}
          >
            <div className="rounded-full h-fit w-fit p-1">
              <Image
                src={"https://thispersondoesnotexist.com/"}
                alt="placeholder"
                width={100}
                height={100}
                className="rounded-full w-6"
              />
            </div>
            <h2 className="text-lg font-semibold">{name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DrawerRightContent;
