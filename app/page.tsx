import NickNameModule from "@/components/nickNameModule";
import Image from "next/image";

async function getTsenwenRiverStatus(){
  const res = await fetch("https://rivercare.imlab.app/api/rivers/1");
  return res.json();
}

const TsenwenRiver = {
  status: false
}

export default async function Home() {
  const data = await getTsenwenRiverStatus();
  // checking status of TsenwenRiver
  TsenwenRiver.status = true; // to be replaced with actual status

  return (
    <main className="center">
      <div className="logo">
        <Image
          src="/transparent.png"
          width={500}
          height={500}
          alt="Interface for Care Logo"
        />
      </div>
      <h1>Tsen-wen River StoryTeller</h1>
      {TsenwenRiver.status?
      <NickNameModule />:
      <p>the river is offline</p>
      }
    </main>
  );
}
