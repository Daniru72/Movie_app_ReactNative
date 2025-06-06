import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";

export default function Index() {

  const router = useRouter();

  const {data: movies, loading: moviesLoading, error: moviesError} = useFetch(()=> fetchMovies({query:''}))

  return (
    <View className="flex-1 bg-primary">
      <Image
         source={images.bg} 
         className="absolute w-full z-0"
      />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight:"100%", paddingBottom: 10 }}>
        <Image
          source={icons.logo}
          className="w-12 h-10 mx-auto mt-20 mb-5"
        />

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center"/>
        ): moviesError ? (
          <Text className="text-white text-center mt-10">{moviesError.message}</Text>
        ):(
          <View className="flex-1 mt-5">
          <SearchBar
            onPress={()=>{router.push("/search")}}
            placeholder="Search for a movie"
            value=""
            onChangeText={()=>{}}
          />
          <>
          <Text className="text-white text-2xl font-bold mt-5 mb-3">Lates Movies</Text>

          <FlatList
            data={movies}
            renderItem={({item})=>(
              <MovieCard
                 {...item}
              />
            )}
            keyExtractor={(item)=> item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              marginBottom: 10,
              marginRight: 5,
              gap:20
            }}
            className="mt-2 pb-32"
            scrollEnabled={false}
          />


          </>
         
        </View>
        )}

   

      </ScrollView>
    
    </View>
  );
}
