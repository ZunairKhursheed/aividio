
import { useState } from "react";

import { useSession, signOut } from 'next-auth/react';

import { useContext, useEffect } from 'react';



export default function Creation() {

  const [creations, setCreations] = useState();
  const session = useSession();

  const { status, data } = session;

  const fetchUserCreation = async () => {

    const creation_data = await fetch(`/api/fetch-user-creation-period?email=${res_user?.email}&currentPeriodStart=${res_user?.currentPeriodStart}`);
    //const creation_data = await response.json();

    const creations = creation_data.map((creation) => ({
      ...creation,
      createdAt: Math.floor((new Date() - creation.createdAt) / 1000),
    }));
    setCreations(creations);
  }

  useEffect(() => {

    fetchUserCreation();

  });
  //const [videoSrc, setVideoSrc] = useState();
  //console.log(creation);
  return (
    <>
      {creations.map((creation) => (<div
        className="container max-w-2xl mx-auto p-5"
        key={creation.id}
      >

        <div >
          <video controls muted autoPlay
            width={512}
            height={512}
            src={video_url}
            alt="output"
          />
        </div>
        <p className="py-3 text-sm opacity-50">video_duration: {video_duration}</p>
      </div>
      ))};
    </>
  )
}
