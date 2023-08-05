import React, { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getProduct = async () => {
  const res = await prisma.dataOrang.findMany({
    select: {
      Id: true,
      Nama: true,
      Ismale: true,
      Umur: true,
      Alamat: true,
      Berat: true,
    },
  });
  return res;
};

export default async function ReadPlanet() {
  const paraorang = await getProduct();
  const [orangs, setorangs] = useState(paraorang);
  return (
    <main>
      <h1 className=" text-lg"> ini semua</h1>
      <div className="grid grid-cols-4 gap-10">
        {orangs.map((orang) => (
          <div key={orang.Id} className=" bg-sky-200 ">
            <h1 className="font-bold">
              {orang.Id} <span>{orang.Nama}</span>
            </h1>
            <h1>
              {orang.Ismale ? "Pria" : "Wanita"} <span>{orang.Umur}</span>
            </h1>
            <h1>{orang.Alamat}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
