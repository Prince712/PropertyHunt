import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect, Slot } from 'expo-router'

const AppLayout = () => {
    const {isLoggedIn,loading} = useGlobalContext();
  
    if(loading){
        return (
            <SafeAreaView className='bg-white h-full flex items-center justify-center'>
              <ActivityIndicator className='text-primary-300' size={'large'}/>
            </SafeAreaView>
          )
    }

    if(!isLoggedIn) return <Redirect href={"/sign-in"}/>;

    return <Slot/>
  
  
}

export default AppLayout