"use client"

import Image from 'next/image'
import Body from "./components/HeroSection";
import Feature from "./components/Features"
import Card from './components/Card';
import Alert from './components/Alert';
import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
// import { initFirebase } from './firebase/firebaseApp';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// import { useAuthState } from 'react-firebase-hooks/auth';


export default function Home() {

  // initFirebase()
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();

  // const signIn =async () => {
  //   const result  = await signInWithPopup(auth, provider);
  //   console.log(result.user)
  // }

  // const app = initFirebase();
  // console.log(app)

  const [ allData, setAllData ] = useState<any[]>([]);

  const getAllData = () => {
    let temp = JSON.parse(localStorage.getItem('formDataArray') || "[]");
    setAllData(temp);
  }

  useEffect(() => {
    getAllData();
  }, [])

  return (
    <main className="">
      {/* <Body/>
      <Feature/> */}
      <Card 
        imageURL="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        title="Headphone" 
        description="This is a good quality headphone available for lending."
        cost={10}
      />
        {allData.map((data: any, index: any) => (
              <Card 
                key={index}
                imageURL={data.imageUrl}
                title={data.productName}
                description={data.description}
                cost={data.lendingPrize}
              />
        ))}
      {/* <Card/> */}
    </main>
  );
}
