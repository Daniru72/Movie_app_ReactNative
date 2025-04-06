import { icons } from '@/constants/icons'
import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'

interface Props {
  onPress: () => void
  placeholder: string
}

function SearchBar({onPress, placeholder}:Props) {
  return (
    <View className='flex-row items-center  bg-dark-200 rounded-full px-5 py-4 shadow-md'>
        <Image
          source={icons.search}
          className="size-5 "resizeMode="contain" tintColor="#ab8bff"
        />
        <TextInput onPress={onPress}
          placeholder={placeholder}
          value=''
          onChangeText={()=>{}}
          placeholderTextColor={"#a8b5db"}
          className='flex-1 ml-2 text-white'/>
    </View>
  )
}

export default SearchBar
